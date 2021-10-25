import { Component } from 'react'
import {Button, Card, Container} from 'react-bootstrap'

import 'react-bootstrap/'
import {AddressComponent, DisplayAttribute, PaymentInfoComponent, TitleComponent} from "./Utils.component";

export class ViewProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: "Abhinav",
                lastName: "Singh",
                role: "user",
                email: "abhinn@singh.com",
                password: "bigPassword",
                isSubscribed: "TRUE",
                phoneNum: "1-909-909-9090",
                status: "Active User",
                address: {
                    city: "Marietta",
                    street: "Streets ahead",
                    zipCode: "808080"
                },
                paymentCards: [
                    {
                        cardNum: "Marietta",
                        cardType: "Peachtree St",
                        expDate: "238909",
                        address: {
                            city: "Marietta",
                            street: "Streets ahead",
                            zipCode: "808080",
                        }
                    },
                    {
                        cardNum: "Marietta",
                        cardType: "Peachtree St",
                        expDate: "238909",
                        address: {
                            city: "Marietta",
                            street: "Streets ahead",
                            zipCode: "808080",
                        }
                    },
                ]
            }
        }
        this.handleEditProfileClick = this.handleEditProfileClick.bind(this)
        this.handleEditAddressClick = this.handleEditAddressClick.bind(this)
        this.handleEditPaymentInfoClick = this.handleEditPaymentInfoClick.bind(this)

        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        if (sessionStorage.getItem('role')) {
            sessionStorage.removeItem('role')
            sessionStorage.setItem('alert', 'Successfully logged out!')

            this.props.history.push('/')
        }
    }

    componentDidMount() {
        if (sessionStorage.getItem('role') !== 'user') {
            sessionStorage.setItem('alert', 'User does not have correct privileges.')
            this.props.history.push('/')
        }
    }

    handleEditProfileClick() {
        this.props.history.push({
            pathname: '/profile/edit',
            state: { user: this.state.user}
        })
    }

    handleEditAddressClick() {
        this.props.history.push({
            pathname: '/address/edit',
            state: { address: this.state.user.address}
        })
    }

    handleEditPaymentInfoClick() {
        this.props.history.push({
            pathname: '/payment/edit',
            state: { paymentInfo: this.state.user.paymentInfo}
        })
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={this.state.user.firstName.concat('\'s Profile')}/>
                <Card className={'bg-primary bg-opacity-25'}>
                    <DisplayAttribute attName={'First Name'} attVal={this.state.user.firstName}/>
                    <DisplayAttribute attName={'Last Name'} attVal={this.state.user.lastName}/>
                    <DisplayAttribute attName={'Role'} attVal={this.state.user.role}/>
                    <DisplayAttribute attName={'Email'} attVal={this.state.user.email}/>
                    <DisplayAttribute attName={'Password'} attVal={'+++++++++++'}/>
                    <DisplayAttribute attName={'Subscribed'} attVal={this.state.user.isSubscribed}/>
                    <DisplayAttribute attName={'Phone Number'} attVal={this.state.user.phoneNum}/>
                    <DisplayAttribute attName={'Status'} attVal={this.state.user.status}/>
                    <Container>
                        <Button variant={"warning"} className={'m-2'} size={'lg'} onClick={this.handleEditProfileClick}>Edit Your Profile Information</Button>
                        <Button variant={"warning"} classname={'m-2'} size={'lg'} onClick={this.handleEditAddressClick}>Edit Your Address Information</Button>
                    </Container>
                    <Card className={'m-2'}>
                        <AddressComponent compTitle={'Your Address'} address={this.state.user.address}/>
                    </Card>
                    <Card className={'m-2'}>
                        {this.state.user.paymentCards.map(paymentCard => {
                            return (
                                <Container>
                                    <PaymentInfoComponent compTitle={'Card: '.concat(paymentCard.cardType)} paymentInfo={paymentCard}/>
                                    <Button variant={"warning"} classname={'m-2'} size={'lg'} onClick={this.handleEditPaymentInfoClick}>Edit Card Information</Button>
                                </Container>
                            )
                        })}
                    </Card>
                </Card>
            </Container>
        )
    }
}

export {TitleComponent, DisplayAttribute}
export default ViewProfileComponent