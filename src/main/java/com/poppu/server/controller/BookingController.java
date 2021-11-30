package com.poppu.server.controller;

import com.poppu.server.model.*;
import com.poppu.server.repository.*;
import com.poppu.server.util.TicketType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/booking")
public class BookingController {
    private final Logger log = LoggerFactory.getLogger(BookingController.class);
    private BookingRepository bookingRepository;
    private TicketRepository ticketRepository;

    private PromotionRepository promotionRepository;
    private UserRepository userRepository;
    private ShowRepository showRepository;
    private ShowroomRepository showroomRepository;
    private SeatRepository seatRepository;


    public BookingController(BookingRepository bookingRepository, TicketRepository ticketRepository, PromotionRepository promotionRepository, UserRepository userRepository, ShowRepository showRepository, ShowroomRepository showroomRepository, SeatRepository seatRepository) {
        this.bookingRepository = bookingRepository;
        this.ticketRepository = ticketRepository;

        this.promotionRepository = promotionRepository;
        this.userRepository = userRepository;
        this.showRepository = showRepository;
        this.showroomRepository = showroomRepository;
        this.seatRepository = seatRepository;
    }

    @PostMapping("/book")
    public BookingModel bookMovie(@RequestBody BookingRequest bookingRequest) {
        log.warn("Booking Request", bookingRequest);
        UserModel user = userRepository.findById(bookingRequest.getUserID()).get();
        log.warn("User", user);

        PromotionModel promo = null;
        if (bookingRequest.getPromotionID() == -1) {
            promo = null;
        } else {
            promo = promotionRepository.findById(bookingRequest.getPromotionID()).get();
        }

        BookingModel booking = new BookingModel(
                bookingRequest.getMovieTitle(),
                bookingRequest.getShowDateTime(),
                bookingRequest.getCardNum(),
                user,
                promo
                );
        log.warn("Booking", booking);

        AtomicLong adultCounter = new AtomicLong(bookingRequest.getAdultTickets());
        AtomicLong childCounter = new AtomicLong(bookingRequest.getChildTickets());
        AtomicLong seniorCounter = new AtomicLong(bookingRequest.getSeniorTickets());
        ArrayList<TicketModel> tickets = new ArrayList<TicketModel>();

        ShowModel show = this.showRepository.findById(bookingRequest.getShowID()).get();
        log.warn("Show", show);
        ShowroomModel showroom = this.showroomRepository.findById(bookingRequest.getShowroomID()).get();
        log.warn("Showroom", showroom);

        bookingRequest.getSeats().stream().map(s -> {
            TicketType ticketType = null;
            String seat = seatRepository.findById(s).get().getSeat();
            double price = 0;
            if (adultCounter.get() > 0) {
                ticketType = TicketType.Adult;
                adultCounter.addAndGet(-1);
                price = 10.00;
            } else if (childCounter.get() > 0) {
                ticketType = TicketType.Child;
                childCounter.addAndGet(-1);
                price = 9.00;
            } else if (seniorCounter.get() > 0) {
                ticketType = TicketType.Senior;
                seniorCounter.addAndGet(-1);
                price = 8.00;
            } else {
                log.error("Error with ticket types");
            }

            TicketModel ticket = new TicketModel(
                    ticketType,
                    price,
                    show,
                    showroom,
                    seat,
                    booking
            );
            tickets.add(ticket);
            return this.ticketRepository.save(ticket);
        }).collect(Collectors.toList());

        booking.setTickets(tickets);
        log.warn("Final Booking", booking);
        
        return this.bookingRepository.save(booking);
    }
}
