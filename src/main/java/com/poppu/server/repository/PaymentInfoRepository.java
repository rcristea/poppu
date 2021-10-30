package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.PaymentInfoModel;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "paymentinfos", path = "paymentinfos")
public interface PaymentInfoRepository extends JpaRepository<PaymentInfoModel, Long> {
    List<PaymentInfoModel> findAllByUser(@Param("userId") int userId);
}