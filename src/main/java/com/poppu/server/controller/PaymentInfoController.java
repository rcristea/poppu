package com.poppu.server.controller;

import com.poppu.server.model.PaymentInfoModel;
import com.poppu.server.model.UserModel;
import com.poppu.server.model.ValidatorModel;
import com.poppu.server.repository.PaymentInfoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/paymentinfo")
public class PaymentInfoController {
    private final Logger log = LoggerFactory.getLogger(PaymentInfoController.class);
    private PaymentInfoRepository paymentInfoRepository;

    public PaymentInfoController(PaymentInfoRepository paymentInfoRepository) {
        this.paymentInfoRepository = paymentInfoRepository;
    }

    @GetMapping("/")
    public List<PaymentInfoModel> getPaymentInfo() {
        return this.paymentInfoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentInfoModel> getPaymentInfo(@PathVariable("id") long id) {
        Optional<PaymentInfoModel> getPaymentInfoTest =  this.paymentInfoRepository.findById(id);
        return getPaymentInfoTest.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/user/{id}")
    public List<PaymentInfoModel> getByUserId(@PathVariable("id") long userId) {
        return this.paymentInfoRepository
                .findAll()
                .stream()
                .filter(paymentInfoModel ->
                paymentInfoModel.getUser().getId() == userId
                )
                .collect(Collectors.toList());
    }

    @PostMapping("/")
    public ResponseEntity<PaymentInfoModel> createPayment(@RequestBody PaymentInfoModel paymentInfoModel) throws URISyntaxException {
        PaymentInfoModel res = this.paymentInfoRepository.save(paymentInfoModel);
        return ResponseEntity
                .created(new URI("/api/paymentinfo/" + res.getCardNum()))
                .body(res);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        this.paymentInfoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
