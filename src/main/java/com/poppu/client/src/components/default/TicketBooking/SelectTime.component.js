import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

export class SelectTimeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: [
        {
          'date': '10/02/2021',
          'times': [
            {
              'showtime': '4:30 pm',
              'availableSeats': 25
            },
            {
              'showtime': '6:00 pm',
              'availableSeats': 34
            },
            {
              'showtime': '7:30 pm',
              'availableSeats': 22
            },
            {
              'showtime': '9:00 pm',
              'availableSeats': 34
            }
          ]
        },
        {
          'date': '10/05/2021',
          'times': [
            {
              'showtime': '4:30 pm',
              'availableSeats': 25
            },
            {
              'showtime': '6:00 pm',
              'availableSeats': 34
            },
            {
              'showtime': '7:30 pm',
              'availableSeats': 22
            },
            {
              'showtime': '9:00 pm',
              'availableSeats': 34
            },
            {
              'showtime': '10:30 pm',
              'availableSeats': 34
            }
          ]
        },
        {
          'date': '10/07/2021',
          'times': [
            {
              'showtime': '7:30 pm',
              'availableSeats': 22
            },
            {
              'showtime': '9:00 pm',
              'availableSeats': 34
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <Container className='my-3'>
        <Row>
          <h1>Ticket Selection</h1>
        </Row>
        <Row>
          <Form>
            <Card className='my-3'>
              <Card.Body>
                <Form.Label>
                  <h2>Select Your Date and Time:</h2>
                </Form.Label>
                {
                  this.state.dates.map(movieDate => {
                    return (
                      <Row className='my-3'>
                        <Col>{movieDate.date}</Col>
                        {
                          movieDate.times.map(showTime => {
                            return (
                              <Col md={2}>
                                <Button className='container btn-secondary' name='dateTime'>{showTime.showtime}</Button>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    )
                  })
                }
              </Card.Body>
            </Card>
            <Card className='my-3'>
              <Card.Body>
                <Form.Label>
                  <h2>Select The Number of Tickets:</h2>
                </Form.Label>
                <Form.Control className='my-3' type='number' placeholder='Adult Tickets'/>
                <Form.Control className='my-3' type='number' placeholder='Child Tickets'/>
                <Form.Control className='my-3' type='number' placeholder='Senior Tickets'/>
              </Card.Body>
            </Card>
            <Card className='my-3'>
              <Card.Body>
                <Button className='mx-1' variant='primary' type='submit' href={'/booking/seats'}>Select Seats</Button>
                <Button className='mx-1' variant='danger' href={'/'}>Cancel</Button>
              </Card.Body>
            </Card>
          </Form>
        </Row>
      </Container>
    )
  }
}

export default SelectTimeComponent