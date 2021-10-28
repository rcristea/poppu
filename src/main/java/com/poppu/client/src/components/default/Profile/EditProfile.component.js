import { Component } from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {DisplayAttribute, TitleComponent} from "./Utils.component";
import {putData} from "./methods";

export class EditProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user
        }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitProfile = this.handleSubmitProfile.bind(this)

        this.subscribe = this.subscribe.bind(this)
        this.unSubscribe = this.unSubscribe.bind(this)
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

    handleSubmitProfile() {
        if(this.state.user.firstName.trim() === '') {
            alert("Please enter your first name!")
        } else if (this.state.user.lastName.trim() === '') {
            alert("Please enter your last name!")
        } else if (isNaN(this.state.user.phoneNum)) {
            alert("Please enter a number for a phone number!")
        } else {
           console.log(putData(this.state.user, this.state.user._links.self.href))
            this.props.history.push('/profile')
        }
    }

    subscribe() {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                isSubscribed: true
            }
        })
        alert("You are subscribed to promotions!")
    }

    unSubscribe() {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                isSubscribed: false
            }
        })
        alert("You are unsubscribed to promotions!")
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Profile Information'}/>
                <Card className={'m-2'}>
                    <Form>
                        <DisplayAttribute attName={'Email'} attVal={this.state.user.email}/>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>First Name</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter your first name.'}
                                              value={this.state.user.firstName}
                                              onChange={e => this.setState({ user: {
                                                      ...this.state.user,
                                                      firstName: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Last Name</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter your last name.'}
                                              value={this.state.user.lastName}
                                              onChange={e => this.setState({ user: {
                                                      ...this.state.user,
                                                      lastName: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Phone Number</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'nnnnnnnnnn'}
                                              value={this.state.user.phoneNum}
                                              onChange={e => this.setState({ user: {
                                                      ...this.state.user,
                                                      phoneNum: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <Container className={'m-2'}>
                            <Form.Group>
                                <Row>
                                    <Col md={2}>
                                        <strong>Subscribed: </strong>
                                    </Col>
                                    <Col>
                                        <Button variant={'success'} onClick={this.subscribe}>Subscribe</Button>
                                        <Button variant={'danger'} onClick={this.unSubscribe}>Unsubscribe</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Container>
                        <Container className={'m-2'}>
                            <Button type={'submit'} variant={'success'} onClick={this.handleSubmitProfile}>Submit Profile</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditProfileComponent