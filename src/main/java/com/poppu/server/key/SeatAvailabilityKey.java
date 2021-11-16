package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class SeatAvailabilityKey implements Serializable {

    @Column(name = "show_id")
    private long showId;

    @Column(name = "showroom_id")
    private long showroomId;

    @Column(name = "seat_id")
    private long seatId;

    public SeatAvailabilityKey() {

    }

    public SeatAvailabilityKey(long showId, long showroomId, long seatId) {
        this.showId = showId;
        this.showroomId = showroomId;
        this.seatId = seatId;
    }

    public long getShowId() {
        return showId;
    }

    public long getShowroomId() {
        return showroomId;
    }

    public long getSeatId() {
        return seatId;
    }

    public void setShowId(long showId) {
        this.showId = showId;
    }

    public void setShowroomId(long showroomId) {
        this.showroomId = showroomId;
    }

    public void setSeatId(long seatId) {
        this.seatId = seatId;
    }
}
