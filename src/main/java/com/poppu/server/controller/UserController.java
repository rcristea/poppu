package com.poppu.server.controller;

import com.poppu.server.model.AddressModel;
import com.poppu.server.model.UserModel;
import com.poppu.server.repository.UserRepository;
import com.poppu.server.util.Status;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final Logger log = LoggerFactory.getLogger(UserController.class);
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/")
    public List<UserModel> getUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserModel> getUserById(@PathVariable("id") long id) {
        Optional<UserModel> getUserTest = this.userRepository.findById(id);
        return getUserTest.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/email")
    public ResponseEntity<UserModel> getUserByEmail(@RequestParam("email") String email) {
        Optional<UserModel> getUserByEmailTest = Optional.ofNullable(this.userRepository.findDistinctByEmail(email));
        return getUserByEmailTest.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserModel> putUser(@RequestBody UserModel newUserInfo, @PathVariable("id") long id) throws URISyntaxException {
        UserModel updatedUser = this.userRepository.findById(id)
                .map(user -> {
                    user.setFirstName(newUserInfo.getFirstName());
                    user.setLastName(newUserInfo.getLastName());
                    user.setPhoneNum(newUserInfo.getPhoneNum());
                    user.setPassword(newUserInfo.getPassword());
                    user.setIsSubscribed(newUserInfo.getIsSubscribed());
                    user.setRole(newUserInfo.getRole());
                    return this.userRepository.save(user);
                })
                .orElseGet(() -> this.userRepository.save(newUserInfo));
        return ResponseEntity
                .created(new URI("/api/users/" + updatedUser.getId()))
                .body(updatedUser);
    }

    @PutMapping("/{id}/setActive")
    public ResponseEntity<UserModel> putActive(@PathVariable long id) throws URISyntaxException {
        UserModel updatedUser = this.userRepository.findById(id)
                .map(user -> {
                    user.setStatus(Status.ACTIVE);
                    return this.userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("Status not updated"));
        return ResponseEntity
                .created(new URI("/api/users/" + updatedUser.getId()))
                .body(updatedUser);
    }

    @PutMapping("/{id}/password")
    public ResponseEntity<UserModel> putPassword(@PathVariable long id, @RequestParam("password") String password) throws URISyntaxException {
        UserModel updatedUser = this.userRepository.findById(id)
                .map(user -> {
                    user.setPassword(password);
                    return this.userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("Password not updated"));
        return ResponseEntity
                .created(new URI("/api/users/" + updatedUser.getId()))
                .body(updatedUser);
    }

    @PostMapping("/")
    public ResponseEntity<UserModel> createUser(@RequestBody UserModel user) throws URISyntaxException {
        UserModel res = this.userRepository.save(user);
        return ResponseEntity
                .created(new URI("/api/users/" + res.getId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        this.userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
