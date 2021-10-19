package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "seat")
public class SeatModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "seat_id")
    private int seatId;

    @Column(name = "seat", nullable = false, length = 5)
    private String seat;

    public SeatModel() {

    }

    public SeatModel(String seat) {
        this.seat = seat;
    }

    public int getSeatId() {
        return seatId;
    }

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }
}
