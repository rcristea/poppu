package com.poppu.server.controller;

import com.poppu.server.model.ValidatorModel;
import com.poppu.server.repository.ValidatorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.Optional;
import java.util.Properties;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/validator")
public class ValidatorController {
    private final Logger log = LoggerFactory.getLogger(ValidatorController.class);

    @Autowired
    private ValidatorRepository validatorRepository;

    public ValidatorController(ValidatorRepository validatorRepository) {
        this.validatorRepository = validatorRepository;
    }

    @PostMapping("/")
    public ResponseEntity<ValidatorModel> createValidator(@RequestParam("email") String email) throws URISyntaxException {
        ValidatorModel newValidator = new ValidatorModel(email);
        ValidatorModel res = this.validatorRepository.save(newValidator);
        return ResponseEntity
                .created(new URI("/validators/" + newValidator.getEmail()))
                .body(res);
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

    @PostMapping("/customEmail")
    public ResponseEntity<String> sendCustom(@RequestParam("email") String email, @RequestParam("subject") String subject, @RequestParam("contents") String body) {
        return ResponseEntity.ok().body(sendCustomEmail(email, subject, body));
    }

    public static String sendCustomEmail(String toEmail, String subject, String body) {
        final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
        Properties props = System.getProperties();
        props.setProperty("mail.smtp.host", "smtp.gmail.com");
        props.setProperty("mail.smtp.socketFactory.class", SSL_FACTORY);
        props.setProperty("mail.smtp.socketFactory.fallback", "false");
        props.setProperty("mail.smtp.port", "465");
        props.setProperty("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.auth", "true");
        props.put("mail.debug", "false");
        props.put("mail.store.protocol", "pop3");
        props.put("mail.transport.protocol", "smtp");
        final String username = "poppuofficial@gmail.com";//
        final String password = "poppu4Life";
        try{
            Session session = Session.getDefaultInstance(props,
                    new javax.mail.Authenticator(){
                        protected PasswordAuthentication getPasswordAuthentication() {
                            return new PasswordAuthentication(username, password);
                        }});

            // -- Create a new message --
            Message msg = new MimeMessage(session);

            // -- Set the FROM and TO fields --
            msg.setFrom(new InternetAddress(username));
            msg.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(toEmail,false));
            msg.setSubject(subject);
            msg.setText(body);
            msg.setSentDate(new Date());
            Transport.send(msg);
        }catch (MessagingException e){
            return e.toString();
        }
        return "SUCCESS";
    }
}
