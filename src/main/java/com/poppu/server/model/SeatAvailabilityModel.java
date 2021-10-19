package com.poppu.server.model;

import com.poppu.server.key.SeatAvailabilityKey;

import javax.persistence.*;

@Entity
@Table(name = "seat_availability")
public class SeatAvailabilityModel {

    @EmbeddedId
    private SeatAvailabilityKey id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @MapsId("showId")
    @JoinColumn(name = "show_id")
    private ShowModel show;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @MapsId("showroomId")
    @JoinColumn(name = "showroom_id")
    private ShowroomModel showroom;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @MapsId("seatId")
    @JoinColumn(name = "seat_id")
    private SeatModel seat;

    @Column(name = "is_available", nullable = false)
    private boolean isAvailable = true;

    public SeatAvailabilityModel() {

    }

    public SeatAvailabilityModel(ShowModel show, ShowroomModel showroom, SeatModel seat, boolean isAvailable) {
        this.show = show;
        this.showroom = showroom;
        this.seat = seat;
        this.isAvailable = isAvailable;
    }

    public SeatAvailabilityKey getId() {
        return id;
    }

    public ShowModel getShow() {
        return show;
    }

    public ShowroomModel getShowroom() {
        return showroom;
    }

    public SeatModel getSeat() {
        return seat;
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

    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }

    public void setSeat(SeatModel seat) {
        this.seat = seat;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}