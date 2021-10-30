import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'

import 'react-bootstrap/'
import {TitleComponent} from "./Utils.component";
import {putData} from "./methods";
import bcrypt from "bcryptjs";

export class EditPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      salt: '$2a$10$O1RbZIPCQCLr522HZUP51/'
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
    let oldEncrypted = bcrypt.hashSync(this.state.oldPassword, this.state.salt)
    if (oldEncrypted !== this.state.user.password) {
      alert("Please enter your correct password!")
    } else if (this.state.newPassword.trim() === '') {
      alert("Please enter a new password!")
    } else if (this.state.confirmPassword.trim() === '') {
      alert("Please confirm your new password!")
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      alert("Please make sure that both the new and confirm passwords match!")
    } else {
      let newUser = this.state.user
      newUser.password = bcrypt.hashSync(this.state.newPassword, this.state.salt)
      putData(this.state.user, this.state.user._links.self.href)
      this.props.history.push('/profile')
      window.location.reload();
    }
  }

  render() {
    return (
      <Container className={'my-2 bg-light'}>
        <TitleComponent compTitle={'Edit Password'}/>
        <Card className={'m-2'}>
          <Form>
            <div>
              <Form.Group>
                <Form.Label><strong>Old Password</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter your old password!'}
                              value={this.state.oldPassword}
                              onChange={e => this.setState({...this.state, oldPassword: e.target.value})}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>New Password</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter your new password!'}
                              value={this.state.newPassword}
                              onChange={e => this.setState({...this.state, newPassword: e.target.value})}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>Confirm Password</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Confirm your new password!'}
                              value={this.state.confirmPassword}
                              onChange={e => this.setState({...this.state, confirmPassword: e.target.value})}/>
              </Form.Group>
            </div>
            <Container className={'m-2'}>
              <Button variant={'success'} onClick={this.handleSubmitPassword}>Submit New Password</Button>
              <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
            </Container>
          </Form>
        </Card>
      </Container>
    )
  }
}

export default EditPasswordComponent