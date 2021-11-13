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

    public ReviewModel() {

    }

    public ReviewModel(long reviewId, String title, double rating, String description) {
        this.reviewId = reviewId;
        this.title = title;
        this.rating = rating;
        this.description = description;
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
}
