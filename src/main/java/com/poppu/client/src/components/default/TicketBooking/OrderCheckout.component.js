import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'

import 'react-bootstrap/'
import {TitleComponent} from "../Profile/Utils.component";

export class OrderCheckoutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addresses: null,
            paymentInfos: null,
            userProfile: null,
            cardType: '',
            cardNum: '',
            expDate: '',
            street: '',
            city: '',
            zipCode: '',
        }
        this.setState({
            ...this.state,
            selectedShow: this.props.history.location.selectedShow,
            selectedMovie: this.props.history.location.selectedMovie,
            adultTickets: this.props.history.location.adultTickets,
            childTickets: this.props.history.location.childTickets,
            seniorTickets: this.props.history.location.seniorTickets,
            selectedSeats: this.props.history.location.selectedSeats
        })
        console.log(this.state)
        this.getAddresses = this.getAddresses.bind(this)
        this.getPayments = this.getPayments.bind(this)
        this.setAddress = this.setAddress.bind(this)
        this.setPayment = this.setPayment.bind(this)
    }

    getAddresses() {
        //fetch addresses for users here
    }

    getPayments() {
        //fetch payments for users here
    }

    setPayment() {
        //Set current payment
    }

    setAddress() {
        //Set current address
    }

    componentDidMount() {
    }

    goNext() {
        this.props.history.push({
            pathname: '/booking/order/confirm',
            state: {
                userProfile: this.state.userProfile,
                selectedShow: this.state.selectedShow,
                selectedMovie: this.state.selectedMovie,
                adultTickets: this.state.adultTickets,
                childTickets: this.state.childTickets,
                seniorTickets: this.state.seniorTickets,
                selectedSeats: this.state.selectedSeats,
                cardType: this.state.cardType,
                cardNum: this.state.cardNum,
                expDate: this.state.expDate,
                street: this.state.street,
                city: this.state.city,
                zipCode: this.state.zipCode
            }
        })
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Add New Movie'}/>
                <Card className={'m-2'}>
                    <Form>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Card Type</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the card type.'}
                                              value={this.state.cardType}
                                              onChange={e => this.setState({
                                                  ...this.state, cardType: e.target.value
                                              })}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Card Num</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the card number.'}
                                              value={this.state.cardNum}
                                              onChange={e => this.setState({
                                                  ...this.state, cardNum: e.target.value
                                              })}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Expiration Date</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the expiration date of the card.'}
                                              value={this.state.expDate}
                                              onChange={e => this.setState({
                                                  ...this.state, expDate: e.target.value
                                              })}/>
                            </Form.Group>
                            <div>
                                <h2>Payment Address</h2>
                                <Form.Group>
                                    <Form.Label><strong>Street</strong></Form.Label>
                                    <Form.Control type={'text'}
                                                  placeholder={'Enter street.'}
                                                  value={this.state.street}
                                                  onChange={e => this.setState({
                                                      ...this.state, street: e.target.value
                                                  })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label><strong>City</strong></Form.Label>
                                    <Form.Control type={'text'}
                                                  placeholder={'Enter city.'}
                                                  value={this.state.city}
                                                  onChange={e => this.setState({
                                                      ...this.state, city: e.target.value
                                                  })}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label><strong>Zip Code</strong></Form.Label>
                                    <Form.Control type={'number'}
                                                  placeholder={'Enter zip code.'}
                                                  value={this.state.zipCode}
                                                  onChange={e => this.setState({
                                                      ...this.state, zipCode: e.target.value
                                                  })}/>
                                </Form.Group>
                            </div>
                        </div>
                        <Button variant={'success'} onClick={this.goNext} value={'Confirm Order'}/>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default OrderCheckoutComponent