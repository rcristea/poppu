import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./Utils.component";
import {Component} from "react";
import {postData, putAssociation} from "./methods";

export class AddAddressComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.location.state.user,
      address: {
        city: '',
        street: '',
        zipCode: '',
      },
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitAddress = this.handleSubmitAddress.bind(this)
    this.updateDB = this.updateDB.bind(this)
  }

  handleBack() {
    this.props.history.push('/profile')
  }

  async handleSubmitAddress() {
    if (this.state.address.city.trim() === '') {
      alert("City field is empty!")
    } else if (this.state.address.street.trim() === '') {
      alert("Street field is empty!")
    } else if (isNaN(this.state.address.zipCode)) {
      alert("A zip is supposed to be a number!")
    } else if (this.state.address.zipCode.trim().length !== 5) {
      alert("A zip code is supposed to have 5 digits")
    } else {
      await this.updateDB()
      this.props.history.push('/profile')
      window.location.reload();
    }
  }

  async updateDB() {
    let addressJSON = await postData(this.state.address, 'http://localhost:8080/addresses')
    await putAssociation(addressJSON._links.self.href, this.state.user._links.address.href)
  }

  render() {
    return (
      <Container className={'my-2 bg-light'}>
        <TitleComponent compTitle={'Add User Address'}/>
        <Card className={'m-2'}>
          <Form>
            <div>
              <Form.Group>
                <Form.Label><strong>City</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter the city you live in.'}
                              value={this.state.address.city}
                              onChange={e => this.setState({
                                ...this.state, address: {
                                  ...this.state.address,
                                  city: e.target.value
                                }
                              })}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>Street</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter the street you live in.'}
                              value={this.state.address.street}
                              onChange={e => this.setState({
                                ...this.state, address: {
                                  ...this.state.address,
                                  street: e.target.value
                                }
                              })}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>Zip Code</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter your Zip Code.'}
                              value={this.state.address.zipCode}
                              onChange={e => this.setState({
                                ...this.state, address: {
                                  ...this.state.address,
                                  zipCode: e.target.value
                                }
                              })}/>
              </Form.Group>
            </div>
            <Container className={'m-2'}>
              <Button variant={'success'} onClick={this.handleSubmitAddress}>Submit Address Info</Button>
              <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
            </Container>
          </Form>
        </Card>
      </Container>
    )
  }
}

export default AddAddressComponent