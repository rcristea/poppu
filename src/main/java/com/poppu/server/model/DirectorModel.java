package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "directors")
public class DirectorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "director_id")
    private long directorId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    public DirectorModel() {

    }

    public DirectorModel(String fistName, String lastName) {
        this.firstName = fistName;
        this.lastName = lastName;
    }

    public long getDirectorId() {
        return directorId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
