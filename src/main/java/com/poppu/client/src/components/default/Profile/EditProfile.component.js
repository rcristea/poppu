import { Component } from 'react'
import {Button, Card, Col, Container, Form, FormSelect, Row} from 'react-bootstrap'

import 'react-bootstrap/'
import {DisplayAttribute, FormAttribute, TitleComponent} from "./Utils.component";

export class EditProfileComponent extends Component {
    componentDidMount() {
        if (sessionStorage.getItem('role') !== 'user') {
            sessionStorage.setItem('alert', 'User does not have correct privileges.')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Container className={'m-2 p-2'}>
                <TitleComponent compTitle={'Edit Profile Information'}/>
                <Card>
                    <Form>
                        <FormAttribute attCtrl={'firstName'}
                                       attLabel={'First Name'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your first name.'}
                                       value={this.props.user.firstName}/>
                        <FormAttribute attCtrl={'lastName'}
                                       attLabel={'Last Name'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your last name.'}
                                       value={this.props.user.lastName}/>
                        <DisplayAttribute attName={'Email'} attVal={this.props.user.email}/>
                        <FormAttribute attCtrl={'password'}
                                       attLabel={'Password'}
                                       attType={'password'}
                                       attPlaceholder={'Enter a password.'}
                                       value={this.props.user.password}/>
                        <FormAttribute attCtrl={'isSubscribed'}
                                       attLabel={'Subscribe for Promotions'}
                                       attType={'checkbox'}
                                       attPlaceholder={'Would you like to subscribe.'}
                                       value={this.props.user.firstName}/>
                        <DisplayAttribute attName={'Status'} attVal={this.props.user.status}/>
                        <Button type={'submit'} variant={'success'}>Submit Address</Button>
                        <Button type={'submit'} variant={'warning'}>Go Back</Button>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditProfileComponent