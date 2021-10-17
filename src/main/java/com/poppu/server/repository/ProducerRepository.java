package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.ProducerModel;

public interface ProducerRepository extends JpaRepository<ProducerModel, Long> {

}
