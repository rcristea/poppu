package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="promotions")
public class PromotionModel {

    @Id
    @Column (name = "promotion_id")
    private long promotionId;

    @Column (name = "code")
    private String code;

    @Column (name = "start_date")
    private Timestamp startDate;

    @Column (name = "end_date")
    private Timestamp endDate;

    @Column (name = "amount", nullable = false)
    private float amount;

    public PromotionModel() {

    }

    public PromotionModel(long promotionId, String code, Timestamp startDate, Timestamp endDate, float amount) {
        this.promotionId = promotionId;
        this.code = code;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
    }

    public long getPromotionId() {
        return promotionId;
    }

    public String getCode() {
        return code;
    }

    public Timestamp getStartDate() {
        return startDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public float getAmount() {
        return amount;
    }

    public void setPromotionId(long promotionId) {
        this.promotionId = promotionId;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }
}