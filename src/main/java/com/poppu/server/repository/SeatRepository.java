package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.SeatModel;

public interface SeatRepository extends JpaRepository<SeatModel, Long> {

}
