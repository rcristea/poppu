package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="booking")
public class BookingModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "booking_num", nullable = false)
    private int bookingNum;

    @Column (name = "movie_title", nullable = false)
    private String movieTitle;

    @Column (name = "show_date_time", nullable = false)
    private Timestamp showDateTime;

    @Column(name = "card_num", nullable = false)
    private int cardNum;

    // **** IMPORTANT: WORK ON MANY-TO-ONE ASSOCIATION WITH USER ****
    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn (name = "user_id", referencedColumnName = "user_user_id")
    private UserModel user;

    // **** IMPORTANT: CHECK MANY-TO-ONE ASSOCIATION WITH PROMOTION
    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn (name = "promotion_id", referencedColumnName = "promotion_promotion_id")
    private PromotionModel promotion;

    public BookingModel() {

    }

    public BookingModel(
            String movieTitle,
            Timestamp showDateTime,
            int cardNum,
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

    public int getBookingNum() {
        return bookingNum;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public Timestamp getShowDateTime() {
        return showDateTime;
    }

    public int getCardNum() {
        return cardNum;
    }

    public UserModel getUser() {
        return user;
    }

    public PromotionModel getPromotion() {
        return promotion;
    }

    public void setBookingNum(int bookingNum) {
        this.bookingNum = bookingNum;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public void setShowDateTime(Timestamp showDateTime) {
        this.showDateTime = showDateTime;
    }

    public void setCardNum(int cardNum) {
        this.cardNum = cardNum;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public void setPromotion(PromotionModel promotion) {
        this.promotion = promotion;
    }
}