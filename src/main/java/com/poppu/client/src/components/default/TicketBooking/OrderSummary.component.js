import { Component } from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

import 'bootstrap/dist/css/vapor.css'
import 'react-bootstrap/'
import AutoCard from '../../utils/AutoCard.component'

export class OrderSummaryComponent extends Component {
    component_title = 'Order Summary'
    component_data = {
        'user_name': 'Abhinav Singh',
        'user_email': 'example@example.com',
        'order_id': 12093890,
        'order_date': Date(),
        'showtime_date': '03/02/2022',
        'showtime_time': '9:30 pm',
        'showroom': 12,
        'adult_tickets': 3,
        'child_tickets': 4,
        'senior_tickets': 3,
        'total_cost': '$34.50',
    }

    render() {
        return (
            <Container className={'my-2'}>
                <Row>
                    <AutoCard component_title={this.component_title} component_data={this.component_data} />
                </Row>
                <Row className={'mx-3'}>
                    <Col md={4}><Button variant={'warning'} href={'/booking/times'}>Go Back and Edit</Button></Col>
                    <Col md={4}><Button variant={'success'} href={'/booking/order/checkout'}>Proceed To Checkout</Button></Col>
                    <Col md={4}><Button variant={'danger'} href={'/'}>Cancel</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default OrderSummaryComponent