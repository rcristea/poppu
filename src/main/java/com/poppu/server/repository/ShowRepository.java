package com.poppu.server.repository;

import com.poppu.server.model.MovieModel;
import com.poppu.server.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "shows", path = "shows")
public interface ShowRepository extends JpaRepository<ShowModel, Long> {
    List<ShowModel> findAllByMovie(@Param("movieId") long movieID);
}
