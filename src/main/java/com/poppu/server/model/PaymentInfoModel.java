package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name="payment_info")
public class PaymentInfoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "card_num")
    private int cardNum;

    @Column (name = "card_type", nullable = false)
    private String cardType;

    @Column (name = "exp_date", nullable = false)
    private String expDate;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn (name = "address_id", referencedColumnName = "address_address_id")
    private int addressId;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn (name = "user_id", referencedColumnName = "user_user_id")
    private int userId;

    public PaymentInfoModel() {

    }

    public PaymentInfoModel(int cardNum, String cardType, String expDate, int addressId, int userId){
        this.cardNum = cardNum;
        this.cardType = cardType;
        this.expDate = expDate;
        this.addressId = addressId;
        this.userId = userId;
    }

    public int getCardNum() {
        return cardNum;
    }

    public String getCardType() {
        return cardType;
    }

    public String getExpDate() {
        return expDate;
    }

    public int getAddressId() {
        return addressId;
    }

    public int getUserId() {
        return userId;
    }

    public void setCardNum(int cardNum) {
        this.cardNum = cardNum;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public void setExpDate(String expDate) {
        this.expDate = expDate;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}