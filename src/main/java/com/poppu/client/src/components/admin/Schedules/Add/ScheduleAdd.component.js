import React, {Component, createRef} from 'react'
import './ScheduleAdd.component.css'
import Sidebar from "../../Sidebar/Sidebar.component";
import {Form, FormControl, FormGroup, FormLabel, FormSelect} from "react-bootstrap";
import InputMask from "react-input-mask";

class ScheduleAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateTime: null,
      duration: null,
      movie: null,
      showroom: 1,
      seats: null,
      error: null,
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
    this.getShowModels = this.getShowModels.bind(this)
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
      showroomId: showroom,
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
  
  async createShowModel(dateTime, duration, movie, showroom) {
    let data = {
      dateTime: new Date(dateTime),
      duration: duration,
      movie: movie,
      showroom: showroom,
    }

    let showModelResponse = this.request('shows', 'POST', data).then(response => {
      return response.json().then(json => {
        console.log('createShowModel', json)
        return json
      })
    }).catch(error => {
      console.error('createShowModel', error)
      return false
    })

    let links = await showModelResponse.then(response => {
      return response._links
    })

    await fetch(links.movie.href, {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/uri-list'
      },
      body: `http://localhost:8080/movies/${movie.movieId}`
    })

    await fetch(links.showroom.href, {
      method: 'PUT',
      headers: {
        'Content-Type': 'text/uri-list'
      },
      body: `http://localhost:8080/showrooms/${showroom.showroomId}`
    })

    return showModelResponse
  }

  getSeatModels(showroomId) {
    return fetch(`http://localhost:8080/seats?showroom=${showroomId}`, {
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        return response.json().then(json => {
          console.log('getSeatModels', json._embedded.seats)
          return json._embedded.seats
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
        return response
      }
    }).catch(error => {
      console.error('getMovieModel', error)
      return error
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
          console.log('getShowroomModel', json)
          return json
        })
      } else {
        console.error('getShowroomModel', response)
        return response
      }
    }).catch(error => {
      console.error('getShowroomModel', error)
      return error
    })
  }

  async validate() {
    let movie = await this.getMovieModel(this.state.movie)
    if (movie.ok === false) {
      this.setState({
        error: 'Oops! That movie ID was not found.'
      })

      return !this.state.error
    }

    let showroom = await this.getShowroomModel(this.state.showroom)
    console.log(showroom)
    console.log(this.state)
    if (showroom.ok === false) {
      this.setState({
        error: 'Oops! That showroom seems to not exist.'
      })

      return !this.state.error
    }

    let thisStartTime = new Date(this.state.dateTime)
    let durationHours = parseInt(this.state.duration.substring(0,1))
    let durationMinutes = parseInt(this.state.duration.substring(3,5))
    let thisEndTime = new Date(thisStartTime)
    thisEndTime.setHours(thisEndTime.getHours() + durationHours)
    thisEndTime.setMinutes(thisEndTime.getMinutes() + durationMinutes)

    let shows = await this.getShowModels();

    shows.forEach(show => {
      if (show.showroom.showroomId === parseInt(this.state.showroom)) {
        let showStartTime = new Date(show.dateTime)
        let showDurationHours = parseInt(show.movie.duration.substring(0,1))
        let showDurationMinutes = parseInt(show.movie.duration.substring(3,5))
        let showEndTime = new Date(showStartTime)
        showEndTime.setHours(showEndTime.getHours() + showDurationHours)
        showEndTime.setMinutes(showEndTime.getMinutes() + showDurationMinutes)

        if (
          (thisStartTime < showStartTime && showStartTime < thisEndTime) ||
          (thisStartTime < showEndTime && showEndTime < thisEndTime) ||
          (showStartTime < thisStartTime && thisEndTime < showEndTime) ||
          (thisStartTime.toString() === showStartTime.toString())
        ) {
          this.setState({
            error: 'This show room has another movie playing at the selected time.'
          })
        }
      }
    })

    return !this.state.error;
  }

  async setDuration() {
    if (this.state.movie) {
      let movie = await this.getMovieModel(this.state.movie)
      if (movie.duration) {
        this.durationRef.current.value = movie.duration
      } else {
        this.durationRef.current.value = ''
      }

      this.setState({
        duration: movie.duration,
      })

      this.forceUpdate()
    }
  }

  async handleChange(event) {
    this.setState({
      error: null,
    })

    const {name, value} = event.target

    await this.setState({
      [name]: value,
    })

    if (name === 'movie') {
      this.setDuration()
    }
  }

  handleSubmit = async(e) => {
    e.preventDefault()

    if(!await this.validate()) {
      return
    }


    let movie = await this.getMovieModel(this.state.movie)
    let showroom = await this.getShowroomModel(this.state.showroom)
    await this.createShowModel(this.state.dateTime, this.state.duration, movie, showroom)

    // TODO Create SeatAvailabilityModels (not required for this demo)
    // let seatModels = await this.getSeatModels(this.state.showroom)
    // seatModels.forEach(seatModel => {
    //   this.createSeatAvailabilityModel(show.showID, this.state.showroom, seatModel.seatId, true)
    // })

    this.props.history.push('/schedule')
    sessionStorage.setItem('alert-success', 'The show time has been added successfully!')
  }

  renderError() {
    if (this.state.error) {
      return (
        <div className='form-error'>
          <p>{this.state.error}</p>
        </div>
      )
    }
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
                  <h3>Fill out the form below to schedule a new movie</h3>
                </div>
              </div>
              <div className='schedule-card-content'>
                {this.renderError()}
                <Form className='schedule-add' onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormLabel>Movie Id</FormLabel>
                    <FormControl type='text' name='movie' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>showroom Id</FormLabel>
                    <FormSelect name='showroom' onChange={this.handleChange}>
                      <option value='1'>1: Showroom A</option>
                      <option value='2'>2: Showroom B</option>
                      <option value='3'>3: Showroom C</option>
                    </FormSelect>
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