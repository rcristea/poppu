package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "address")
public class AddressModel{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "address_id")
    private int addressId;

    @Column (name = "street", nullable = false)
    private String street;

    @Column (name = "city", nullable = false)
    private String city;

    @Column (name = "zip_code", nullable = false)
    private String zipCode;

    @OneToOne (cascade = CascadeType.All)
    @JoinColumn (name = "user_id", referencedColumnName = "user_user_id")
    private int userId;

    public AddressModel(){

    }

    public AddressModel(int addressId, String street, String city, String zipCode, int userId){
        this.addressId = addressId;
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.userId = userId;
    }

    public int getAddressId() {
        return addressId;
    }

    public String getStreet() {
        return street;
    }

    public String getCity() {
        return city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public int getUserId() {
        return userId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}