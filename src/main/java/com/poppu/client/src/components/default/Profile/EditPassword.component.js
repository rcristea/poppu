import { Component } from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'

import 'react-bootstrap/'
import {FormAttribute, TitleComponent} from "./Utils.component";
import {putRequest} from "./methods";

export class EditPasswordComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state)
        this.state = {
            user: this.props.location.state.user,
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
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
        if(this.state.oldPassword !== this.state.user.password) {
            alert("Please enter your correct password!")
        } else if(this.state.newPassword !== this.state.confirmPassword) {
            alert("Please make sure that both the new and confirm passwords match!")
        } else {
            console.log(putRequest('http://localhost:8080/users/'.concat(this.state.user.userId), this.state.user))
            this.props.history.push('/profile')
        }

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
                                       attVal={this.state.oldPassword}/>
                        <FormAttribute attCtrl={'currentPassword'}
                                       attLabel={'New Password'}
                                       attType={'text'}
                                       attPlaceholder={''}
                                       attVal={this.state.newPassword}/>
                        <FormAttribute attCtrl={'currentPassword'}
                                       attLabel={'Confirm Password'}
                                       attType={'text'}
                                       attPlaceholder={''}
                                       attVal={this.state.confirmPassword}/>
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