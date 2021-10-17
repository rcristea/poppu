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

    public int getMovieId() {
        return movieId;
    }

    public String getTitle() {
        return title;
    }

    public Date getDate() {
        return date;
    }

    public String getCategory() {
        return category;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public RatingCode getRating() {
        return rating;
    }

    public String getTrailerPhoto() {
        return trailerPhoto;
    }

    public String getTrailerLink() {
        return trailerLink;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public void setRating(RatingCode rating) {
        this.rating = rating;
    }

    public void setTrailerPhoto(String trailerPhoto) {
        this.trailerPhoto = trailerPhoto;
    }

    public void setTrailerLink(String trailerLink) {
        this.trailerLink = trailerLink;
    }
}
