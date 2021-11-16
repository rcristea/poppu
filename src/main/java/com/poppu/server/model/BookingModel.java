package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="bookings")
public class BookingModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "booking_generator")
    @SequenceGenerator(name="booking_generator")
    @Column (name = "booking_num", nullable = false)
    private long bookingNum;

    @Column (name = "movie_title", nullable = false)
    private String movieTitle;

    @Column (name = "show_date_time", nullable = false)
    private Timestamp showDateTime;

    @Column(name = "card_num", nullable = false, length = 128)
    private String cardNum;

    @ManyToOne(optional = false)
    @JoinColumn (name = "user_id", foreignKey = @ForeignKey(name = "FK_booking_user"))
    private UserModel user;

    @ManyToOne
    @JoinColumn (name = "promotion_id", foreignKey = @ForeignKey(name = "FK_booking_promotion"))
    private PromotionModel promotion;

    @OneToMany(mappedBy = "booking")
    private List<TicketModel> tickets = new ArrayList<TicketModel>();

    public BookingModel() {

    }

    public BookingModel(
            String movieTitle,
            Timestamp showDateTime,
            String cardNum,
            UserModel user,
            PromotionModel promotion
    )
    {
        this.movieTitle = movieTitle;
        this.showDateTime = showDateTime;
        this.cardNum = cardNum;
        this.user = user;
        this.promotion = promotion;
    }

    public long getBookingNum() {
        return bookingNum;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public Timestamp getShowDateTime() {
        return showDateTime;
    }

    public String getCardNum() {
        return cardNum;
    }

    public UserModel getUser() {
        return user;
    }

    public PromotionModel getPromotion() {
        return promotion;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public void setShowDateTime(Timestamp showDateTime) {
        this.showDateTime = showDateTime;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public void setPromotion(PromotionModel promotion) {
        this.promotion = promotion;
    }

    // public void addTicket(TicketModel t) { }
    // public List<TicketModel> getTickets() { }
    // public boolean removeTicket(TicketModel t) { }
}