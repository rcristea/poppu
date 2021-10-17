package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.MovieModel;

public interface MovieRepository extends JpaRepository<MovieModel, Long> {

}
