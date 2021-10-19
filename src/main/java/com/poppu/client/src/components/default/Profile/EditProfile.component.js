import { Component } from 'react'
import {Button, Card, Col, Container, Form, FormSelect, Row} from 'react-bootstrap'

import 'react-bootstrap/'

export class EditProfileComponent extends Component {
    render() {
        return (
            <Container className='my-3'>
                <Row>
                    <h1>Edit Profile</h1>
                </Row>
                <Row>
                    <Form>
                        <Card className='my-3'>
                            <Card.Body>1
                                <Form.Label>
                                    <h2>Enter Your Information:</h2>
                                </Form.Label>
                                <Row className='my-3'>
                                    <Col md={2}><h5>Name</h5></Col>
                                    <Col><Form.Control type='text' placeholder='First Name'/></Col>
                                    <Col><Form.Control type='text' placeholder='Last Name'/></Col>
                                </Row>
                                <Row className='my-3'>
                                    <Col md={2}><h5>Contact</h5></Col>
                                    <Col md={3}><Form.Control type='number' placeholder='Phone Number'/></Col>
                                    <Col md={7}><Form.Control type='email' placeholder='E-mail'/></Col>
                                </Row>
                                <Row className='my-3'>
                                    <Col md={2}><h5>Address</h5>
                                    </Col><Col>
                                    <Form.Control className='my-3' type='text' placeholder='Street'/></Col>
                                </Row>
                                <Row className='my-3'>
                                    <Col md={2}></Col>
                                    <Col><Form.Control type='text' placeholder='Street Address'/></Col>
                                    <Col md={2}><Form.Control type='text' placeholder='City'/></Col>
                                    <Col md={2}>
                                        <FormSelect>
                                            <option value='AL'>Alabama</option>
                                            <option value='AK'>Alaska</option>
                                            <option value='AZ'>Arizona</option>
                                            <option value='AR'>Arkansas</option>
                                            <option value='CA'>California</option>
                                            <option value='CO'>Colorado</option>
                                            <option value='CT'>Connecticut</option>
                                            <option value='DE'>Delaware</option>
                                            <option value='DC'>District Of Columbia</option>
                                            <option value='FL'>Florida</option>
                                            <option value='GA'>Georgia</option>
                                            <option value='HI'>Hawaii</option>
                                            <option value='ID'>Idaho</option>
                                            <option value='IL'>Illinois</option>
                                            <option value='IN'>Indiana</option>
                                            <option value='IA'>Iowa</option>
                                            <option value='KS'>Kansas</option>
                                            <option value='KY'>Kentucky</option>
                                            <option value='LA'>Louisiana</option>
                                            <option value='ME'>Maine</option>
                                            <option value='MD'>Maryland</option>
                                            <option value='MA'>Massachusetts</option>
                                            <option value='MI'>Michigan</option>
                                            <option value='MN'>Minnesota</option>
                                            <option value='MS'>Mississippi</option>
                                            <option value='MO'>Missouri</option>
                                            <option value='MT'>Montana</option>
                                            <option value='NE'>Nebraska</option>
                                            <option value='NV'>Nevada</option>
                                            <option value='NH'>New Hampshire</option>
                                            <option value='NJ'>New Jersey</option>
                                            <option value='NM'>New Mexico</option>
                                            <option value='NY'>New York</option>
                                            <option value='NC'>North Carolina</option>
                                            <option value='ND'>North Dakota</option>
                                            <option value='OH'>Ohio</option>
                                            <option value='OK'>Oklahoma</option>
                                            <option value='OR'>Oregon</option>
                                            <option value='PA'>Pennsylvania</option>
                                            <option value='RI'>Rhode Island</option>
                                            <option value='SC'>South Carolina</option>
                                            <option value='SD'>South Dakota</option>
                                            <option value='TN'>Tennessee</option>
                                            <option value='TX'>Texas</option>
                                            <option value='UT'>Utah</option>
                                            <option value='VT'>Vermont</option>
                                            <option value='VA'>Virginia</option>
                                            <option value='WA'>Washington</option>
                                            <option value='WV'>West Virginia</option>
                                            <option value='WI'>Wisconsin</option>
                                            <option value='WY'>Wyoming</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md={2}><Form.Control type='number' placeholder='ZIP'/></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className='my-3'>
                            <Card.Body>
                                <Button className='mx-1' variant='primary' type='submit' href={'/profile'}>Update Profile</Button>
                            </Card.Body>
                        </Card>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default EditProfileComponent