package com.poppu.server.model;

import javax.persistence.*;
import java.util.Date;
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

    public String sendEmail() {
        final String SSL_FACTORY = "javax.net.ssl.SSLSocketFactory";
        // Get a Properties object
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
                    InternetAddress.parse(this.email,false));
            msg.setSubject("Hello");
            msg.setText("Your Code: ".concat(Integer.toString(this.code)));
            msg.setSentDate(new Date());
            Transport.send(msg);
        }catch (MessagingException e){
            return e.toString();
        }
        return "SUCCESS";
    }
}
