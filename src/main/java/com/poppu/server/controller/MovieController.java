package com.poppu.server.controller;

import com.poppu.server.model.MovieModel;
import com.poppu.server.model.ShowModel;
import com.poppu.server.repository.MovieRepository;
import com.poppu.server.repository.ShowRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private MovieRepository movieRepository;
    private ShowRepository showRepository;

    public MovieController(MovieRepository movieRepository, ShowRepository showRepository) {
        this.movieRepository = movieRepository;
        this.showRepository = showRepository;
    }

    @GetMapping("/")
    public List<MovieModel> getMovies() {return this.movieRepository.findAll();}

    @GetMapping("/category")
    public List<MovieModel> getMoviesByCategory(@RequestParam("category") String category) {
        return this.movieRepository.findAllByCategory(category);
    }

    @GetMapping("/title")
    public ResponseEntity<MovieModel> getMovieByTitle(@RequestParam("title") String title) {
        Optional<MovieModel> getMovieByTitleTest = Optional.ofNullable(this.movieRepository.findDistinctByTitle(title));
        return getMovieByTitleTest.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") long id) {
        List<ShowModel> list = this.showRepository.findAllByMovie(id);
        list.forEach(show -> { this.showRepository.deleteById(show.getShowID()); });
        this.movieRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
