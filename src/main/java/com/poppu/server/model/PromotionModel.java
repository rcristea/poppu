package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name="promotions")
public class PromotionModel {

    @Id
    @Column (name = "promotion_id")
    private long promotionId;

    @Column (name = "offer", nullable = false)
    private String offer;

    public PromotionModel() {

    }

    public PromotionModel(String offer) {
        this.offer = offer;
    }

    public long getPromotionId() {
        return promotionId;
    }

    public String getOffer() {
        return offer;
    }

    public void setOffer(String offer) {
        this.offer = offer;
    }
}