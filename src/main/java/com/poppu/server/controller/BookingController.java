package com.poppu.server.controller;

import com.poppu.server.model.*;
import com.poppu.server.repository.*;
import com.poppu.server.util.TicketType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/booking")
public class BookingController {
    private final Logger log = LoggerFactory.getLogger(BookingController.class);

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private ShowroomRepository showroomRepository;

    @Autowired
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

    @GetMapping("/getByUser/{userId}")
    public List<BookingModel> getAllByUserId(@PathVariable("userId") long userId) {
        UserModel user = this.userRepository.findById(userId).get();
        List<BookingModel> bookings = this.bookingRepository.findAll();
        List<BookingModel> bookingsByUser = new LinkedList<>();
        bookings.forEach(booking -> {
            if (booking.getUser().getId() == user.getId()) {
                bookingsByUser.add(booking);
            }
        });
        return bookingsByUser;
    }

    @PostMapping("/book")
    public BookingModel bookMovie(@RequestBody BookingRequest bookingRequest) {
        log.warn("Booking Request", bookingRequest.toString());
        UserModel user = userRepository.findById(bookingRequest.getUserID()).get();
        log.warn("User", user);

        PromotionModel promo;
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
        BookingModel bookingRes = this.bookingRepository.save(booking);

        AtomicLong adultCounter = new AtomicLong(bookingRequest.getAdultTickets());
        AtomicLong childCounter = new AtomicLong(bookingRequest.getChildTickets());
        AtomicLong seniorCounter = new AtomicLong(bookingRequest.getSeniorTickets());

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
                    bookingRes
            );
            return this.ticketRepository.save(ticket);
        }).collect(Collectors.toList());

        return this.bookingRepository.save(booking);
    }
}
