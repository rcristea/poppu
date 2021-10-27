import {Component} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./Utils.component";
import {FormAttribute} from "./Utils.component";
import {putRequest} from "./methods";

export class EditAddressComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.location.state.address
        }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitAddress = this.handleSubmitAddress.bind(this)
    }

    componentDidMount() {
        if (sessionStorage.getItem('role') !== 'user') {
            sessionStorage.setItem('alert', 'User does not have correct privileges.')
            this.props.history.push('/')
        }
    }

    handleBack() {
        this.props.history.push('/profile')
    }

    handleSubmitAddress() {
        if(this.state.address.city.trim().length === 0) {
            alert("City field is empty")
        } else if(this.state.address.street.trim().length === 0) {
            alert("City field is empty")
        } else if(this.state.address.zipCode.trim().length !== 6) {
            alert("A zip code is supposed to have 6 digits")
        } else if(this.state.address.trim().length === 0) {
            alert("City field is empty")
        } else {
            console.log(putRequest('http://localhost:8080/addresses/'.concat(this.state.address.addressId), this.state.address))
            this.props.history.push('/profile')
        }
    }

    render() {
        return (
            <div className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Address'}/>
                <Card className={'m-2'}>
                    <Form onSubmit={this.handleSubmitAddress}>
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
                            <Button type={'submit'} variant={'success'}>Submit Address</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default EditAddressComponent