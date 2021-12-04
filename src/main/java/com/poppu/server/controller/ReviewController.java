package com.poppu.server.controller;

import com.poppu.server.model.ReviewModel;
import com.poppu.server.model.ShowModel;
import com.poppu.server.repository.ReviewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private final Logger log = LoggerFactory.getLogger(ShowController.class);

    @Autowired
    private ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping("/")
    public List<ReviewModel> getReviews() {
        return this.reviewRepository.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewModel> putReview(@RequestBody ReviewModel newReviewInfo, @PathVariable("id") long id) throws URISyntaxException {
        ReviewModel updatedReview = this.reviewRepository.findById(id)
                .map(review -> {
                    review.setTitle(newReviewInfo.getTitle());
                    review.setRating(newReviewInfo.getRating());
                    review.setDescription(newReviewInfo.getDescription());
                    review.setMovie(newReviewInfo.getMovie());
                    return this.reviewRepository.save(review);
                })
                .orElseGet(() -> this.reviewRepository.save(newReviewInfo));
        return ResponseEntity
                .created(new URI("/api/review/" + updatedReview.getReviewId()))
                .body(updatedReview);
    }

    @PostMapping("/")
    public ResponseEntity<ReviewModel> createReview(@RequestBody ReviewModel review) throws URISyntaxException {
        ReviewModel res = this.reviewRepository.save(review);
        return ResponseEntity
                .created(new URI("/api/reviews/" + res.getReviewId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteReview(@PathVariable("id") long id) {
        this.reviewRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
