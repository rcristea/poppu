package com.poppu.server.controller;

import com.poppu.server.model.ValidatorModel;
import com.poppu.server.repository.ValidatorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/validator")
public class ValidatorController {
    private final Logger log = LoggerFactory.getLogger(ValidatorController.class);
    private ValidatorRepository validatorRepository;

    public ValidatorController(ValidatorRepository validatorRepository) {
        this.validatorRepository = validatorRepository;
    }

    @PostMapping("/sendEmail")
    public ResponseEntity<String> postValidator(@RequestParam("email") String email) throws URISyntaxException {
        Optional<ValidatorModel> getValidatorTest = this.validatorRepository.findById(email);
        return getValidatorTest.map(validatorModel -> {
            return ResponseEntity.ok().body(validatorModel.sendEmail());
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/validate")
    public ResponseEntity<ValidatorModel> validate(@RequestParam("email") String email, @RequestParam("code") int code) throws URISyntaxException {
        ValidatorModel updatedValidator = this.validatorRepository.findById(email)
                .map(validator -> {
                    validator.setValidated((code == validator.getCode()));
                    return this.validatorRepository.save(validator);
                })
                .orElseThrow(() -> new RuntimeException("Code not validated"));
        return ResponseEntity
                .created(new URI("/api/users/" + updatedValidator.getEmail()))
                .body(updatedValidator);
    }
}
