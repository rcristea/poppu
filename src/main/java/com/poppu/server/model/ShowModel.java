package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "show")
public class ShowModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "show_id")
    private int showID;

    @Column(name = "date_time", nullable = false)
    private Timestamp dateTime;

    @Column(name = "duration", nullable = false)
    private double duration;

    // **** IMPORTANT: IMPLEMENT THE MANY-TO-ONE ASSOCATIONS WITH MOVIE, SHOWROOM ****

    public ShowModel() {

    }

    public ShowModel(Timestamp dateTime, double duration/*, MovieModel movie, ShowroomModel showroom*/) {
        this.dateTime = dateTime;
        this.duration = duration;
        /*
        this.movie = movie;
        this.showroom = showroom;
         */
    }

    public int getShowID() {
        return showID;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public double getDuration() {
        return duration;
    }

    public void setShowID(int showID) {
        this.showID = showID;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }
}
