import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {TitleComponent} from "../../../default/Profile/Utils.component";
import ActorComponent from "./ActorComponent.component";
import {postData} from "../../../default/Profile/methods";

export class AddActorComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movieID: '',
            firstName: '',
            lastName: '',
            role: '',
        }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitActor = this.handleSubmitActor.bind(this)
        this.handleReload = this.handleReload.bind(this)
    }

    handleBack() {
        this.props.history.push('/admin')
    }

    handleReload() {
        window.location.reload()
    }

    async handleSubmitActor() {
        if (this.state.firstName.trim() === '') {
            alert('Empty first name. Please fill it out.')
        } else if (this.state.lastName.trim() === '') {
            alert('Empty last name. Please fill it out.')
        } else {
            console.log(this.state)
            await this.updateDB()
        }
    }

    async updateDB() {
        let res = await postData(this.state, 'http://localhost:8080/actors/')
        console.log(res)
    }

    componentDidMount() {
        if (sessionStorage.getItem('role') !== 'admin') {
            sessionStorage.setItem('alert', 'User does not have correct privileges.')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Add Actor'}/>
                <Card className={'m-2'}>
                    <Form>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>First Name</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the first name of this actor.'}
                                              value={this.state.firstName}
                                              onChange={e => this.setState({
                                                  ...this.state, firstName: e.target.value
                                              })}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><strong>Last Name</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the last name of this actor.'}
                                              value={this.state.lastName}
                                              onChange={e => this.setState({
                                                  ...this.state, lastName: e.target.value
                                              })}/>
                            </Form.Group>
                        </div>
                        <Container className={'m-2'}>
                            <Button variant={'success'} onClick={this.handleSubmitActor}>Submit Actor</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                            <Button variant={'success'} onClick={this.handleReload}>Refresh Page</Button>
                        </Container>
                    </Form>
                </Card>
                <ActorComponent />
            </Container>
        )
    }
}

export default AddActorComponent