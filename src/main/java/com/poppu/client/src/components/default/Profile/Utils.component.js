import {Component} from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

export class AddressComponent extends Component {
    render() {
        return (
            <Container classname={'m-2 p-2 border-primary'}>
                <TitleComponent page_title={this.props.compTitle}/>
                <Card classname={'m-2 p-2 border-primary'}>
                    <DisplayAttribute attName={'City'} attVal={this.props.address.city}/>
                    <DisplayAttribute attName={'Street'} attVal={this.props.address.street}/>
                    <DisplayAttribute attName={'Zip Code'} attVal={this.props.address.zipCode}/>
                </Card>
            </Container>
        )
    }
}

export class PaymentInfoComponent extends Component {
    render() {
        return (
            <Container classname={'m-2 p-2 border-primary'}>
                <TitleComponent compTitle={this.props.compTitle}/>
                <Card classname={'m-2 p-2 border-primary'}>
                    <DisplayAttribute attName={'Card Number'} attVal={this.props.paymentInfo.cardNum}/>
                    <DisplayAttribute attName={'Card Type'} attVal={this.props.paymentInfo.cardType}/>
                    <DisplayAttribute attName={'Expiration Date'} attVal={this.props.paymentInfo.expDate}/>
                    <Card classname={'m-2 p-2 border-primary'}>
                        <AddressComponent compTitle={'Payment Address'} address={this.props.paymentInfo.address}/>
                    </Card>
                </Card>
            </Container>
        )
    }
}

export class TitleComponent extends Component {
    render() {
        return (
            <Container className={'m-2 p-2 border-primary'}>
                <Row>
                    <h2>{this.props.compTitle}</h2>
                </Row>
            </Container>
        )
    }
}

export class DisplayAttribute extends Component {
    render() {
        return (
            <Container className={'m-2 p-2'}>
                <Row>
                    <Col>
                        {this.props.attName}
                    </Col>
                    <Col>
                        {this.props.attVal}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export class FormAttribute extends Component {
    render() {
        return (
            <Container className={'m-2 p-2 border-primary'}>
                <Form.Group controlId={this.props.attCtrl}>
                    <Form.Label>{this.props.attLabel}</Form.Label>
                    <Form.Control type={this.props.attType}
                                  placeholder={this.props.attPlaceholder}
                                  value={this.props.attVal}/>
                </Form.Group>
            </Container>
        )
    }
}
