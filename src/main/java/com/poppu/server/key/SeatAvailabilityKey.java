package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class SeatAvailabilityKey implements Serializable {

    @Column(name = "show_id")
    private int showId;

    @Column(name = "showroom_id")
    private int showroomId;

    @Column(name = "seat_id")
    private int seatId;

    public SeatAvailabilityKey() {

    }

    public SeatAvailabilityKey(int showId, int showroomId, int seatId) {
        this.showId = showId;
        this.showroomId = showroomId;
        this.seatId = seatId;
    }

    public int getShowId() {
        return showId;
    }

    public int getShowroomId() {
        return showroomId;
    }

    public int getSeatId() {
        return seatId;
    }

    public void setShowId(int showId) {
        this.showId = showId;
    }

    public void setShowroomId(int showroomId) {
        this.showroomId = showroomId;
    }

    public void setSeatId(int seatId) {
        this.seatId = seatId;
    }
}
