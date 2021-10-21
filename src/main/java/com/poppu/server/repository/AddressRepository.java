package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.AddressModel;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "addresses", path = "addresses")
public interface AddressRepository extends JpaRepository<AddressModel, Long> {
}