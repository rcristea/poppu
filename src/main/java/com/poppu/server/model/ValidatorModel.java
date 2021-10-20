package com.poppu.server.model;

import javax.persistence.*;
import java.util.Properties;
import java.util.Random;

import javax.mail.*;
import javax.mail.internet.*;

@Entity
@Table(name = "validator")
public class ValidatorModel {

    @Id
    @Column (name = "email", nullable = false)
    private String email;

    @Column (name = "code", nullable = false)
    private int code;

    @Column(name = "validated", columnDefinition = "tinyint(1) default 0")
    private boolean validated;

    public ValidatorModel() {

    }

    public ValidatorModel(String email) {
        this.email = email;
        this.code = genCode(1000000);
        this.validated = false;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public boolean isValidated() {
        return validated;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }

    private int genCode(int upperBound) {
        Random rand = new Random();
        return rand.nextInt(upperBound);
    }

    public void sendEmail() {
        Properties props = new Properties();
        props.put("mail.smtp.com" , "smtp.gmail.com");
        Session session  = Session.getDefaultInstance( props , null);
        String to = this.email;
        String from = "from@gmail.com";
        String subject = "Poppu Validation Code";
        Message msg = new MimeMessage(session);
        try {
            msg.setFrom(new InternetAddress(from));
            msg.setRecipient(Message.RecipientType.TO , new InternetAddress(to));
            msg.setSubject(subject);
            msg.setText("Your validation code is: " + this.code);
        }  catch(Exception exc) {

        }
    }
}
