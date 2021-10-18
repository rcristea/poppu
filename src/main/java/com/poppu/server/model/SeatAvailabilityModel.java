package com.poppu.server.model;

import com.poppu.server.key.SeatAvailabilityKey;

import javax.persistence.*;

@Entity
@Table(name = "seat_availability")
public class SeatAvailabilityModel {

    @EmbeddedId
    private SeatAvailabilityKey id;

    @ManyToOne(optional = false)
    @MapsId("showId")
    @JoinColumn(name = "show_id")
    private ShowModel show;

    @ManyToOne(optional = false)
    @MapsId("seatId")
    @JoinColumn(name = "seat_id")
    private SeatModel seat;

    @ManyToOne(optional = false)
    @MapsId("showroomId")
    @JoinColumn(name = "showroom_id")
    private ShowroomModel showroom;

    @Column(name = "is_available", nullable = false)
    private boolean isAvailable = true;

    public SeatAvailabilityModel() {

    }

    public SeatAvailabilityModel(ShowModel show, SeatModel seat, ShowroomModel showroom, boolean isAvailable) {
        this.show = show;
        this.seat = seat;
        this.showroom = showroom;
        this.isAvailable = isAvailable;
    }

    public SeatAvailabilityKey getId() {
        return id;
    }

    public ShowModel getShow() {
        return show;
    }

    public SeatModel getSeat() {
        return seat;
    }

    public ShowroomModel getShowroom() {
        return showroom;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setId(SeatAvailabilityKey id) {
        this.id = id;
    }

    public void setShow(ShowModel show) {
        this.show = show;
    }

    public void setSeat(SeatModel seat) {
        this.seat = seat;
    }

    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}