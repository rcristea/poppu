import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {FormAttribute} from "./Utils.component";

export class EditPaymentInfoComponent extends Comment {
    render() {
        return (
            <Container 'm-2 p-2 border-primary'>
                <TitleComponent compTitle={'Edit Address'}/>
                <Card 'm-2 p-2 border-primary'>
                    <Form>
                        <FormAttribute attCtrl={'cardNum'}
                                       attLabel={'Card Number'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your card number.'}
                                       value={this.props.paymentInfo.cardNum}/>
                        <FormAttribute attCtrl={'cardType'}
                                       attLabel={'Card Type'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your street address.'}
                                       value={this.props.paymentInfo.cardType}/>
                        <FormAttribute attCtrl={'expDate'}
                                       attLabel={'Card Expiration Date'}
                                       attType={'date'}
                                       attPlaceholder={'Enter your card\'s expiration date'}
                                       value={this.props.paymentInfo.expDate}/>
                        <Button type={'submit'} variant={'success'}>Submit Address</Button>
                        <Button type={'submit'} variant={'warning'}>Go Back</Button>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditPaymentInfoComponent