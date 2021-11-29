package com.poppu.server.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "showrooms")
public class ShowroomModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "showroom_generator")
    @SequenceGenerator(name="showroom_generator", initialValue = 4)
    @Column(name = "showroom_id")
    private long showroomId;

    @Column(name = "name", nullable = false, length = 2)
    private String name;

    @OneToMany(mappedBy = "showroom", cascade = CascadeType.ALL)
    private List<SeatModel> seats = new ArrayList<SeatModel>();

    public ShowroomModel() {

    }

    public ShowroomModel(String name) {
        this.name = name;
    }

    public long getShowroomId() {
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