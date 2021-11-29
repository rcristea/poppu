package com.poppu.server.controller;

import com.poppu.server.key.SeatAvailabilityKey;
import com.poppu.server.model.SeatAvailabilityModel;
import com.poppu.server.model.SeatModel;
import com.poppu.server.model.ShowModel;
import com.poppu.server.model.ShowroomModel;
import com.poppu.server.repository.SeatAvailabilityRepository;
import com.poppu.server.repository.SeatRepository;
import com.poppu.server.repository.ShowRepository;
import com.poppu.server.repository.ShowroomRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/seatAvailabilities")
public class SeatAvailabilityController {
    private final Logger log = LoggerFactory.getLogger(ShowController.class);
    private SeatAvailabilityRepository seatAvailabilityRepository;
    private SeatRepository seatRepository;
    private ShowRepository showRepository;
    private ShowroomRepository showroomRepository;

    public SeatAvailabilityController(SeatAvailabilityRepository seatAvailabilityRepository, ShowRepository showRepository, ShowroomRepository showroomRepository, SeatRepository seatRepository) {
        this.seatAvailabilityRepository = seatAvailabilityRepository;
        this.showRepository = showRepository;
        this.showroomRepository = showroomRepository;
        this.seatRepository = seatRepository;
    }

    @GetMapping("/")
    public List<SeatAvailabilityModel> getSeatAvailabilities() {
        return this.seatAvailabilityRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity<SeatAvailabilityModel> createSeatAvailability(@RequestBody SeatAvailabilityModel seatAvailability) throws URISyntaxException {
        SeatAvailabilityModel res = this.seatAvailabilityRepository.save(seatAvailability);
        return ResponseEntity
                .created(new URI("/api/seatAvailabilities/" + res.getId()))
                .body(res);
    }

    @GetMapping("/show/{showID}")
    public List<SeatAvailabilityModel> getAllWithShowId(@PathVariable("showID") long showID) {
        List<SeatAvailabilityModel> allSeatAvailabilities = this.getSeatAvailabilities();
        List<SeatAvailabilityModel> allSeatAvailabilitiesWithShowId = new ArrayList<>();
        for (SeatAvailabilityModel seatAvailability : allSeatAvailabilities) {
            if (seatAvailability.getId().getShowId() == showID) {
                allSeatAvailabilitiesWithShowId.add(seatAvailability);
            }
        }

        return allSeatAvailabilitiesWithShowId;
    }

    @GetMapping("/{showID}/{showroomID}/{seatID}")
    public SeatAvailabilityModel getSeatAvailabilityModel(@PathVariable("showID") long showID, @PathVariable("showroomID") long showroomID, @PathVariable("seatID") long seatID) {
        ShowModel show = this.showRepository.findById(showID).get();
        ShowroomModel showroom = this.showroomRepository.findById(showroomID).get();
        SeatModel seat = this.seatRepository.findById(seatID).get();
        SeatAvailabilityKey key = new SeatAvailabilityKey(showID, showroomID, seatID);
        SeatAvailabilityModel model = new SeatAvailabilityModel(show, showroom, seat, true);
        model.setId(key);
        log.warn(model.toString());
        return this.seatAvailabilityRepository.save(model);
    }
}
