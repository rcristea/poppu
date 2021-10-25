import {Component} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {FormAttribute} from "./Utils.component";

export class EditAddressComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitAddress = this.handleSubmitAddress.bind(this)
    }

    handleBack() {
        this.props.history.push('/profile')
    }

    handleSubmitAddress() {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <div className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Address'}/>
                <Card className={'m-2'}>
                    <Form>
                        <FormAttribute attCtrl={'city'}
                                       attLabel={'City'}
                                       attType={'text'}
                                       attPlaceholder={'Enter the city you live in.'}
                                       attVal={this.state.address.city}/>
                        <FormAttribute attCtrl={'street'}
                                       attLabel={'City'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your street address.'}
                                       attVal={this.state.address.street}/>
                        <FormAttribute attCtrl={'zipCode'}
                                       attLabel={'Zip Code'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your zipcode!'}
                                       attVal={this.state.address.zipCode}/>
                        <Container>
                            <Button type={'submit'} variant={'success'} onSubmit={this.handleSubmitAddress}>Submit Address</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default EditAddressComponent