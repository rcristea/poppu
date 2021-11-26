package com.poppu.server.key;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
public class SeatAvailabilityKey implements Serializable {

    @Column(name = "show_id")
    private Long showId;

    @Column(name = "showroom_id")
    private Long showroomId;

    @Column(name = "seat_id")
    private Long seatId;

    public SeatAvailabilityKey() {

    }

    public SeatAvailabilityKey(long showId, long showroomId, long seatId) {
        this.showId = showId;
        this.showroomId = showroomId;
        this.seatId = seatId;
    }

    public Long getShowId() {
        return showId;
    }

    public void setShowId(Long showId) {
        this.showId = showId;
    }

    public Long getShowroomId() {
        return showroomId;
    }

    public void setShowroomId(Long showroomId) {
        this.showroomId = showroomId;
    }

    public Long getSeatId() {
        return seatId;
    }

    public void setSeatId(Long seatId) {
        this.seatId = seatId;
    }
}
