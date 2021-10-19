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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "showroom_id", nullable = false)
    private ShowroomModel showroom;

    public SeatModel() {

    }

    public SeatModel(String seat, ShowroomModel showroom) {
        this.seat = seat;
        this.showroom = showroom;
    }

    public int getSeatId() {
        return seatId;
    }

    public String getSeat() {
        return seat;
    }

    public ShowroomModel getShowroom() {
        return showroom;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }
}
