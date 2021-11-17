package com.poppu.server.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.poppu.server.key.MovieActorKey;

import javax.persistence.*;

@Entity
@Table(name = "movie_actors")
public class MovieActorModel {

    @EmbeddedId
    private MovieActorKey id;

    @ManyToOne(optional = false)
    @MapsId("movieId")
    @JoinColumn(name = "movie_id", foreignKey = @ForeignKey(name = "FK_movie_actor_movie"))
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private MovieModel movie;

    @ManyToOne(optional = false)
    @MapsId("actorId")
    @JoinColumn(name = "actor_id", foreignKey = @ForeignKey(name = "FK_movie_actor_actor"))
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private ActorModel actor;

    @Column(name = "role", nullable = false)
    private String role;

    public MovieActorModel() {

    }

    public MovieActorModel(MovieModel movie, ActorModel actor, String role) {
        this.movie = movie;
        this.actor = actor;
        this.role = role;
    }

    public MovieActorKey getId() {
        return id;
    }

    public void setId(MovieActorKey id) {
        this.id = id;
    }

    public MovieModel getMovie() {
        return movie;
    }

    public void setMovie(MovieModel movie) {
        this.movie = movie;
    }

    public ActorModel getActor() {
        return actor;
    }

    public void setActor(ActorModel actor) {
        this.actor = actor;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "MovieActorModel{" +
                "id=" + id +
                ", movie=" + movie +
                ", actor=" + actor +
                ", role='" + role + '\'' +
                '}';
    }
}
