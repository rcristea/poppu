package com.poppu.server.model;

import com.poppu.server.util.RatingCode;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

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

    @ManyToOne(optional = false)
    @JoinColumn(name = "director_id")
    private DirectorModel director;

    @ManyToOne(optional = false)
    @JoinColumn(name = "producer_id")
    private ProducerModel producer;

    @Lob
    @Column(name = "synopsis", nullable = false)
    private String synopsis;

    @Enumerated(EnumType.STRING)
    @Column(name = "rating_code", nullable = false, columnDefinition = "varchar(10) default 'Unrated'")
    private RatingCode rating;

    @Lob
    @Column(name = "trailer_photo", nullable = false)
    private String trailerPhoto;

    @Lob
    @Column(name = "trailer_link", nullable = false)
    private String trailerLink;

    @Column(name = "is_showing", nullable = false, columnDefinition = "tinyint(1) default 0")
    private boolean isShowing;

    @OneToMany(mappedBy = "movie")
    private Set<MovieActorModel> cast = new HashSet<MovieActorModel>();

    public MovieModel() {

    }

    public MovieModel(String title, Date date, String category,
                      DirectorModel director, ProducerModel producer,
                      String synopsis, RatingCode rating, String trailerPhoto,
                      String trailerLink, boolean isShowing) {
        this.title = title;
        this.date = date;
        this.category = category;
        this.director = director;
        this.producer = producer;
        this.synopsis = synopsis;
        this.rating = rating;
        this.trailerPhoto = trailerPhoto;
        this.trailerLink = trailerLink;
        this.isShowing = isShowing;
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

    public DirectorModel getDirector() {
        return director;
    }

    public ProducerModel getProducer() {
        return producer;
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

    // if "Now showing, will return 'true'; otherwise, return 'false' (coming soon)
    public boolean isShowing() {
        return isShowing;
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

    public void setDirector(DirectorModel director) {
        this.director = director;
    }

    public void setProducer(ProducerModel producer) {
        this.producer = producer;
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

    public void setShowing(boolean showing) {
        isShowing = showing;
    }

    // public Set<ActorModel> getActors() { }
    // public void addActor(ActorModel a) { }
    // public void removeActor(ActorModel a) { }
    // private boolean findActor(ActorModel a) { }

    // maybe methods for creating or checking for directors and producers to ensure that they were created?
}
