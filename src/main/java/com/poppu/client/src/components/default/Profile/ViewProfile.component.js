import { Component } from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import AutoCard from '../../utils/AutoCard.component'
import AutoList from '../../utils/AutoList.component'
import {AddressComponent, DisplayAttribute, TitleComponent} from "./Utils.component";

export class ViewProfileComponent extends Component {
    profile_name = 'Abhinav Singh'
    profile_data = {
        'first_name': 'Abhinav',
        'last_name': 'Singh',
        'user_ID': 2230832,
        'Status': 'Registered and verified',
        'E-mail': 'example@example.com',
        'Address': '3333 Street Street',
        'City': 'Marietta GA',
        'ZIP': '33333'
    }
    payment_info = [
        {
            'card_name': 'MasterCard',
            'card_type': 'Credit',
            'card_number': 20839843,
            'expires': '10/02/2029'
        },
        {
            'card_name': 'Visa',
            'card_type': 'Credit',
            'card_number': 30931839,
            'expires': '10/02/2031'
        },
        {
            'card_name': 'MasterCard',
            'card_type': 'Credit',
            'card_number': 2083984,
            'expires': '01/20/3030'
        }
    ]

    constructor(props) {
        super(props);

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

    render() {
        return (
            <Container classname={'m-2 p-2 border-primary'}>
                <TitleComponent compTitle={this.props.user.Name.concat('\'s Profile')}/>
                <Card classname={'m-2 p-2 border-primary'}>
                    <DisplayAttribute attName={'First Name'} attVal={this.props.user.firstName}/>
                    <DisplayAttribute attName={'Last Name'} attVal={this.props.user.cardType}/>
                    <DisplayAttribute attName={'Role'} attVal={this.props.user.role}/>
                    <DisplayAttribute attName={'Email'} attVal={this.props.user.email}/>
                    <DisplayAttribute attName={'Password'} attVal={'+++++++++++'}/>
                    <DisplayAttribute attName={'Subscribed'} attVal={this.props.user.isSubscribed}/>
                    <DisplayAttribute attName={'Phone Number'} attVal={this.props.user.phoneNum}/>
                    <DisplayAttribute attName={'Status'} attVal={this.props.user.status}/>
                    <Card classname={'m-2 p-2 border-primary'}>
                        <AddressComponent compTitle={'Your Address'} address={this.props.user.address}/>
                        <Button variant={"warning"}>Edit Your Address Information</Button>
                    </Card>
                    <Button>Edit Profile Information</Button>
                </Card>
            </Container>
        )
    }
}

export default ViewProfileComponent