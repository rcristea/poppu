package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.PromotionModel;

public interface PromotionRepository extends JpaRepository<PromotionModel, Long> {

}