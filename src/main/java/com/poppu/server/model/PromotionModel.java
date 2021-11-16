package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="promotions")
public class PromotionModel {

    @Id
    @Column(name = "promotion_id")
    private long promotionId;

    @Column(name = "offer", nullable = false)
    private String offer;

    @Column(name = "start_time")
    private Timestamp startTime;

    @Column(name = "end_time")
    private Timestamp endTime;

    @Column(name = "is_sent", columnDefinition = "tinyint(1) default 0")
    private boolean isSent = false;

    public PromotionModel() {

    }

    public PromotionModel(String offer) {
        this.offer = offer;
    }

    public long getPromotionId() {
        return promotionId;
    }

    public void setPromotionId(long promotionId) {
        this.promotionId = promotionId;
    }

    public String getOffer() {
        return offer;
    }

    public void setOffer(String offer) {
        this.offer = offer;
    }

    public Timestamp getStartTime() {
        return this.startTime;
    }

    public void setStartTime(Timestamp time) {
        this.startTime = time;
    }

    public Timestamp getEndTime() {
        return this.endTime;
    }

    public void setEndTime(Timestamp time) {
        this.endTime = time;
    }

    public boolean getIsSent() {
        return this.isSent;
    }

    public void setIsSent(boolean isSent) {
        this.isSent = isSent;
    }
}