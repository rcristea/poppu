import { Component } from 'react'
import {Button, Card, Col, Container, Form, FormSelect, Row} from "react-bootstrap";

export class SelectSeatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seats: [
                {
                    "rowName": "A",
                    "cols": [
                        {"colName": 1, "reserved": true},
                        {"colName": 2, "reserved": true},
                        {"colName": 3, "reserved": true},
                        {"colName": 4, "reserved": true},
                        {"colName": 5, "reserved": true},
                        {"colName": 6, "reserved": true},
                    ]
                },
                {
                    "rowName": "B",
                    "cols": [
                        {"colName": 1, "reserved": true},
                        {"colName": 2, "reserved": true},
                        {"colName": 3, "reserved": false},
                        {"colName": 4, "reserved": false},
                        {"colName": 5, "reserved": false},
                        {"colName": 6, "reserved": false},
                    ]
                },
                {
                    "rowName": "C",
                    "cols": [
                        {"colName": 1, "reserved": true},
                        {"colName": 2, "reserved": true},
                        {"colName": 3, "reserved": false},
                        {"colName": 4, "reserved": false},
                        {"colName": 5, "reserved": false},
                        {"colName": 6, "reserved": false},
                    ]
                },
                {
                    "rowName": "D",
                    "cols": [
                        {"colName": 1, "reserved": true},
                        {"colName": 2, "reserved": true},
                        {"colName": 3, "reserved": false},
                        {"colName": 4, "reserved": false},
                        {"colName": 5, "reserved": false},
                        {"colName": 6, "reserved": false},
                    ]
                },
                {
                    "rowName": "E",
                    "cols": [
                        {"colName": 1, "reserved": true},
                        {"colName": 2, "reserved": true},
                        {"colName": 3, "reserved": false},
                        {"colName": 4, "reserved": true},
                        {"colName": 5, "reserved": false},
                        {"colName": 6, "reserved": true},
                    ]
                },
                {
                    "rowName": "F",
                    "cols": [
                        {"colName": 1, "reserved": true},
                        {"colName": 2, "reserved": true},
                        {"colName": 3, "reserved": false},
                        {"colName": 4, "reserved": false},
                        {"colName": 5, "reserved": false},
                        {"colName": 6, "reserved": true},
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <Container className='my-3'>
                <Row>
                    <h1>Seat Selection</h1>
                </Row>
                <Row>
                    <Form>
                        <Card className='my-3'>
                            <Card.Body>
                                <Form.Label>
                                    <h2>Select Your Seats:</h2>
                                </Form.Label>
                                {
                                    this.state.seats.map(row => {
                                        return (
                                            <Row className='my-3'>
                                                <Col>Row {row.rowName}</Col>
                                                {
                                                    row.cols.map(col => {
                                                        if (col.reserved) {
                                                            return (
                                                                <Col className='bg-warning'>
                                                                    Reserved
                                                                </Col>
                                                            )
                                                        } else {
                                                            return (
                                                                <Col >
                                                                    <Form.Check type='checkbox' name='seats' label={row.rowName + col.colName} disabled={col.reserved}/>
                                                                </Col>
                                                            )
                                                        }
                                                    })
                                                }
                                            </Row>
                                        )
                                    })
                                }
                            </Card.Body>
                        </Card>
                        <Card className='my-3'>
                            <Card.Body>
                                <Button className='mx-1' variant='primary' type="submit" >Select Seats</Button>
                                <Button className='mx-1' variant="danger">Cancel</Button>
                            </Card.Body>
                        </Card>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default SelectSeatComponent