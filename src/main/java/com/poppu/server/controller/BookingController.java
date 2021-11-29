package com.poppu.server.controller;

import com.poppu.server.model.*;
import com.poppu.server.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

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


    public BookingController(BookingRepository bookingRepository, TicketRepository ticketRepository, UserRepository userRepository, ShowRepository showRepository, ShowroomRepository showroomRepository, PromotionRepository promotionRepository) {
        this.bookingRepository = bookingRepository;
        this.ticketRepository = ticketRepository;

        this.promotionRepository = promotionRepository;
        this.userRepository = userRepository;
        this.showRepository = showRepository;
        this.showroomRepository = showroomRepository;
    }

    @PostMapping("/book")
    public BookingModel bookMovie(@RequestBody BookingRequest bookingRequest) {
        log.warn(bookingRequest.toString());

        UserModel user = userRepository.findById(bookingRequest.getUserID()).get();
        log.warn(user.toString());

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
        log.warn(booking.toString());

        BookingModel bookingRes = bookingRepository.save(booking);
        return bookingRes;
    }
}
