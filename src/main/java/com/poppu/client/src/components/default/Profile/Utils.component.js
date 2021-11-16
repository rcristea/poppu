import {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import {deleteAssociation} from "./methods";


export class addressComponent extends Component {
  constructor(props) {
    super(props);

    this.handleEditAddress = this.handleEditAddress.bind(this)
  }

  handleEditAddress() {
    this.props.history.push({
      pathname: '/address/edit',
      state: {address: this.props.address}
    })
  }

  render() {
    return (
      <div className={'m-2 bg-info bg-opacity-25'}>
        <HeadingComponent compTitle={this.props.compTitle}/>
        <Card className={'m-2 bg-info bg-opacity-10'}>
          <DisplayAttribute attName={'City'} attVal={this.props.address.city}/>
          <DisplayAttribute attName={'Street'} attVal={this.props.address.street}/>
          <DisplayAttribute attName={'Zip Code'} attVal={this.props.address.zipCode}/>
          <Col md={3}>
            <Button variant={'warning'} size={'sm'} onClick={this.handleEditAddress}>Edit Address</Button>
          </Col>
        </Card>
      </div>
    )
  }
}

export const AddressComponent = withRouter(addressComponent)

export class paymentInfoComponent extends Component {
  constructor(props) {
    super(props);

    this.handleEditPayment = this.handleEditPayment.bind(this);
    this.handleDeletePayment = this.handleDeletePayment.bind(this);
  }

  handleEditPayment() {
    this.props.history.push({
      pathname: '/payment/edit',
      state: {
        paymentInfo: this.props.paymentInfo
      }
    })
  }

  async handleDeletePayment() {
    await deleteAssociation(this.props.paymentInfo._links.self.href)
    this.props.history.push({
      pathname: '/profile'
    })
    window.location.reload();
  }

  render() {
    return (
      <div className={'m-2 bg-success bg-opacity-50'}>
        <HeadingComponent compTitle={this.props.compTitle}/>
        <Card className={'m-2 bg-success bg-opacity-25'}>
          <DisplayAttribute attName={'Card Number'} attVal={this.props.paymentInfo.cardNum}/>
          <DisplayAttribute attName={'Card Type'} attVal={this.props.paymentInfo.cardType}/>
          <DisplayAttribute attName={'Expiration Date'} attVal={this.props.paymentInfo.expDate}/>
          <Card className={'m-2'}>
            <AddressComponent compTitle={'Payment Address'} address={this.props.paymentInfo.address}/>
          </Card>
          <Col md={3}>
            <Button variant={'warning'} size={'sm'} onClick={this.handleEditPayment}>Edit Payment</Button>
          </Col>
          <Col md={3}>
            <Button variant={'danger'} size={'sm'} onClick={this.handleDeletePayment}>Delete Payment Method</Button>
          </Col>
        </Card>
      </div>
    )
  }
}

export const PaymentInfoComponent = withRouter(paymentInfoComponent)

export class TitleComponent extends Component {
  render() {
    return (
      <Container className={'m-2'}>
        <Row>
          <h1>{this.props.compTitle}</h1>
        </Row>
      </Container>
    )
  }
}

export class HeadingComponent extends Component {
  render() {
    return (
      <Container className={'m-2'}>
        <Row>
          <h4>{this.props.compTitle}</h4>
        </Row>
      </Container>
    )
  }
}

export class DisplayAttribute extends Component {
  render() {
    return (
      <div className={'m-2 border-bottom rounded border-1 border-light'}>
        <Row>
          <Col md={3}>
            <strong>{this.props.attName}:</strong>
          </Col>
          <Col md={9}>
            {this.props.attVal}
          </Col>
        </Row>
      </div>
    )
  }
}

export class FormAttribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attVal: this.props.attVal
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({attVal: e.target.value})
  }

  render() {
    return (
      <div className={'m-2 bg-info bg-opacity-10'}>
        <Form.Group controlId={this.props.attCtrl}>
          <Form.Label><strong>{this.props.attLabel}</strong></Form.Label>
          <Form.Control type={this.props.attType}
                        placeholder={this.props.attPlaceholder}
                        value={this.state.attVal} onChange={this.handleChange}/>
        </Form.Group>
      </div>
    )
  }
}
