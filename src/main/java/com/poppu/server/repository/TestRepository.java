package com.poppu.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.server.model.TestModel;

import java.util.List;

public interface TestRepository extends JpaRepository<TestModel, Long> {
    List<TestModel> findByNameContaining(String name);
}
