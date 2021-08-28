package com.poppu.server.controller;

import com.poppu.server.model.TestModel;
import com.poppu.server.repository.TestRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

    /**
     * Constructor for the TestController
     *
     * The controller is used to run code when a link and a method is sent. For example, if a get
     * method is sent to /tests, getTests() is run. Controllers will handle the CRUD and I think
     * the queries too. But that could also be the repository so I am not too sure.
     *
     * @param testRepository the Repository I am not sure about.
     */
    public TestController(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    /**
     * GetMapping for /tests will return all tests in the database.
     *
     * @return a List<TestModel> of all TestModels
     */
    @GetMapping("/tests")
    public List<TestModel> getTests() {
        return this.testRepository.findAll();
    }

    /**
     * GetMapping for /tests/{id} would return the view of the single TestModel.
     * Currently not implemented.
     *
     * @param id the id of the TestModel to get
     * @return ResponseEntity<TestModel> is the response that the request gives after looking for
     *      the TestModel in the DB
     */
    @GetMapping("/tests/{id}")
    public ResponseEntity<TestModel> getTestById(@PathVariable(required = false) long id) {
        Optional<TestModel> test = this.testRepository.findById(id);
        return test.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * PostMapping to /tests creates a new TestModel in the database
     *
     * @param testModel the TestModel that will be put into the database.
     * @return ResponseEntity of the response sent back by the request
     * @throws URISyntaxException if the URI is invalid
     */
    @PostMapping("/tests")
    public ResponseEntity<TestModel> createTest(@RequestBody TestModel testModel) throws URISyntaxException {
        TestModel res = this.testRepository.save(testModel);
        return ResponseEntity.created(new URI("/api/tests/" + res.getId())).body(res);
    }

    /**
     * PutMapping to /tests/{id} will update the TestModel with the given id
     *
     * @param testModel the TestModel data that will update the data in the database
     * @param id id of the TestModel in the database that will get updated
     * @return ResponseEntity of the request
     */
    @PutMapping("/tests/{id}")
    public ResponseEntity<TestModel> updateTest(@RequestBody TestModel testModel, @PathVariable String id) {
        testModel.setId(Long.parseLong(id));
        TestModel res = this.testRepository.save(testModel);
        return ResponseEntity.ok().body(res);
    }

    /**
     * Deletes the TestModel with the corresponding id in the database
     *
     * @param id the id of the TestModel to be deleted
     * @return ResponseEntity of the request
     */
    @DeleteMapping("/tests/{id}")
    public ResponseEntity<HttpStatus> deleteTest(@PathVariable("id") long id) {
        this.testRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    /**
     * Not implemented
     *
     * Deletes all the TestModels in the database.
     *
     * @return Response of the request
     */
    @DeleteMapping("/tests")
    public ResponseEntity<HttpStatus> deleteTests() {
        this.testRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}