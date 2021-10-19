package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.PaymentInfoModel;

public interface PaymentInfoRepository extends JpaRepository<PaymentInfoModel, Long> {

}