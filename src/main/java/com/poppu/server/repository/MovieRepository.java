package com.poppu.server.repository;

import com.poppu.server.model.MovieModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "movies", path = "movies")
public interface MovieRepository extends JpaRepository<MovieModel, Long> {
    List<MovieModel> findAllByCategory(@Param("category") String category);
    List<MovieModel> findAllByRating(@Param("rating") String rating);
    List<MovieModel> findAllByCategoryAndRating(@Param("category") String category, @Param("rating") String rating);
    List<MovieModel> findAllByProducer(@Param("producer") String producer);
    List<MovieModel> findAllByDirector(@Param("director") String director);
    MovieModel findDistinctByTitle(@Param("title") String title);
}
