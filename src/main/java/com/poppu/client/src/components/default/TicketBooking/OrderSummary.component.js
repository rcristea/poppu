import {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'

export class OrderSummaryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.history.location.state
        console.log(this.state)
        this.renderMovie = this.renderMovie.bind(this)
        this.renderTickets = this.renderTickets.bind(this)
        this.renderShow = this.renderShow.bind(this)

        this.goNext = this.goNext.bind(this)
    }

    renderMovie() {
        return (
            <Container className={'m-2 bg-info bg-opacity-10'}>
                <Row>
                    <h2>Movie Information</h2>
                </Row>
                <Row>
                    <Col md={4}>Movie</Col>
                    <Col md={8}>{this.state.selectedMovie.title}</Col>
                </Row>
                <Row>
                    <Col md={4}>Rating</Col>
                    <Col md={8}>{this.state.selectedMovie.rating}</Col>
                </Row>
                <Row>
                    <Col md={4}>Duration</Col>
                    <Col md={8}>{this.state.selectedMovie.duration}</Col>
                </Row>
            </Container>
        )
    }

    renderShow() {
        return (
            <Container className={'m-2 bg-info bg-opacity-10'}>
                <Row>
                    <h2>Show Information</h2>
                </Row>
                <Row>
                    <Col md={4}>Show Date</Col>
                    <Col md={8}>{this.state.selectedShow.dateTime}</Col>
                </Row>
                <Row>
                    <Col md={4}>Show Room</Col>
                    <Col md={8}>{this.state.selectedShow.showroom.name}</Col>
                </Row>
                <Row>
                    <Col md={4}>Senior Tickets</Col>
                    <Col md={8}>{this.state.selectedShow.showroom.name}</Col>
                </Row>
            </Container>
        )
    }

    renderTickets() {
        return (
            <Container className={'m-2 bg-info bg-opacity-10'}>
                <Row>
                    <h2>Ticket Information</h2>
                </Row>
                <Row>
                    <Col md={4}>Adult Tickets</Col>
                    <Col md={8}>{this.state.adultTickets}</Col>
                </Row>
                <Row>
                    <Col md={4}>Child Tickets</Col>
                    <Col md={8}>{this.state.childTickets}</Col>
                </Row>
                <Row>
                    <Col md={4}>Senior Tickets</Col>
                    <Col md={8}>{this.state.seniorTickets}</Col>
                </Row>
            </Container>
        )
    }

    goNext() {
        this.props.history.push({
            pathname: '/booking/order/checkout',
            state: {
                selectedShow: this.state.selectedShow,
                selectedMovie: this.state.selectedMovie,
                adultTickets: this.state.adultTickets,
                childTickets: this.state.childTickets,
                seniorTickets: this.state.seniorTickets,
                selectedSeats: this.state.selectedSeats,
            }
        })
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <Row>
                    {this.renderMovie()}
                </Row>
                <Row>
                    {this.renderShow()}
                </Row>
                <Row>
                    {this.renderTickets()}
                </Row>
                <Row>
                </Row>
                <Row className={'mx-3'}>
                    <Col md={4}><Button variant={'warning'} href={'/booking/times'}>Go Back and Edit</Button></Col>
                    <Col md={4}><Button variant={'success'} href={'/booking/order/checkout'}>Proceed To
                        Checkout</Button></Col>
                    <Col md={4}><Button variant={'danger'} href={'/'}>Cancel</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default OrderSummaryComponent