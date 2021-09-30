import 'bootstrap/dist/css/vapor.css'
import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import AutoCompleteForm from '../../../utils/AutoForm.component'

export class AddMovie extends Component {
    component_title = 'Add Movie'
    component_data = [
        {
            'control_id': 'movieName',
            'label': 'Movie Name',
            'type': 'text',
            'placeholder': 'Enter movie name.',
        },
        {
            'control_id': 'movieDescription',
            'label': 'Movie Description',
            'type': 'text',
            'placeholder': 'Enter movie name.',
        },
        {
            'control_id': 'movieRating',
            'label': 'Movie Rating',
            'type': 'text',
            'placeholder': 'Enter movie rating.',
            'value': 'PG-13',
        },
        {
            'control_id': 'movieTrailerLink',
            'label': 'Movie Trailer Link',
            'type': 'text',
            'placeholder': 'Enter movie trailer link.',
        },
    ]
    submit_message = 'Add Movie'
    submit_lint = '/admin'
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
                    <Col md={4}><Button variant={'danger'} href={'/movies'}>Cancel</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default AddMovie