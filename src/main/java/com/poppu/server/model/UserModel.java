package com.poppu.server.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.poppu.server.util.Role;
import com.poppu.server.util.Status;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "role", nullable = false, columnDefinition = "varchar(25) default 'Default'")
    private Role role = Role.DEFAULT;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false, length = 128)
    private String password;

    @Column(name = "phone_num", nullable = false, length = 24)
    private String phoneNum;

    @Column(name = "is_subscribed", columnDefinition = "tinyint(1) default 0")
    private boolean isSubscribed = false;

    @Column(name = "status", nullable = false, columnDefinition = "varchar(10) default 'Inactive'")
    private Status status = Status.INACTIVE;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", unique = true, foreignKey = @ForeignKey(name = "FK_user_address"))
    private AddressModel address;

    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<PaymentInfoModel> paymentCards = new ArrayList<PaymentInfoModel>();


    public UserModel() {

    }

    public UserModel(String firstName, String lastName, Role role, String email,
                     String password, String phoneNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNum = phoneNum;
    }

    public UserModel(String firstName, String lastName, Role role, String email,
                     String password, String phoneNum, boolean isSubscribed,
                     Status status, AddressModel address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
        this.password = password;
        this.phoneNum = phoneNum;
        this.isSubscribed = isSubscribed;
        this.status = status;
        this.address = address;
    }

    public long getId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Role getRole() {
        return role;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public boolean getIsSubscribed() {
        return this.isSubscribed;
    }

    public Status getStatus() {
        return status;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    // NOTE: USERS CANNOT CHANGE THEIR EMAIL
    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public void setIsSubscribed(boolean isSubscribed) {
        this.isSubscribed = isSubscribed;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public AddressModel getAddress() {
        return address;
    }

    public void setAddress(AddressModel address) {
        this.address = address;
    }

    public List<PaymentInfoModel> getPaymentCards() {
        return paymentCards;
    }

    public void setPaymentCards(List<PaymentInfoModel> paymentCards) {
        this.paymentCards = paymentCards;
    }

    @Override
    public String toString() {
        return "UserModel{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", role=" + role +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phoneNum='" + phoneNum + '\'' +
                ", isSubscribed=" + isSubscribed +
                ", status=" + status +
                ", address=" + address +
                ", paymentCards=" + paymentCards +
                '}';
    }
}

