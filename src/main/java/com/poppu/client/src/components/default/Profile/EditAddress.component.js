import {Component} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./ViewProfile.component";
import {FormAttribute} from "./Utils.component";

export class EditAddressComponent extends Component {
    render() {
        return (
            <Container 'm-2 p-2 border-primary'>
                <TitleComponent compTitle={'Edit Address'}/>
                <Card 'm-2 p-2 border-primary'>
                    <Form>
                        <FormAttribute attCtrl={'city'}
                                       attLabel={'City'}
                                       attType={'text'}
                                       attPlaceholder={'Enter the city you live in.'}
                                       value={this.props.address.city}/>
                        <FormAttribute attCtrl={'street'}
                                       attLabel={'City'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your street address.'}
                                       value={this.props.address.street}/>
                        <FormAttribute attCtrl={'zipCode'}
                                       attLabel={'Zip Code'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your zipcode!'}
                                       value={this.props.address.zipCode}/>
                        <Button type={'submit'} variant={'success'}>Submit Address</Button>
                        <Button type={'submit'} variant={'warning'}>Go Back</Button>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditAddressComponent