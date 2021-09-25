import { Component } from 'react'
import {Card, Col, Row} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'

export class AutoCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row className={'my-2'}>
                <Card>
                    <Card.Title>{this.props.card_title}</Card.Title>
                    <Card.Body>
                        {Object.entries(this.props.display_data).map(item => {
                            return (
                                <Row>
                                    <Col md={2} style={'text-transform: capitalize;'}>
                                        {item[0].replaceAll('_', ' ')}
                                    </Col>
                                    <Col md={'auto'}>
                                        {item[1]}
                                    </Col>
                                </Row>
                            )
                        })}
                    </Card.Body>
                </Card>
            </Row>
        )
    }
}

export default AutoCard