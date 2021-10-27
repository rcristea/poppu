import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {FormAttribute} from "./Utils.component";
import {Component} from "react";
import {putRequest} from "./methods";

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

    handleOnChangePayment(e) {
        let paymentInfo = this.state.paymentInfo

    }

    handleSubmitPayment() {
        console.log(this.state.paymentInfo.cardType)
        if(this.state.paymentInfo.cardNum.trim().length === 0) {
            alert("Please enter a number for your payment card!")
        } else if(this.state.paymentInfo.cardType.length === 0) {
            alert("Please enter a number for your card type!")
        } else if(this.state.paymentInfo.expDate.trim().length === 0) {
            alert("Please enter a number for your card type!")
        } else {
            console.log(putRequest('http://localhost:8080/paymentinfos/'.concat(this.state.paymentInfo.payment_id), this.state.paymentInfo))
            this.props.history.push('/profile')
        }
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Payment Information'}/>
                <Card className={'m-2'}>
                    <Form onSubmit={this.handleSubmitPayment}>
                        <FormAttribute attCtrl={'cardNum'}
                                       attLabel={'Card Number'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your card number.'}
                                       attVal={this.state.paymentInfo.cardNum}/>
                        <FormAttribute attCtrl={'cardType'}
                                       attLabel={'Card Type'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your street address.'}
                                       attVal={this.state.paymentInfo.cardType}/>
                        <FormAttribute attCtrl={'expDate'}
                                       attLabel={'Card Expiration Date'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your card\'s expiration date'}
                                       attVal={this.state.paymentInfo.expDate}/>
                        <Button type={'submit'} variant={'success'}>Submit Payment Information</Button>
                        <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditPaymentInfoComponent