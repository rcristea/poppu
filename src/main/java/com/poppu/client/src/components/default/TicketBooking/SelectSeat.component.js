import {Component} from 'react'
import {Button, Card, Col, Container, Form, Image, Row} from 'react-bootstrap'
import theater_img from '../../../assets/seats/Theater.png'
import seat0 from '../../../assets/seats/Seat(0).png'
import seat1 from '../../../assets/seats/Seat(1).png'
import seat2 from '../../../assets/seats/Seat(2).png'


export class SelectSeatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.history.location.state
        this.setState({
            ...this.state,
            selectedSeats: ['A1', 'A2', 'B1', 'B2']
        })
        console.log(this.state)

        this.goNext = this.goNext.bind(this)
        this.goBack = this.goNext.bind(this)
    }

    goNext() {
        this.props.history.push({
            pathname: '/booking/order/summary',
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
            <Container className='my-3'>
                <Row>
                    <h1>Seat Selection</h1>
                </Row>
                <Row>
                    <Form>
                        <Card className='my-3'>
                            <Card.Body>
                                <Form.Label>
                                    <h2>Select Your Seats:</h2>
                                </Form.Label>
                                <Seats rows={9} cols={10} reserved={[0, 1, 2, 3]}/>
                            </Card.Body>
                        </Card>
                        <Card className='my-3'>
                            <Card.Body>
                                <Button className='mx-1' variant='primary'
                                        onClick={event => this.goNext()}>Next</Button>
                                <Button className='mx-1' variant='danger' href={'/'}>Cancel</Button>
                            </Card.Body>
                        </Card>
                    </Form>
                </Row>
            </Container>
        )
    }
}

function Seats(props) {
    let rowArr = Array.from(Array(props.rows).keys())
    let colArr = Array.from(Array(props.cols).keys())
    return (
        <Row>
            <Card>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <Image src={theater_img} height={200} width={400}/>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
                <Card.Body>

                    {rowArr.map(row => {
                        return (
                            <Row>
                                <Col>Row {row}</Col>
                                {colArr.map(col => {
                                    let reserved = false
                                    if (props.reserved.includes(((row * rowArr.length) + col))) {
                                        reserved = 1
                                    }
                                    return (
                                        <Col>
                                            <Seat reserved={reserved}/>
                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    })}
                </Card.Body>
            </Card>
        </Row>
    )
}

export class Seat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img_src: seat0
        }
        if (this.props.reserved) {
            this.state.img_src = seat1
            this.state.disabled = true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.img_src === seat0) {
            this.setState(prevState => ({
                img_src: seat2
            }))
        } else {
            this.setState(prevState => ({
                img_src: seat0
            }))
        }
    }

    render() {
        return (
            <button className={'btn-outline-dark'} onClick={this.handleClick}>
                <Image src={this.state.img_src} height={50} width={50}/>
            </button>
        )
    }
}

export default SelectSeatComponent