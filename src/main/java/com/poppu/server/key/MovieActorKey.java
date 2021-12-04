package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class MovieActorKey implements Serializable {

    @Column(name = "movie_id")
    private Long movieId;

    @Column(name = "actor_id")
    private Long actorId;

    public MovieActorKey() {

    }

    public MovieActorKey(long movieId, long actorId) {
        this.movieId = movieId;
        this.actorId = actorId;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public Long getActorId() {
        return actorId;
    }

    public void setActorId(Long actorId) {
        this.actorId = actorId;
    }
}
