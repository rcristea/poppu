package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name="tests")
public class TestModel {

    // @Id and all those are JPA syntax. JPA is what connects Java and MySQL
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    public TestModel() {
        this.name = "";
        this.description = "";
    }

    public TestModel(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
