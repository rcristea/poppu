package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.AddressModel;

public interface AddressRepository extends JpaRepository<AddressModel, Long> {

}