package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.ShowModel;

public interface ShowRepository extends JpaRepository<ShowModel, Long> {

}
