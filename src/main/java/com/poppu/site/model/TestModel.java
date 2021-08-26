package com.poppu.site.model;

import javax.persistence.*;

@Entity
@Table(name="tests")
public class TestModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    public TestModel() {

    }
}
