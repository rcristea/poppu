package com.poppu.server.controller;

import com.poppu.server.model.ShowModel;
import com.poppu.server.repository.ShowRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/show")
public class ShowController {
    private ShowRepository showRepository;

    public ShowController(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }

    @GetMapping("/")
    public List<ShowModel> getShows() {return this.showRepository.findAll();}

    @GetMapping("/movie/{id}")
    public List<ShowModel> getByMovieId(@PathVariable("id") long movieId) {
        return this.showRepository
                .findAllByMovie(movieId);
    }
}
