package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class MovieActorKey implements Serializable {

    @Column(name = "movie_id")
    private long movieId;

    @Column(name = "actor_id")
    private long actorId;

    public MovieActorKey() {

    }

    public MovieActorKey(long movieId, long actorId) {
        this.movieId = movieId;
        this.actorId = actorId;
    }

    public long getMovieId() {
        return movieId;
    }

    public long getActorId() {
        return actorId;
    }
}
