package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "movie_actor")
public class MovieActorModel {
    // implement the foreign keys for movie_id, actor_id

    @Column(name = "role", nullable = false)
    private String role;

    public MovieActorModel() {

    }

    public MovieActorModel(/*MovieModel movie, ActorModel actor,*/String role) {
        /*
        this.movie = movie;
        this.actor = actor
         */
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
