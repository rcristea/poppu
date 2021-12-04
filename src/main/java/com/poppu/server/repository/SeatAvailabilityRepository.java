package com.poppu.server.repository;

import com.poppu.server.key.SeatAvailabilityKey;
import com.poppu.server.model.SeatAvailabilityModel;
import com.poppu.server.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "seatavailabilities", path = "seatavailabilities")
public interface SeatAvailabilityRepository extends JpaRepository<SeatAvailabilityModel, SeatAvailabilityKey> {
    List<SeatAvailabilityModel> findAllByShow(@Param("show") ShowModel show);
}
