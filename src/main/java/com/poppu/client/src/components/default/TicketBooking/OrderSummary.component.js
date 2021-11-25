import {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import AutoCard from '../../utils/AutoCard.component'

export class OrderSummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state= this.props.history.location.state
    console.log(this.state)
  }

  render() {
    return (
      <Container className={'my-2'}>
        <Row>

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