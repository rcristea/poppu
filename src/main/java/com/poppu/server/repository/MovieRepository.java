package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.MovieModel;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "movies", path = "movies")
public interface MovieRepository extends JpaRepository<MovieModel, Long> {

}