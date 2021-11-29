package com.poppu.server.model;

import com.poppu.server.util.TicketType;

import javax.persistence.*;

@Entity
@Table(name = "tickets")
public class TicketModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ticket_generator")
    @SequenceGenerator(name="ticket_generator")
    @Column(name = "ticket_id")
    private long ticketId;

    @Column(name = "type", nullable = false, length = 50)
    private String type;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToOne(optional = false)
    @JoinColumn(name = "show_id", foreignKey = @ForeignKey(name = "FK_ticket_show"))
    private ShowModel show;

    @ManyToOne(optional = false)
    @JoinColumn(name = "showroom_id", foreignKey = @ForeignKey(name = "FK_ticket_showroom"))
    private ShowroomModel showroom;

    @Column(name = "seat", length = 5, nullable = false)
    private String seat;

    @ManyToOne(optional = false)
    @JoinColumn(name = "booking_num", foreignKey = @ForeignKey(name = "FK_ticket_booking"))
    private BookingModel booking;

    public TicketModel() {

    }

    public TicketModel(String type, double price, ShowModel show, ShowroomModel showroom,
                       String seat, BookingModel booking) {
        this.type = type;
        this.price = price;
        this.show = show;
        this.showroom = showroom;
        this.seat = seat;
        this.booking = booking;
    }

    public long getTicketId() {
        return ticketId;
    }

    public String getType() {
        return type;
    }

    public double getPrice() {
        return price;
    }

    public ShowModel getShow() {
        return show;
    }

    public ShowroomModel getShowroom() {
        return showroom;
    }

    public String getSeat() {
        return seat;
    }

    public BookingModel getBooking() {
        return booking;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setShow(ShowModel show) {
        this.show = show;
    }

    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public void setBooking(BookingModel booking) {
        this.booking = booking;
    }
}
