import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {FormAttribute} from "./Utils.component";
import {Component} from "react";

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
        this.props.history.push('/profile')
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
                                       attType={'date'}
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