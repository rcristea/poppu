import { Component } from 'react'
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {DisplayAttribute, FormAttribute, TitleComponent} from "./Utils.component";

export class EditProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user
        }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitProfile = this.handleSubmitProfile.bind(this)
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
        this.props.history.push('/profile')
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
                                        <Form.Check
                                            type={'radio'}
                                            id={`subscribed`}
                                        />
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