package com.poppu.server.model;

import com.poppu.server.util.RatingCode;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "movie")
public class MovieModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "movie_id")
    private int movieId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "category", nullable = false, length = 45)
    private String category;

    // mapped associations to director_id, producer_id

    @Lob
    @Column(name = "synopsis")
    private String synopsis;

    @Enumerated(EnumType.STRING)
    @Column(name = "rating_code", nullable = false)
    private RatingCode rating;

    @Lob
    @Column(name = "trailer_photo", nullable = false)
    private String trailerPhoto;

    @Lob
    @Column(name = "trailer_link", nullable = false)
    private String trailerLink;

    public MovieModel() {

    }

    public MovieModel(String title, Date date, String category,
                      /*DirectorModel director, ProducerModel procuder,*/
                      String synopsis, RatingCode rating, String trailerPhoto,
                      String trailerLink) {
        this.title = title;
        this.date = date;
        this.category = category;
        /*
        this.director = director;
        this.producer = producer;
         */
        this.synopsis = synopsis;
        this.rating = rating;
        this.trailerPhoto = trailerPhoto;
        this.trailerLink = trailerLink;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public RatingCode getRating() {
        return rating;
    }

    public void setRating(RatingCode rating) {
        this.rating = rating;
    }

    public String getTrailerPhoto() {
        return trailerPhoto;
    }

    public void setTrailerPhoto(String trailerPhoto) {
        this.trailerPhoto = trailerPhoto;
    }

    public String getTrailerLink() {
        return trailerLink;
    }

    public void setTrailerLink(String trailerLink) {
        this.trailerLink = trailerLink;
    }
}
