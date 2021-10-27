package com.poppu.server.model;

import javax.persistence.*;

import com.poppu.server.util.Role;
import com.poppu.server.util.Status;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", length = 12)
    private Role role;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false, length = 128)
    private String password;

    @Column(name = "phone_num", nullable = false, length = 16)
    private String phoneNum;

    @Column(name = "is_subscribed", columnDefinition = "tinyint(1) default 0")
    private boolean isSubscribed = false;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", columnDefinition = "varchar(10) default 'ACTIVE'")
    private Status status = Status.ACTIVE;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", unique = true)
    private AddressModel address;

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

    // public boolean addAddress(AddressModel a) { return false; }
    // public boolean deleteAddress(AddressModel a) { return false; }
    // public boolean addPayment(PaymentModel p) { return false; }
    // public boolean deletePayment(PaymentModel p) { return false; }
    // public List<PaymentModel> getPayments() { return null; }

    // NOTE: FUNCTION COULD EITHER BE CREATEBOOKING OR ADDBOOKING
    // public boolean createBooking() { return false; }

    // public List<BookingModel> getBookings() { return null; }

    // **** Admin-only operations
    // private boolean isAdmin() { return false; }
    // public boolean setStatus(UserModel u, StatusType s) { return false; }
}

