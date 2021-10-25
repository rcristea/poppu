import { Component } from 'react'
import {Button, Card, Col, Container, Form, FormSelect, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {DisplayAttribute, FormAttribute, TitleComponent} from "./Utils.component";

export class EditProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state

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
                    <Form>
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
                        <FormAttribute attCtrl={'password'}
                                       attLabel={'Password'}
                                       attType={'password'}
                                       attPlaceholder={'Enter a password.'}
                                       attVal={this.state.user.password}/>
                        <FormAttribute attCtrl={'isSubscribed'}
                                       attLabel={'Subscribe for Promotions'}
                                       attType={'checkbox'}
                                       attPlaceholder={'Would you like to subscribe.'}
                                       attVal={this.state.user.firstName}/>
                        <DisplayAttribute attName={'Status'} attVal={this.state.user.status}/>
                        <Container className={'m-2'}>
                            <Button type={'submit'} variant={'success'} onSubmit={this.handleSubmitProfile}>Submit Profile</Button>
                            <Button type={'submit'} variant={'warning'} onSubmit={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditProfileComponent