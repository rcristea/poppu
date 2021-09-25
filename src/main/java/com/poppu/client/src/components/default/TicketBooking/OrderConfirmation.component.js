import { Component } from 'react'
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'

export class OrderConfirmationComponent extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1>Order Confirmation</h1>
                </Row>
                <Row>
                    <Card className='my-2'>
                        <Card.Title>
                            <h2>Order Details</h2>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                <Col md={2}><h5>Order Number</h5></Col>
                                <Col md={10}>1001920</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Show Date</h5></Col>
                                <Col md={10}>10/07/2021</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Show Time</h5></Col>
                                <Col md={10}>4:30 pm</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='my-2'>
                        <Card.Title>
                            <h2>Order</h2>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                <Col md={2}><h5>Adult Tickets</h5></Col>
                                <Col md={10}>1</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Child Tickets</h5></Col>
                                <Col md={10}>2</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Senior Tickets</h5></Col>
                                <Col md={10}>3</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Total</h5></Col>
                                <Col md={10}>$30.50</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='my-2 btn-outline-success'>
                        <Card.Title>
                            <h2>Confirmation Email Sent!</h2>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                <Col md={2}><h5>E-mail</h5></Col>
                                <Col md={10}>example@example.com</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Name</h5></Col>
                                <Col md={10}>John Smith</Col>
                            </Row>
                            <Row>
                                <Col md={2}><h5>Time</h5></Col>
                                <Col md={10}>11:59 pm</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card className='my-2'>
                        <Card.Body>
                            <Button className='mx-1' variant='primary' type="submit" >Back to Home</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default OrderConfirmationComponent