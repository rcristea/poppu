package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.ActorModel;

public interface ActorRepository extends JpaRepository<ActorModel, Long> {

}
