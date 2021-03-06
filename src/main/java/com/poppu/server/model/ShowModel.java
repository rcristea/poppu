package com.poppu.server.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "shows")
public class ShowModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "show_id")
    private long showID;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date_time", nullable = false)
    private Date dateTime;

    @ManyToOne
    @JoinColumn(name = "movie_id", foreignKey = @ForeignKey(name = "FK_show_movie"))
    private MovieModel movie;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "showroom_id", foreignKey = @ForeignKey(name = "FK_show_showroom"))
    private ShowroomModel showroom;

    @OneToMany(mappedBy = "show")
    private Set<SeatAvailabilityModel> seats = new HashSet<SeatAvailabilityModel>();

    public ShowModel() {

    }

    public ShowModel(Date dateTime, MovieModel movie, ShowroomModel showroom) {
        this.dateTime = dateTime;
        this.movie = movie;
        this.showroom = showroom;
    }

    public long getShowID() {
        return showID;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public MovieModel getMovie() {
        return movie;
    }

    public ShowroomModel getShowroom() {
        return showroom;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public void setMovie(MovieModel movie) {
        this.movie = movie;
    }

    // impacts the SeatAvailabilityModel
    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }
}
