package com.poppu.server.controller;

import com.poppu.server.model.SeatModel;
import com.poppu.server.repository.SeatRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/seats")
public class SeatController {
    private final Logger log = LoggerFactory.getLogger(SeatController.class);
    private SeatRepository seatRepository;

    public SeatController(SeatRepository seatRepository) {
        this.seatRepository = seatRepository;
    }

    @GetMapping("/")
    public List<SeatModel> getSeats() {
        return this.seatRepository.findAll();
    }

    @GetMapping("/showroom/{showroomId}")
    public List<SeatModel> getAllByShowroomId(@PathVariable("showroomId") long showroomId) {
        List<SeatModel> allSeats = this.getSeats();
        List<SeatModel> allSeatsWithShowroom = new LinkedList<>();
        for (SeatModel seat: allSeats) {
            if (seat.getShowroom().getShowroomId() == showroomId) {
                allSeatsWithShowroom.add(seat);
            }
        }

        return allSeatsWithShowroom;
    }
}
