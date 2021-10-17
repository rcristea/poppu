package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.DirectorModel;

public interface DirectorRepository extends JpaRepository<DirectorModel, Long> {

}