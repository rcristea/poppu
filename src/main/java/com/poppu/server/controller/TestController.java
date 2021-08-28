package com.poppu.server.controller;

import com.poppu.server.model.TestModel;
import com.poppu.server.repository.TestRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class TestController {
    private final Logger log = LoggerFactory.getLogger(TestController.class);
    private TestRepository testRepository;

    public TestController(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @GetMapping("/tests")
    public List<TestModel> getTests(@RequestParam(required = false) String test) {
        return this.testRepository.findAll();
    }

    @GetMapping("/tests/{id}")
    public ResponseEntity<TestModel> getTestById(@PathVariable(required = false) long id) {
        Optional<TestModel> test = this.testRepository.findById(id);
        return test.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/tests")
    public ResponseEntity<TestModel> createTest(@RequestBody TestModel testModel) throws URISyntaxException {
        TestModel res = this.testRepository.save(testModel);
        return ResponseEntity.created(new URI("/api/tests/" + res.getId())).body(res);
    }

    @PutMapping("/tests/{id}")
    public ResponseEntity<TestModel> updateTest(@RequestBody TestModel testModel, @PathVariable String id) {
        testModel.setId(Long.parseLong(id));
        TestModel res = this.testRepository.save(testModel);
        return ResponseEntity.ok().body(res);
    }

    @DeleteMapping("/tests/{id}")
    public ResponseEntity<HttpStatus> deleteTest(@PathVariable("id") long id) {
        this.testRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/tests")
    public ResponseEntity<HttpStatus> deleteTests(@PathVariable("id") long id) {
        this.testRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}