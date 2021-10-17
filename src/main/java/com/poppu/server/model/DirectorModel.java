package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "director")
public class DirectorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "director_id")
    private int directorId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    public DirectorModel() {

    }

    public DirectorModel(int directorId, String fistName, String lastName) {
        this.directorId = directorId;
        this.firstName = fistName;
        this.lastName = lastName;
    }

    public int getDirectorId() {
        return directorId;
    }

    public void setDirectorId(int directorId) {
        this.directorId = directorId;
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
}
