import { Component } from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {DisplayAttribute, FormAttribute, TitleComponent} from "./Utils.component";
import {putRequest} from "./methods";

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
        if(this.state.user.firstName.trim().length === 0) {
            alert("Please enter your first name!")
        } else if(this.state.user.lastName.trim().length === 0) {
            alert("Please enter your last name!")
        } else {
            console.log(putRequest('http://localhost:8080/users/'.concat(this.state.user.userId), this.state.user))
            this.props.history.push('/profile')
        }
    }

    subscribe() {
        this.state.user.isSubscribed = true
        alert("You are suscribed to promotions!")
    }

    unSubscribe() {
        this.state.user.isSubscribed = false
        alert("You are unsubscribed to promotions!")
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Profile Information'}/>
                <Card className={'m-2'}>
                    <Form onSubmit={this.handleSubmitProfile}>
                        <FormAttribute attCtrl={'firstName'}
                                       attLabel={'First Name'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your first name.'}
                                       attVal={this.state.user.firstName}/>
                        <FormAttribute attCtrl={'lastName'}
                                       attLabel={'Last Name'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your last name.'}
                                       attVal={this.state.user.lastName}/>
                        <DisplayAttribute attName={'Email'} attVal={this.state.user.email}/>
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
                            <Button type={'submit'} variant={'success'}>Submit Profile</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditProfileComponent