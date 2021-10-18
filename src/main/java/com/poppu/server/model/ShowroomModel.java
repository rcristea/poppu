package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "showroom")
public class ShowroomModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "showroom_id")
    private int showroomId;

    @Column(name = "name", nullable = false, length = 45)
    private String name;

    public ShowroomModel() {

    }

    public ShowroomModel(String name) {
        this.name = name;
    }

    public int getShowroomId() {
        return showroomId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}