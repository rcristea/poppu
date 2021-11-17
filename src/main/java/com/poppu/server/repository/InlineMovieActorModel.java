package com.poppu.server.repository;

import com.poppu.server.key.MovieActorKey;
import com.poppu.server.model.ActorModel;
import com.poppu.server.model.MovieActorModel;
import com.poppu.server.model.MovieModel;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "inlineMovieActorModel", types = {MovieActorModel.class})
public interface InlineMovieActorModel {
    MovieActorKey getId();
    MovieModel getMovie();
    ActorModel getActor();
    String getRole();
}
