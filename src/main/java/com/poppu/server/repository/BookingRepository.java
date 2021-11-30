package com.poppu.server.repository;

import com.poppu.server.model.BookingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "bookings", path = "bookings")
public interface BookingRepository extends JpaRepository<BookingModel, Long> {
}
