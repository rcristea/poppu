package com.poppu.server.model;

import com.poppu.server.util.TicketType;

import javax.persistence.*;

@Entity
@Table(name = "ticket")
public class TicketModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "ticket_id")
    private int ticketId;

    @Enumerated(EnumType.STRING)
    private TicketType type;

    @Column(name = "price", nullable = false)
    private double price;

    // **** IMPORTANT: Implement MANY-TO-ONE ASSOCIATION WITH SHOW, SHOWROOM

    @Column(name = "seat", length = 5, nullable = false)
    private String seat;

    // **** IMPORTANT: IMPLEMENT MANY-TO-ONE ASSOCIATION WITH BOOKING

    public TicketModel() {

    }

    public TicketModel(TicketType type, double price, /*ShowModel show, ShowroomModel showroom,*/
                       String seat/*, BookingModel booking*/) {
        this.type = type;
        this.price = price;
        /*
        this.show = show;
        this.showroom = showroom;
         */
        this.seat = seat;
        // this.booking = booking;
    }

    public int getTicketId() {
        return ticketId;
    }

    public TicketType getType() {
        return type;
    }

    public double getPrice() {
        return price;
    }

    public String getSeat() {
        return seat;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    public void setType(TicketType type) {
        this.type = type;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }
}
