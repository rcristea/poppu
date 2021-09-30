import { Component } from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";

import 'react-bootstrap/'
import 'bootstrap/dist/css/vapor.css'
import AutoCard from "../../utils/AutoCard.component";
import AutoList from "../../utils/AutoList.component";

export class ProfileComponent extends Component {
    profile_name = "Abhinav Singh"
    profile_data = {
        "first_name": "Abhinav",
        "last_name": "Singh",
        "user_ID": 2230832,
        "Status": "Registered and verified",
        "E-mail": "example@example.com",
        "Address": "3333 Street Street",
        "City": "Marietta GA",
        "ZIP": "33333"
    }
    payment_info = [
        {
            "card_name": "MasterCard",
            "card_type": "Credit",
            "card_number": 20839843,
            "expires": "10/02/2029"
        },
        {
            "card_name": "Visa",
            "card_type": "Credit",
            "card_number": 30931839,
            "expires": "10/02/2031"
        },
        {
            "card_name": "MasterCard",
            "card_type": "Credit",
            "card_number": 2083984,
            "expires": "01/20/3030"
        }
    ]

    render() {
        return (
            <Container className={'my-2'}>
                <Row>
                    <AutoCard component_title={this.profile_name} component_data={this.profile_data} />
                </Row>
                <Row>
                    <AutoList component_title={"Payment Info"} component_data={this.payment_info} />
                </Row>
                <Row className={"mx-3"}>
                    <Col md={4}><Button variant={"warning"} href={"/profile/edit"}>Edit Profile</Button></Col>
                    <Col md={4}><Button variant={"success"} href={"/"}>Back to Home Screen</Button></Col>
                    <Col md={4}><Button variant={"danger"}>Delete Account</Button></Col>
                </Row>
            </Container>
        )
    }
}

export default ProfileComponent