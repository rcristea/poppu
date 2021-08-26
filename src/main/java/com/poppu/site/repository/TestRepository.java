package com.poppu.site.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.poppu.site.model.TestModel;

import java.util.List;

public interface TestRepository extends JpaRepository<TestModel, Long> {
    List<TestModel> findById(long id);
    List<TestModel> findByNameContaining(String name);
}
