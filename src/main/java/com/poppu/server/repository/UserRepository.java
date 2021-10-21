package com.poppu.server.repository;

import com.poppu.server.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findDistinctByEmail(@Param("email") String email);
}
