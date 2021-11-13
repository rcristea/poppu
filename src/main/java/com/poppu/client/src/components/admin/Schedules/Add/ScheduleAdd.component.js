import React, {Component, createRef} from 'react'
import './ScheduleAdd.component.css'
import Sidebar from "../../Sidebar/Sidebar.component";
import {Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import InputMask from "react-input-mask";

class ScheduleAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateTime: null,
      duration: null,
      movie: null,
      showroom: null,
      seats: null,
    }

    this.durationRef = createRef()

    this.handleChange = this.handleChange.bind(this)
    this.request = this.request.bind(this)
    this.setDuration = this.setDuration.bind(this)
    this.validate = this.validate.bind(this)
    this.getSeatModels = this.getSeatModels.bind(this)
    this.createShowModel = this.createShowModel.bind(this)
    this.createSeatAvailabilityModel = this.createSeatAvailabilityModel.bind(this)
    this.getMovieModel = this.getMovieModel.bind(this)
    this.getMovieModels = this.getMovieModels.bind(this)
    this.getShowroomModel = this.getShowroomModel.bind(this)
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  request(destination, method, data) {
    return fetch(`http://localhost:8080/${destination}/`, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  }

  createSeatAvailabilityModel(showID, showroom, seatId, isAvailable) {
    let data = {
      showID: showID,
      showroom: showroom,
      seatId: seatId,
      isAvailable: isAvailable,
    }

    return this.request('seatavailabilities', 'POST', data).then(response => {
      console.log('createSeatAvailabilityModel', response)
      return response.ok
    }).catch(error => {
      console.error('createSeatAvailabilityModel', error)
      return false
    })
  }
  
  createShowModel(dateTime, duration, movie, showroom) {
    let data = {
      dateTime: dateTime,
      duration: duration,
      movie: movie.movieId,
      showroom: showroom.showroomId,
    }

    console.log(data)

    return this.request('shows', 'POST', data).then(response => {
      console.log('createShowModel', response)
      return response.ok
    }).catch(error => {
      console.error('createShowModel', error)
      return false
    })
  }

  getSeatModels(showroomId) {
    return fetch(`http://localhost:8080/seats/${showroomId}`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getSeatModels', json)
          return json
        })
      } else {
        console.error('getSeatModels', response)
        return null
      }
    }).catch(error => {
      console.error('getSeatModels', error)
      return null
    })
  }

  getMovieModel(movieId) {
    return fetch(`http://localhost:8080/movies/${movieId}`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getMovieModel', json)
          return json
        })
      } else {
        console.error('getMovieModel', response)
        return null
      }
    }).catch(error => {
      console.error('getMovieModel', error)
      return null
    })
  }

  getMovieModels() {
    return fetch(`http://localhost:8080/movies/`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getMovieModels', json)
          return json
        })
      } else {
        console.error('getMovieModels', response)
        return null
      }
    }).catch(error => {
      console.error('getMovieModels', error)
      return null
    })
  }

  getShowModels() {
    return fetch(`http://localhost:8080/shows/`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getShowModels', json._embedded.shows)
          return json._embedded.shows
        })
      } else {
        console.error('getShowModels', response)
        return null
      }
    }).catch(error => {
      console.error('getShowModels', error)
      return null
    })
  }

  getShowroomModel(showroomId) {
    return fetch(`http://localhost:8080/showrooms/${showroomId}`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('showShowroomModel', json)
          return json
        })
      } else {
        console.error('getShowroomModel', response)
        return null
      }
    }).catch(error => {
      console.error('getShowroomModel', error)
      return null
    })
  }

  async validate() {
    let thisStartTime = new Date(this.state.dateTime)
    let durationHours = parseInt(this.state.duration.substring(0,1))
    let durationMinutes = parseInt(this.state.duration.substring(3,5))
    let thisEndTime = new Date(thisStartTime)
    thisEndTime.setHours(thisEndTime.getHours() + durationHours)
    thisEndTime.setMinutes(thisEndTime.getMinutes() + durationMinutes)

    let shows = await this.getShowModels();

    shows.forEach(show => {
      if (show.showroom === this.state.showroom) {
        let showStartTime = new Date(show.dateTime)
        let showDurationHours = parseInt(show.duration.substring(0,1))
        let showDurationMinutes = parseInt(show.duration.substring(3,5))
        let showEndTime = new Date(showStartTime)
        showEndTime.setHours(showEndTime.getHours() + showDurationHours)
        showEndTime.setMinutes(showEndTime.getMinutes() + showDurationMinutes)

        if (thisStartTime < showEndTime || thisEndTime > showStartTime) {
          alert('This show room has another movie playing at this time.')
          return false
        }
      }
    })

    return true
  }

  setDuration() {

  }

  handleChange(event) {
    const {name, value} = event.target

    if (name === 'movie') {
      this.setDuration()
    }

    this.setState({
      [name]: value,
    })
  }

  /*
      TODO
        1) form should have the fields:
          - movieId
          - showroomId
          - dateTime (which is the start time)
          - duration:
            * Should be auto filled from movie supplied with movieId
        2) When the form is submitted
          a) Validate
            - Make sure the start time and duration does not conflict
              with another start time and duration
          b) get SeatModels from showroomModel with showroomId
          c) create a ShowModel with data:
            - dateTime (start date)
            - duration (comes from movieModel from movieId)
            - movie (movieId from form)
            - showroom (comes from showroomId)
          d) foreach seatModel, create a seatAvailabilityModel with:
            - showID
            - showroomId
            - seatId (from seatModel's id)
            - isAvailable (default to true)
     */

  handleSubmit = async(e) => {
    e.preventDefault()

    if(!await this.validate()) {
      return
    }


    let movie = await this.getMovieModel(this.state.movie)
    let showroom = await this.getShowroomModel(this.state.showroom)
    let show = await this.createShowModel(this.state.dateTime, this.state.duration, movie, showroom)

    let seatModels = await this.getSeatModels(this.state.showroom)
    seatModels.forEach(seatModel => {
      this.createSeatAvailabilityModel(show.showID, this.state.showroom, seatModel.seatId, true)
    })

    this.props.history.push('/schedule')
    alert('The show time has been added successfully!')
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className='schedule-container'>
          <div className='cover'>
            <div className='schedule-card'>
              <div className='schedule-card-heading'>
                <div className='schedule-card-title'>
                  <h1>Schedule a new movie</h1>
                </div>
                <div className='schedule-card-subtitle'>
                  {JSON.stringify(this.state)}
                  <h3>Fill out the form below to schedule a new movie</h3>
                </div>
              </div>
              <div className='schedule-card-content'>
                <Form className='schedule-add' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormLabel>Movie Id</FormLabel>
                    <FormControl type='text' name='movie' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>showroom Id</FormLabel>
                    <FormControl type='text' name='showroom' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl type='datetime-local' name='dateTime' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>Duration</FormLabel>
                    <InputMask
                      mask='9h 99m'
                      className='form-control'
                      name='duration'
                      onChange={this.handleChange}
                      ref={this.durationRef} />
                  </FormGroup>
                  <FormGroup>
                    <button type='submit' className='btn btn-primary m-2'>Submit</button>
                    <a className='btn btn-secondary' href='/schedule'>Cancel</a>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ScheduleAdd