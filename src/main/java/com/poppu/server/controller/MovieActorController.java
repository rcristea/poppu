package com.poppu.server.controller;

import com.poppu.server.model.MovieActorModel;
import com.poppu.server.repository.MovieActorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/movieactors")
public class MovieActorController {
    private final Logger log = LoggerFactory.getLogger(ShowController.class);
    private MovieActorRepository movieActorRepository;

    public MovieActorController(MovieActorRepository movieActorRepository) {
        this.movieActorRepository = movieActorRepository;
    }

    @GetMapping("/")
    public List<MovieActorModel> getMovieActors() {
        return this.movieActorRepository.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<MovieActorModel> putMovieActor(@RequestBody MovieActorModel newMovieActorInfo, @PathVariable("id") long id) throws URISyntaxException {
        MovieActorModel updatedMovieActor = this.movieActorRepository.findById(id)
                .map(movieActor -> {
                    movieActor.setRole(newMovieActorInfo.getRole());
                    return this.movieActorRepository.save(movieActor);
                })
                .orElseGet(() -> this.movieActorRepository.save(newMovieActorInfo));
        return ResponseEntity
                .created(new URI("/api/movieactor/" + updatedMovieActor.getId()))
                .body(updatedMovieActor);
    }

    @PostMapping("/")
    public ResponseEntity<MovieActorModel> createMovieActor(@RequestBody MovieActorModel movieActor) throws URISyntaxException {
        MovieActorModel res = this.movieActorRepository.save(movieActor);
        return ResponseEntity
                .created(new URI("/api/movieactors/" + res.getId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMovieActor(@PathVariable("id") long id) {
        this.movieActorRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
