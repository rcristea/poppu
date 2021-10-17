package com.poppu.server.model;

import javax.persistence.*;

import com.poppu.server.util.Role;
import com.poppu.server.util.Status;

@Entity
@Table(name="user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "user_id")
    private long userId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "role", columnDefinition = "varchar(6)")
    private Role role; // change to string

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "phone_num", nullable = false)
    private String phoneNum;

    @Column(name = "is_subscribed", columnDefinition = "boolean default false")
    private boolean isSubscribed;

    @Column(name = "status", columnDefinition = "varchar(16) default 'ACTIVE'")
    private Status status = Status.ACTIVE; // change to string

    public UserModel() {

    }

    public UserModel(String firstName, String lastName, Role role, String email, String password, String phoneNum, boolean isSubscribed, Status status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.email = email;
        this.password = password;
        this.phoneNum = phoneNum;
        this.isSubscribed = isSubscribed;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public boolean getIsSubscribed() {
        return this.isSubscribed;
    }

    public void setIsSubscribed(boolean isSubscribed) {
        this.isSubscribed = isSubscribed;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}

