package com.poppu.server.controller;

import com.poppu.server.model.TestModel;
import com.poppu.server.model.UserModel;
import com.poppu.server.repository.UserRepository;
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
@RequestMapping("/api/users")
public class UserController {
    private final Logger log = LoggerFactory.getLogger(UserController.class);
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<UserModel> getTests() {
        return this.userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserModel> getTestById(@PathVariable(required = false) long id) {
        Optional<UserModel> test = this.userRepository.findById(id);
        return test.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/users")
    public ResponseEntity<UserModel> createTest(@RequestBody UserModel user) throws URISyntaxException {
        UserModel res = this.userRepository.save(user);
        return ResponseEntity.created(new URI("/api/users/" + res.getId())).body(res);
    }

    @DeleteMapping("/tests/{id}")
    public ResponseEntity<HttpStatus> deleteTest(@PathVariable("id") long id) {
        this.userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
