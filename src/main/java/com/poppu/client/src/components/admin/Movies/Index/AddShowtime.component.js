import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import AutoCompleteForm from "../../../utils/AutoForm.component";

export class AddShowTime extends Component {
    component_title = "Add Showtime"
    component_data = [
        {
            "control_id": "movieID",
            "label": "Movie ID",
            "type": "number",
            "placeholder": "Enter movie ID.",
        },
        {
            "control_id": "movieDate",
            "label": "Show Date",
            "type": "date",
            "placeholder": "Enter movie date.",
        },
        {
            "control_id": "movieTime",
            "label": "Show Time",
            "type": "text",
            "placeholder": "Enter movie date.",
        },
    ]
    submit_message = "Add Showtime"
    submit_lint = "/admin"

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
                    <Col md={4}><Button variant={"danger"}>Cancel</Button></Col>
                </Row>
            </Container>
        );
    }
}

export default AddShowTime