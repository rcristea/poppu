package com.poppu.server.model;

import java.sql.Timestamp;
import java.util.List;

public class BookingRequest {
    private String movieTitle;
    private Timestamp showDateTime;
    private String cardNum;

    private long userID;
    private long promotionID;

    private String ticketType;
    private long showID;
    private long showroomID;
    private List<Long> seats;

    private long adultTickets;
    private long childTickets;
    private long seniorTickets;

    public BookingRequest(String movieTitle, Timestamp showDateTime, String cardNum, long userID, long promotionID, String ticketType, long showID, long showroomID, List<Long> seats, long adultTickets, long childTickets, long seniorTickets) {
        this.movieTitle = movieTitle;
        this.showDateTime = showDateTime;
        this.cardNum = cardNum;
        this.userID = userID;
        this.promotionID = promotionID;
        this.ticketType = ticketType;
        this.showID = showID;
        this.showroomID = showroomID;
        this.seats = seats;
        this.adultTickets = adultTickets;
        this.childTickets = childTickets;
        this.seniorTickets = seniorTickets;
    }

    public BookingRequest(String movieTitle, Timestamp showDateTime, String cardNum, long userID, long promotionID, String ticketType, long showID, long showroomID, List<Long> seats, List<String> types) {
        this.movieTitle = movieTitle;
        this.showDateTime = showDateTime;
        this.cardNum = cardNum;
        this.userID = userID;
        this.promotionID = promotionID;
        this.ticketType = ticketType;
        this.showID = showID;
        this.showroomID = showroomID;
        this.seats = seats;
    }

    public BookingRequest(String movieTitle, Timestamp showDateTime, String cardNum, long userID, long promotionID, String ticketType, long showID, long showroomID, List<Long> seats) {
        this.movieTitle = movieTitle;
        this.showDateTime = showDateTime;
        this.cardNum = cardNum;
        this.userID = userID;
        this.promotionID = promotionID;
        this.ticketType = ticketType;
        this.showID = showID;
        this.showroomID = showroomID;
        this.seats = seats;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public Timestamp getShowDateTime() {
        return showDateTime;
    }

    public void setShowDateTime(Timestamp showDateTime) {
        this.showDateTime = showDateTime;
    }

    public String getCardNum() {
        return cardNum;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public long getPromotionID() {
        return promotionID;
    }

    public void setPromotionID(long promotionID) {
        this.promotionID = promotionID;
    }

    public String getTicketType() {
        return ticketType;
    }

    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    public long getShowID() {
        return showID;
    }

    public void setShowID(long showID) {
        this.showID = showID;
    }

    public long getShowroomID() {
        return showroomID;
    }

    public void setShowroomID(long showroomID) {
        this.showroomID = showroomID;
    }

    public List<Long> getSeats() {
        return seats;
    }

    public void setSeats(List<Long> seats) {
        this.seats = seats;
    }

    public long getAdultTickets() {
        return adultTickets;
    }

    public void setAdultTickets(long adultTickets) {
        this.adultTickets = adultTickets;
    }

    public long getChildTickets() {
        return childTickets;
    }

    public void setChildTickets(long childTickets) {
        this.childTickets = childTickets;
    }

    public long getSeniorTickets() {
        return seniorTickets;
    }

    public void setSeniorTickets(long seniorTickets) {
        this.seniorTickets = seniorTickets;
    }

    @Override
    public String toString() {
        return "BookingRequest{" +
                "movieTitle='" + movieTitle + '\'' +
                ", showDateTime=" + showDateTime +
                ", cardNum='" + cardNum + '\'' +
                ", userID=" + userID +
                ", promotionID=" + promotionID +
                ", ticketType='" + ticketType + '\'' +
                ", showID=" + showID +
                ", showroomID=" + showroomID +
                ", seats=" + seats +
                ", adultTickets=" + adultTickets +
                ", childTickets=" + childTickets +
                ", seniorTickets=" + seniorTickets +
                '}';
    }
}
