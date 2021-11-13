package com.poppu.server.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "shows")
public class ShowModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "show_generator")
    @SequenceGenerator(name="show_generator", initialValue = 19)
    @Column(name = "show_id")
    private long showID;

    @Column(name = "date_time", nullable = false)
    private Timestamp dateTime;

    @ManyToOne(optional = false)
    @JoinColumn(name = "movie_id", foreignKey = @ForeignKey(name = "FK_show_movie"))
    private MovieModel movie;

    @ManyToOne(optional = false)
    @JoinColumn(name = "showroom_id", foreignKey = @ForeignKey(name = "FK_show_showroom"))
    private ShowroomModel showroom;

    @OneToMany(mappedBy = "show")
    private Set<SeatAvailabilityModel> seats = new HashSet<SeatAvailabilityModel>();

    public ShowModel() {

    }

    public ShowModel(Timestamp dateTime, MovieModel movie, ShowroomModel showroom) {
        this.dateTime = dateTime;
        this.movie = movie;
        this.showroom = showroom;
    }

    public long getShowID() {
        return showID;
    }

    public Timestamp getDateTime() {
        return dateTime;
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

    public void setMovie(MovieModel movie) {
        this.movie = movie;
    }

    // impacts the SeatAvailabilityModel
    public void setShowroom(ShowroomModel showroom) {
        this.showroom = showroom;
    }
}
