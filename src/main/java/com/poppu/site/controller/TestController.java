package com.poppu.site.controller;

import com.poppu.site.model.TestModel;
import com.poppu.site.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class TestController {
    @Autowired
    TestRepository testRepository;

    @GetMapping("/tests")
    public ResponseEntity<List<TestModel>> getTests(@RequestParam(required = false) String test) {
        return null;
    }

    @GetMapping("/tests/{id}")
    public ResponseEntity<List<TestModel>> getTestById(@PathVariable(required = false) long id) {
        return null;
    }

    @PostMapping("/tests")
    public ResponseEntity<List<TestModel>> createTest(@RequestBody TestModel testModel) {
        return null;
    }

    @PutMapping("/tests/{id}")
    public ResponseEntity<TestModel> updateTest(@PathVariable("id") long id, @RequestBody TestModel testModel) {
        return null;
    }

    @DeleteMapping("/tests/{id}")
    public ResponseEntity<HttpStatus> deleteTest(@PathVariable("id") long id) {
        return null;
    }

    @DeleteMapping("/tests")
    public ResponseEntity<HttpStatus> deleteTests(@PathVariable("id") long id) {
        return null;
    }
}