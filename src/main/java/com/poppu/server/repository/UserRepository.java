package com.poppu.server.repository;

import com.poppu.server.model.AddressModel;
import com.poppu.server.model.UserModel;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "users", path = "users", excerptProjection = InlineUserProfile.class)
public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findDistinctByEmail(@Param("email") String email);
    List<UserModel> findAllByIsSubscribed(@Param("isSubscribed") boolean isSubscribed);
}
