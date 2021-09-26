import { Component } from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'

export class OrderSummaryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableTimes: [
                {
                    "showtime": "4:30 pm",
                    "availableSeats": 25
                },
                {
                    "showtime": "6:00 pm",
                    "availableSeats": 34
                },
                {
                    "showtime": "7:30 pm",
                    "availableSeats": 22
                },
                {
                    "showtime": "9:00 pm",
                    "availableSeats": 34
                }
            ]
        }
    }

    render() {
        return (
            <Container className='my-2'>
                <Row>
                    <h1>Order Summary</h1>
                </Row>
                <Row>
                    <Card className='my-2'>
                        <Card.Title>
                            <h2>Show Time</h2>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                <Col md={2}>
                                    <h5>Date</h5>
                                </Col>
                                <Col md={10}>
                                    10/07/2021
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <h5>Show Time</h5>
                                </Col>
                                <Col md={10}>
                                    4:30 pm
                                </Col>
                            </Row>
                            <Button variant='warning'>Change Show Time</Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='my-2'>
                        <Card.Title>
                            <h2>Tickets</h2>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                <Col md={2}>
                                    <h5>Adult</h5>
                                </Col>
                                <Col md={10}>
                                    3
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <h5>Children</h5>
                                </Col>
                                <Col md={10}>
                                    4
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <h5>Seniors</h5>
                                </Col>
                                <Col md={10}>
                                    3
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <h5>Total</h5>
                                </Col>
                                <Col md={10}>
                                    $31.50
                                </Col>
                            </Row>
                            <Button variant='warning'>Change Tickets</Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='my-2'>
                        <Card.Title>
                            <h2>Seats</h2>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                <Col md={2}>
                                    <h5>Selected Seats</h5>
                                </Col>
                                <Col md={10}>
                                    A4, A5, A6, A7
                                </Col>
                            </Row>
                            <Button variant='warning'>Change Seats</Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='my-2'>
                        <Card.Body>
                            <Button className='mx-1' variant='primary' type="submit" href={'/booking/order/checkout'}>Proceed to Checkout</Button>
                            <Button className='mx-1' variant="danger">Cancel</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default OrderSummaryComponent