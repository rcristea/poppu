package com.poppu.server.controller;

import com.poppu.server.model.SeatAvailabilityModel;
import com.poppu.server.repository.SeatAvailabilityRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/seatavailabilities")
public class SeatAvailabilityController {
    private final Logger log = LoggerFactory.getLogger(ShowController.class);
    private SeatAvailabilityRepository seatAvailabilityRepository;

    public SeatAvailabilityController(SeatAvailabilityRepository seatAvailabilityRepository) {
        this.seatAvailabilityRepository = seatAvailabilityRepository;
    }

    @GetMapping("/")
    public List<SeatAvailabilityModel> getSeatAvailabilities() {
        return this.seatAvailabilityRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity<SeatAvailabilityModel> createSeatAvailability(@RequestBody SeatAvailabilityModel seatAvailability) throws URISyntaxException {
        SeatAvailabilityModel res = this.seatAvailabilityRepository.save(seatAvailability);
        return ResponseEntity
                .created(new URI("/api/seatavailabilities/" + res.getId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteSeatAvailability(@PathVariable("id") long id) {
        this.seatAvailabilityRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
