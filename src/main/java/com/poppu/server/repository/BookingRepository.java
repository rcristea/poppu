package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.BookingModel;

public interface BookingRepository extends JpaRepository<BookingModel, Long> {

}
