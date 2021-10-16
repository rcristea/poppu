package com.poppu.server.model;

        import javax.persistence.*;
        import java.sql.Timestamp;
@Entity
@Table(name="booking")
public class BookingModel{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column (name = "booking_num", nullable = false)
    private int bookingNum;

    @Column (name = "movie_title", nullable = false)
    private String movieTitle;

    @Column (name = "show_date_time", nullable = false)
    private Timestamp showDateTime;

    @OneToOne (cascade = CascadeType.All)
    @JoinColumn (name = "card_num", referencedColumnName = "payment_info_card_num")
    private int cardNum;

    @OneToOne (cascade = CascadeType.All)
    @JoinColumn (name = "user_id", referencedColumnName = "user_user_id")
    private int userId;

    @OneToOne (cascade = CascadeType.All)
    @JoinColumn (name = "promotion_id", referencedColumnName = "promotion_promotion_id")
    private int promotionId;

    public BookingModel(){

    }

    public BookingModel(
            int bookingNum,
            String movieTitle,
            Timestamp showDateTime,
            int cardNum,
            int userId,
            int promotionId
    )
    {
        this.bookingNum = bookingNum;
        this.movieTitle = movieTitle;
        this.showDateTime = showDateTime;
        this.cardNum = cardNum;
        this.userId = userId;
        this.promotionId = promotionId;
    }

    public int getBookingNum() {
        return bookingNum;
    }

    public String getMovieTitle(){
        return movieTitle;
    }

    public Timestamp getShowDateTime(){
        return showDateTime;
    }

    public int getCardNum() {
        return cardNum;
    }

    public int getUserId() {
        return userId;
    }

    public int getPromotionId() {
        return promotionId;
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

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setPromotionId(int promotionId) {
        this.promotionId = promotionId;
    }
}