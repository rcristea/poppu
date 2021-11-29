package com.poppu.server.model;

import com.poppu.server.key.SeatAvailabilityKey;

import javax.persistence.*;

@Entity
@Table(name = "seat_availabilities")
public class SeatAvailabilityModel {

    @EmbeddedId
    private SeatAvailabilityKey id;

    @ManyToOne(optional = false)
    @MapsId("showId")
    @JoinColumn(name = "show_id", foreignKey = @ForeignKey(name = "FK_seat_availability_show"))
    private ShowModel show;

    @ManyToOne(optional = false)
    @MapsId("showroomId")
    @JoinColumn(name = "showroom_id", foreignKey = @ForeignKey(name = "FK_seat_availability_showroom"))
    private ShowroomModel showroom;

    @ManyToOne(optional = false)
    @MapsId("seatId")
    @JoinColumn(name = "seat_id", foreignKey = @ForeignKey(name = "FK_seat_availability_seat"))
    private SeatModel seat;

    @Column(name = "is_available", nullable = false, columnDefinition = "tinyint(1)")
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