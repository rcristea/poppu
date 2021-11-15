package com.poppu.server.repository;

import com.poppu.server.model.SeatModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "seats", path = "seats")
public interface SeatRepository extends JpaRepository<SeatModel, Long> {
    List<SeatModel> findAllByShowroom(@Param("showroom") String showroom);
}
