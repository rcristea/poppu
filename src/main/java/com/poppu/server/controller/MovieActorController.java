package com.poppu.server.controller;

import com.poppu.server.key.MovieActorKey;
import com.poppu.server.model.ActorModel;
import com.poppu.server.model.MovieActorModel;
import com.poppu.server.model.MovieModel;
import com.poppu.server.repository.ActorRepository;
import com.poppu.server.repository.MovieActorRepository;
import com.poppu.server.repository.MovieRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/movieActors")
public class MovieActorController {
    private final Logger log = LoggerFactory.getLogger(MovieActorController.class);
    private MovieActorRepository movieActorRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private ActorRepository actorRepository;

    public MovieActorController(MovieActorRepository movieActorRepository, MovieRepository movieRepository, ActorRepository actorRepository) {
        this.movieActorRepository = movieActorRepository;
        this.movieRepository = movieRepository;
        this.actorRepository = actorRepository;
    }

    @GetMapping("/")
    public List<MovieActorModel> getMovieActors() {
        return this.movieActorRepository.findAll();
    }

    @GetMapping("/{movieID}/{actorID}")
    public MovieActorModel postMovieActor(@PathVariable("movieID") long movieID, @PathVariable("actorID") long actorID) {
        MovieModel movie = this.movieRepository.getById(movieID);
        ActorModel actor = this.actorRepository.getById(actorID);
        MovieActorModel m = new MovieActorModel(movie, actor, "N/A");
        MovieActorKey mkey = new MovieActorKey(movieID, actorID);
        m.setId(mkey);
        log.warn(m.toString());
        MovieActorModel res = this.movieActorRepository.save(m);
        return res;
    }

    @PostMapping("/")
    public ResponseEntity<MovieActorModel> createMovieActor(@RequestBody MovieActorModel movieActor) throws URISyntaxException {
        MovieActorModel res = this.movieActorRepository.save(movieActor);
        return ResponseEntity
                .created(new URI("/api/movieactors/" + res.getId()))
                .body(res);
    }
}
