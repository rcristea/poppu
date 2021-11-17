package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "actors")
public class ActorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "actor_id")
    private long actorId;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    public ActorModel() {

    }

    public ActorModel(long actorId, String fistName, String lastName) {
        this.actorId = actorId;
        this.firstName = fistName;
        this.lastName = lastName;
    }

    public long getActorId() {
        return actorId;
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
