package com.poppu.server.repository;

import com.poppu.server.model.ValidatorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "validators", path = "validators")
public interface ValidatorRepository extends JpaRepository<ValidatorModel, String> {

}
