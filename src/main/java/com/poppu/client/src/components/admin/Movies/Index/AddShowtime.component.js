import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {TitleComponent} from "../../../default/Profile/Utils.component";

export class AddShowTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieID: '',
      date: '',
      time: '',
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitShowtime = this.handleSubmitShowtime.bind(this)
  }

  handleBack() {
    this.props.history.push('/admin')
  }

  handleSubmitShowtime() {
    if (this.state.movieID.trim() === '') {
      alert('Empty title. Please fill it out.')
    } else if (this.state.date.trim() === '') {
      alert('Empty title. Please fill it out.')
    } else if (this.state.time.trim() === '') {
      alert('Empty title. Please fill it out.')
    } else {
      console.log(this.state)
      this.props.history.push('/admin')
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  render() {
    return (
        <Container className={'my-2 bg-light'}>
          <TitleComponent compTitle={'Add Showtime'}/>
          <Card className={'m-2'}>
            <Form>
              <div>
                <Form.Group>
                  <Form.Label><strong>Movie ID</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the id of the movie.'}
                                value={this.state.movieID}
                                onChange={e => this.setState({
                                  ...this.state, movieID: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Show Date</strong></Form.Label>
                  <Form.Control type={'date'}
                                placeholder={'Enter the date of this show.'}
                                value={this.state.date}
                                onChange={e => this.setState({
                                  ...this.state, date: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Last Name</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the timeslot of this show.'}
                                value={this.state.time}
                                onChange={e => this.setState({
                                  ...this.state, time: e.target.value
                                })}/>
                </Form.Group>
              </div>
              <Container className={'m-2'}>
                <Button variant={'success'} onClick={this.handleSubmitShowtime}>Submit Actor</Button>
                <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
              </Container>
            </Form>
          </Card>
        </Container>
    )
  }
}

export default AddShowTime