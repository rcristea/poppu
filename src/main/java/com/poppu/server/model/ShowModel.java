package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "shows")
public class ShowModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "show_id")
    private long showID;

    @Column(name = "date_time", nullable = false)
    private Timestamp dateTime;

    @Column(name = "duration", nullable = false, length = 16)
    private String duration;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "movie_id")
    private MovieModel movie;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "showroom_id")
    private ShowroomModel showroom;

    @OneToMany(mappedBy = "show")
    private Set<SeatAvailabilityModel> seats = new HashSet<SeatAvailabilityModel>();

    public ShowModel() {

    }

    public ShowModel(Timestamp dateTime, String duration, MovieModel movie, ShowroomModel showroom) {
        this.dateTime = dateTime;
        this.duration = duration;
        this.movie = movie;
        this.showroom = showroom;
    }

    public long getShowID() {
        return showID;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public String getDuration() {
        return duration;
    }

    public MovieModel getMovie() {
        return movie;
    }

    public ShowroomModel getShowroom() {
        return showroom;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public void setMovie(MovieModel movie) {
        this.movie = movie;
    }

    // impacts the SeatAvailabilityModel
    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }
}
