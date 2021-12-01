package com.poppu.server.controller;

import com.poppu.server.model.PromotionModel;
import com.poppu.server.repository.PromotionRepository;
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
import java.util.Arrays;
import java.util.Date;
import java.util.Optional;
import java.util.Properties;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/promotion")
public class PromotionController {
    private final Logger log = LoggerFactory.getLogger(PromotionController.class);

    @Autowired
    private PromotionRepository promotionRepository;

    public PromotionController(PromotionRepository promotionRepository) {
        this.promotionRepository = promotionRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PromotionModel> getPromotionById(@PathVariable("id") long id) {
        Optional<PromotionModel> getPromotion = this.promotionRepository.findById(id);
        return getPromotion.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PromotionModel> putPromotion(@RequestBody PromotionModel promotionModel, @PathVariable("id") long id) throws URISyntaxException {
        PromotionModel updatedPromotion = this.promotionRepository.findById(id)
                .map(promotion -> {
                    promotion.setPromotionId(promotionModel.getPromotionId());
                    promotion.setOffer(promotionModel.getOffer());
                    promotion.setStartTime(promotionModel.getStartTime());
                    promotion.setEndTime(promotionModel.getEndTime());
                    promotion.setIsSent(promotionModel.getIsSent());
                    return this.promotionRepository.save(promotion);
                }).orElseGet(() -> this.promotionRepository.save(promotionModel));
        return ResponseEntity
                .created(new URI("/api/promotion/" + updatedPromotion.getPromotionId()))
                .body(updatedPromotion);
    }

    @PostMapping("/send_promo_emails")
    private ResponseEntity<String> sendPromotionEmails(@RequestParam("emails") String[] emails, @RequestParam("promo_id") String promoId, @RequestParam("promo_amount") String promoAmount) {
        return ResponseEntity.ok().body(sendEmails(emails, promoId, promoAmount));
    }

    private String sendEmails(String[] emails, String promoId, String promoAmount) {
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

        try {
            Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });

            for (String email : emails) {
                Message msg = new MimeMessage(session);

                msg.setFrom(new InternetAddress(username));
                msg.setRecipients(Message.RecipientType.TO,
                        InternetAddress.parse(email, false));
                msg.setSubject("Poppu has just released a new promotion!");
                msg.setText("Dear customer, \n We have just released a new promotion! Use code "
                    + promoId + " at checkout to get $"
                    + promoAmount + " off on your next ticket. \n\n"
                    + "- The poppu team");
                msg.setSentDate(new Date());
                Transport.send(msg);
            }
        } catch (MessagingException e) {
            return e.toString();
        }

        return "SUCCESS";
    }

    @PostMapping("/")
    public ResponseEntity<PromotionModel> createPromotion(@RequestBody PromotionModel promotion) throws URISyntaxException {
        PromotionModel res = this.promotionRepository.save(promotion);
        return ResponseEntity
                .created(new URI("/api/promotion/" + res.getPromotionId()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePromotion(@PathVariable("id") long id) {
        this.promotionRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
