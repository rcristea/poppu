import {Component} from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

export class AddressComponent extends Component {
    render() {
        return (
            <div className={'m-2 bg-info bg-opacity-25'}>
                <HeadingComponent compTitle={this.props.compTitle}/>
                <Card className={'m-2 bg-info bg-opacity-10'}>
                    <DisplayAttribute attName={'City'} attVal={this.props.address.city}/>
                    <DisplayAttribute attName={'Street'} attVal={this.props.address.street}/>
                    <DisplayAttribute attName={'Zip Code'} attVal={this.props.address.zipCode}/>
                </Card>
            </div>
        )
    }
}

export class PaymentInfoComponent extends Component {
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
                </Card>
            </div>
        )
    }
}

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
            <div className={'m-2 border-bottom rounded border-2 border-dark'}>
                <Row>
                    <Col md={4}>
                        <strong>{this.props.attName}:</strong>
                    </Col>
                    <Col md={8}>
                        {this.props.attVal}
                    </Col>
                </Row>
            </div>
        )
    }
}

export class FormAttribute extends Component {
    render() {
        return (
            <div className={'m-2 bg-info bg-opacity-10'}>
                <Form.Group controlId={this.props.attCtrl}>
                    <Form.Label><strong>{this.props.attLabel}</strong></Form.Label>
                    <Form.Control type={this.props.attType}
                                  placeholder={this.props.attPlaceholder}
                                  value={this.props.attVal}/>
                </Form.Group>
            </div>
        )
    }
}
