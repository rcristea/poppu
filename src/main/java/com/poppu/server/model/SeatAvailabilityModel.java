package com.poppu.server.model;

import javax.persistence.*;

@Entity
@Table(name = "seat_availability")
public class SeatAvailabilityModel {
    // implement the foreign keys for show_id, seat_id, showroom_id

    @Column(name = "is_available", nullable = false)
    private boolean isAvailable = true;

    public SeatAvailabilityModel() {

    }

    public SeatAvailabilityModel(/*ShowModel show, SeatModel seat, ShowroomModel showroom,*/boolean isAvailable) {
        /*
        this.show = show;
        this.seat = seat;
        this.showroom = showroom;
         */
        this.isAvailable = isAvailable;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}