package com.poppu.server.controller;

import com.poppu.server.model.PromotionModel;
import com.poppu.server.repository.PromotionRepository;
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
@RequestMapping("/api/promotion")
public class PromotionController {
    private final Logger log = LoggerFactory.getLogger(PromotionController.class);
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
                    return this.promotionRepository.save(promotion);
                }).orElseGet(() -> this.promotionRepository.save(promotionModel));
        return ResponseEntity
                .created(new URI("/api/promotion/" + updatedPromotion.getPromotionId()))
                .body(updatedPromotion);
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
