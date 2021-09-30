import { Component } from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";

import 'react-bootstrap/'
import 'bootstrap/dist/css/vapor.css'

export class AutoList extends Component {
    render() {
        return (
            <Container className={'m-2 p-2'}>
                <Card className={'m-2 p-2'}>
                    <Row>
                        <h2>{this.props.component_title}</h2>
                    </Row>
                    <Row>
                        {this.props.component_data.map(list_item => {
                            return (
                                <Card className={'m-2 p-2 border-primary'}>
                                    <Card.Body>
                                        {Object.entries(list_item).map(item => {
                                            return (
                                                <Row className={'my-2'}>
                                                    <Col md={2} style={{'text-transform': 'capitalize'}}>
                                                        <strong>{item[0].replaceAll('_', ' ')}</strong>
                                                    </Col>
                                                    <Col md={'auto'}>
                                                        {item[1]}
                                                    </Col>
                                                </Row>
                                            )
                                        })}
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Row>
                </Card>
            </Container>
        )
    }
}

export default AutoList