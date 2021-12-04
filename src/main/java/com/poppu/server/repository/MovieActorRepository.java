package com.poppu.server.repository;

import com.poppu.server.key.MovieActorKey;
import com.poppu.server.model.MovieActorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "movieActors", path = "movieActors", excerptProjection = InlineMovieActorModel.class)
public interface MovieActorRepository extends JpaRepository<MovieActorModel, MovieActorKey> {

}