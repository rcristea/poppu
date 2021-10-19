package com.poppu.server.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "showroom")
public class ShowroomModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "showroom_id")
    private int showroomId;

    @Column(name = "name", nullable = false, length = 45)
    private String name;

    @OneToMany(mappedBy = "showroom")
    private List<SeatModel> seats = new ArrayList<SeatModel>();

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

    // public List<SeatModel> getSeats() { return this.seats; }
    // public boolean addSeat(SeatModel s) { return false; }
    // public boolean deleteSeat(SeatModel s) { return false; }
}