package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.ShowroomModel;

public interface ShowroomRepository extends JpaRepository<ShowroomModel, Long> {

}
