package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "reviews")
public class ReviewModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_generator")
    @SequenceGenerator(name = "review_generator")
    @Column(name = "id")
    private long reviewId;

    @Column(name = "title")
    private String title;

    @Column(name = "rating", precision = 2, scale = 1)
    private double rating;

    @Lob
    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "movie_id", nullable = false, foreignKey = @ForeignKey(name = "FK_review_movie"))
    private MovieModel movie;

    public ReviewModel() {

    }

    public ReviewModel(long reviewId, String title, double rating, String description, MovieModel movie) {
        this.reviewId = reviewId;
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.movie = movie;
    }

    public long getReviewId() {
        return reviewId;
    }

    public String getTitle() {
        return title;
    }

    public double getRating() {
        return rating;
    }

    public String getDescription() {
        return description;
    }

    public MovieModel getMovie() {
        return movie;
    }

    public void setReviewId(long reviewId) {
        this.reviewId = reviewId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setMovie(MovieModel movie) {
        this.movie = movie;
    }
}
