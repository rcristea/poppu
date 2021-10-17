package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.SeatAvailabilityModel;

public interface SeatAvailabilityRepository extends JpaRepository<SeatAvailabilityModel, Long> {

}