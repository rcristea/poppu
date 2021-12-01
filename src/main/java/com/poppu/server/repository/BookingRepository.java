package com.poppu.server.repository;

import com.poppu.server.model.BookingModel;
import com.poppu.server.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "bookings", path = "bookings")
public interface BookingRepository extends JpaRepository<BookingModel, Long> {
    List<BookingModel> findAllByUser(@Param("user") UserModel user);
}
