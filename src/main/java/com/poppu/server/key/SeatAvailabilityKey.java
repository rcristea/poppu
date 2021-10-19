package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class SeatAvailabilityKey implements Serializable {

    @Column(name = "show_id")
    private int showId;

    @Column(name = "seat_id")
    private int seatId;

    @Column(name = "showroom_id")
    private int showroomId;

    public SeatAvailabilityKey() {

    }

    public SeatAvailabilityKey(int showId, int seatId, int showroomId) {
        this.showId = showId;
        this.seatId = seatId;
        this.showroomId = showroomId;
    }

    public int getShowId() {
        return showId;
    }

    public int getSeatId() {
        return seatId;
    }

    public int getShowroomId() {
        return showroomId;
    }

    public void setShowId(int showId) {
        this.showId = showId;
    }

    public void setSeatId(int seatId) {
        this.seatId = seatId;
    }

    public void setShowroomId(int showroomId) {
        this.showroomId = showroomId;
    }
}
