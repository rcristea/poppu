package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.TicketModel;

public interface TicketRepository extends JpaRepository<TicketModel, Long> {

}