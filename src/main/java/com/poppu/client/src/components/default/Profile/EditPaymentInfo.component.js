import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {Component} from "react";
import {putData} from "./methods";

export class EditPaymentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentInfo: this.props.location.state.paymentInfo
        };

        this.handleBack = this.handleBack.bind(this);
        this.handleSubmitPayment = this.handleSubmitPayment.bind(this);
    }

    handleBack() {
        this.props.history.push('/profile')
    }

    handleSubmitPayment() {
        if(this.state.paymentInfo.cardNum.trim() === '') {
            alert("Please enter a number for your payment card!")
        } else if(this.state.paymentInfo.cardType.trim() === '') {
            alert("Please enter a your card type!")
        } else if(this.state.paymentInfo.expDate.trim().length === 0) {
            alert("Please enter an expiration date for your card!")
        } else if(!this.state.paymentInfo.expDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
            alert("Expiration date must match format mm/yy!")
        } else {
            console.log(putData(this.state.paymentInfo, this.state.paymentInfo._links.self.href))
            this.props.history.push('/profile')
        }
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Payment Information'}/>
                <Card className={'m-2'}>
                    <Form>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Card Number</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter your card number.'}
                                              value={this.state.paymentInfo.cardNum}
                                              disabled={true}/>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Card Type</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter your card type.'}
                                              value={this.state.paymentInfo.cardType}
                                              onChange={e => this.setState({ paymentInfo: {
                                                      ...this.state.paymentInfo,
                                                      cardType: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Expiration Date (mm/yy)</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'mm/yy'}
                                              value={this.state.paymentInfo.expDate}
                                              onChange={e => this.setState({ paymentInfo: {
                                                      ...this.state.paymentInfo,
                                                      expDate: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <Button variant={'success'} onClick={this.handleSubmitPayment}>Submit Payment Information</Button>
                        <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditPaymentInfoComponent