import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {FormAttribute} from "./Utils.component";

export class EditPaymentInfoComponent extends Comment {
    constructor(props) {
        super(props);
        this.state = this.props.location.state
    }



    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Address'}/>
                <Card className={'m-2'}>
                    <Form>
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
                        <Button type={'submit'} variant={'success'}>Submit Address</Button>
                        <Button type={'submit'} variant={'warning'}>Go Back</Button>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditPaymentInfoComponent