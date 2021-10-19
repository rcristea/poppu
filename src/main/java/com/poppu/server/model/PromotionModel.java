package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name="promotion")
public class PromotionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "promotion_id")
    private int promotionId;

    @Column (name = "offer")
    private int offer;

    public PromotionModel() {

    }

    public PromotionModel(int offer) {
        this.offer = offer;
    }

    public int getPromotionId() {
        return promotionId;
    }

    public int getOffer() {
        return offer;
    }

    public void setOffer(int offer) {
        this.offer = offer;
    }
}