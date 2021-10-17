package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.MovieActorModel;

public interface MovieActorRepository extends JpaRepository<MovieActorModel, Long> {

}
