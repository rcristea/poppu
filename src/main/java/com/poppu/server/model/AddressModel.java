package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "address")
public class AddressModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "address_id", nullable = false)
    private long addressId;

    @Column (name = "street", nullable = false)
    private String street;

    @Column (name = "city", nullable = false)
    private String city;

    @Column (name = "zip_code", nullable = false, length = 12)
    private String zipCode;

    public AddressModel() {

    }

    public AddressModel(String street, String city, String zipCode){
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }

    public long getAddressId() {
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
}