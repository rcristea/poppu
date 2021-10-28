import {Component} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./Utils.component";
import {putData} from "./methods";

export class EditAddressComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.location.state.address,
        }

        this.handleBack = this.handleBack.bind(this)
        this.handleSubmitAddress = this.handleSubmitAddress.bind(this)
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

    handleSubmitAddress() {
        if (this.state.address.city.trim() === '') {
            alert("City field is empty!")
        } else if (this.state.address.street.trim() === '') {
            alert("Street field is empty!")
        } else if (isNaN(this.state.address.zipCode)) {
            alert("A zip is supposed to be a number!")
        } else if (this.state.address.zipCode.trim().length !== 5) {
            alert("A zip code is supposed to have 5 digits")
        } else {
            console.log(putData(this.state.address, this.state.address._links.self.href))
            this.props.history.push('/profile')
            window.location.reload();
        }
    }

    render() {
        return (
            <div className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Edit Address'}/>
                <Card className={'m-2'}>
                    <Form>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>City</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the city you live in.'}
                                              value={this.state.address.city}
                                              onChange={e => this.setState({ address: {
                                                  ...this.state.address,
                                                      city: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Street</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter the street you live in.'}
                                              value={this.state.address.street}
                                              onChange={e => this.setState({ address: {
                                                      ...this.state.address,
                                                      street: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                <Form.Label><strong>Zip Code</strong></Form.Label>
                                <Form.Control type={'text'}
                                              placeholder={'Enter your Zip Code.'}
                                              value={this.state.address.zipCode}
                                              onChange={e => this.setState({ address: {
                                                      ...this.state.address,
                                                      zipCode: e.target.value
                                                  }})}/>
                            </Form.Group>
                        </div>
                        <Container>
                            <Button variant={'success'} onClick={this.handleSubmitAddress}>Submit Address</Button>
                            <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
                        </Container>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default EditAddressComponent