package com.poppu.server.controller;

import com.poppu.server.model.ShowModel;
import com.poppu.server.repository.ShowRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/shows")
public class ShowController {
    private final Logger log = LoggerFactory.getLogger(ShowController.class);
    private ShowRepository showRepository;

    public ShowController(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }

    @GetMapping("/")
    public List<ShowModel> getShows() {
        return this.showRepository.findAll();
    }

    @GetMapping("/byMovie/{movieID}")
    public List<ShowModel> getShows(@PathVariable("movieID") long movieID) {
        return this.showRepository.findAll().stream().filter(showModel -> {
            return showModel.getMovie().getMovieId() == movieID;
        }).collect(Collectors.toList());
    }

    @GetMapping("/movie/{id}")
    public List<ShowModel> getByMovieId(@PathVariable("movieId") long movieId) {
        return this.showRepository.findAllByMovie(movieId);
    }
  
    @PutMapping("/{id}")
    public ResponseEntity<ShowModel> putShow(@RequestBody ShowModel newShowInfo, @PathVariable("id") long id) throws URISyntaxException {
        ShowModel updatedShow = this.showRepository.findById(id)
                .map(show -> {
                    show.setDateTime(newShowInfo.getDateTime());
                    show.setMovie(newShowInfo.getMovie());
                    show.setShowroom(newShowInfo.getShowroom());
                    return this.showRepository.save(show);
                })
                .orElseGet(() -> this.showRepository.save(newShowInfo));
        return ResponseEntity
                .created(new URI("/api/show/" + updatedShow.getShowID()))
                .body(updatedShow);
    }

    @PostMapping("/")
    public ResponseEntity<ShowModel> createShow(@RequestBody ShowModel show) throws URISyntaxException {
        ShowModel res = this.showRepository.save(show);
        return ResponseEntity
                .created(new URI("/api/shows/" + res.getShowID()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteShow(@PathVariable("id") long id) {
        this.showRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
