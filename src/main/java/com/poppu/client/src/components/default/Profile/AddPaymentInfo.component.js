import 'bootstrap/dist/css/vapor.css'
import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import AutoCompleteForm from '../../utils/AutoForm.component'

export class AddPaymentComponent extends Component {
    component_title = 'Add Showtime'
    component_data = [
        {
            'control_id': 'paymentMethod',
            'label': 'Payment Name',
            'type': 'text',
            'placeholder': 'Enter Payment Name',
        },
        {
            'control_id': 'number',
            'label': 'Payment Number',
            'type': 'number',
            'placeholder': 'Enter Payment Number',
        },
        {
            'control_id': 'type',
            'label': 'Payment Type',
            'type': 'text',
            'placeholder': 'Enter Payment Type',
        },
        {
            'control_id': 'expirationDate',
            'label': 'Expiration Date',
            'type': 'date',
            'placeholder': 'Enter Expiration Date',
        }
    ]
    submit_message = 'Add Payment Method'
    submit_lint = '/profile'

    render() {
        return (
            <Container className={'my-2'}>
                <Row>
                    <AutoCompleteForm
                        component_title={this.component_title}
                        component_data={this.component_data}
                        submit_message={this.submit_message}
                        submit_link={this.submit_lint}
                    />
                </Row>
                <Row>
                    <Col md={4}><Button variant={'danger'} href={'/profile'}>Cancel</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default AddPaymentComponent