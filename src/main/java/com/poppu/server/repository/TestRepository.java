package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.TestModel;

public interface TestRepository extends JpaRepository<TestModel, Long> {

}
