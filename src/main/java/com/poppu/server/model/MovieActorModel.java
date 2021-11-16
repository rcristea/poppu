package com.poppu.server.model;

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
    private MovieModel movie;

    @ManyToOne(optional = false)
    @MapsId("actorId")
    @JoinColumn(name = "actor_id", foreignKey = @ForeignKey(name = "FK_movie_actor_actor"))
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

    public MovieModel getMovie() {
        return movie;
    }

    public ActorModel getActor() {
        return actor;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
