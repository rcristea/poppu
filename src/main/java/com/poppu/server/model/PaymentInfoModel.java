package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name="PaymentInfoModel")
public class PaymentInfoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "card_num")
    private int cardNum;

    @Column (name = "card_type", nullable = false, length = 45)
    private String cardType;

    @Column (name = "exp_date", nullable = false, length = 10)
    private String expDate;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn (name = "address_id")
    private AddressModel address;

    @ManyToOne(optional = false)
    @JoinColumn (name = "user_id")
    private UserModel user;

    public PaymentInfoModel() {

    }

    public PaymentInfoModel(int cardNum, String cardType, String expDate, AddressModel address, UserModel user){
        this.cardNum = cardNum;
        this.cardType = cardType;
        this.expDate = expDate;
        this.address = address;
        this.user = user;
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

    public AddressModel getAddress() {
        return address;
    }

    public UserModel getUser() {
        return user;
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

    public void setAddress(AddressModel address) {
        this.address = address;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }
}