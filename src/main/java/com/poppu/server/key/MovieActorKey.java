package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class MovieActorKey implements Serializable {

    @Column(name = "movie_id")
    private int movieId;

    @Column(name = "actor_id")
    private int actorId;

    public MovieActorKey() {

    }

    public MovieActorKey(int movieId, int actorId) {
        this.movieId = movieId;
        this.actorId = actorId;
    }

    public int getMovieId() {
        return movieId;
    }

    public int getActorId() {
        return actorId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public void setActorId(int actorId) {
        this.actorId = actorId;
    }
}
