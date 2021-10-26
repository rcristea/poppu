import { Component } from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'

import 'react-bootstrap/'
import {FormAttribute, TitleComponent} from "./Utils.component";

export class EditPasswordComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state)
        this.state = {
            user: this.props.location.state.user
        }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this)
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

    handleSubmitPassword() {
        this.props.history.push('/profile')
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Password'}/>
                <Card className={'m-2'}>
                    <Form onSubmit={this.handleSubmitPassword}>
                        <FormAttribute attCtrl={'currentPassword'}
                                       attLabel={'Current Password'}
                                       attType={'text'}
                                       attPlaceholder={'Enter your current password.'}
                                       attVal={this.state.user.password}/>
                        <FormAttribute attCtrl={'currentPassword'}
                                       attLabel={'New Password'}
                                       attType={'password'}
                                       attPlaceholder={''}
                                       attVal={''}/>
                        <FormAttribute attCtrl={'currentPassword'}
                                       attLabel={'Confirm Password'}
                                       attType={'password'}
                                       attPlaceholder={''}
                                       attVal={''}/>
                        <Container className={'m-2'}>
                            <Button type={'submit'} variant={'success'}>Submit New Password</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </Container>
        )
    }
}

export default EditPasswordComponent