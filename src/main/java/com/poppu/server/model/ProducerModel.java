package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "producers")
public class ProducerModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producer_generator")
    @SequenceGenerator(name="producer_generator")
    @Column(name = "producer_id")
    private long producerId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    public ProducerModel() {

    }

    public ProducerModel(String fistName, String lastName) {
        this.firstName = fistName;
        this.lastName = lastName;
    }

    public long getProducerId() {
        return producerId;
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