package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class SeatAvailabilityKey implements Serializable {

    @Column(name = "show_id")
    private int showId;

    @Column(name = "seat_id")
    private int seatId;

    public SeatAvailabilityKey() {

    }

    public SeatAvailabilityKey(int showId, int seatId) {
        this.showId = showId;
        this.seatId = seatId;
    }

    public int getShowId() {
        return showId;
    }

    public int getSeatId() {
        return seatId;
    }

    public void setShowId(int showId) {
        this.showId = showId;
    }

    public void setSeatId(int seatId) {
        this.seatId = seatId;
    }
}
