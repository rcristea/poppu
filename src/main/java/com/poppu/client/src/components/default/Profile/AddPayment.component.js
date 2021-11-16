import {Button, Card, Container, Form} from "react-bootstrap";
import {TitleComponent} from "./Utils.component";
import {Component} from "react";
import bcrypt from "bcryptjs";
import {postData, putAssociation} from "./methods";

export class AddPaymentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentInfo: {
        cardNum: '',
        cardType: '',
        expDate: '',
        user: this.props.location.state.user._links.self.href
      },
      user: this.props.location.state.user,
      address: {
        city: '',
        street: '',
        zipCode: '',
      },
      salt: '$2a$10$O1RbZIPCQCLr522HZUP51/'
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitPayment = this.handleSubmitPayment.bind(this)
    this.updateDB = this.updateDB.bind(this)
  }

  handleBack() {
    this.props.history.push('/profile')
  }

  async handleSubmitPayment() {
    if (this.state.paymentInfo.cardNum.trim() === '') {
      alert("Please enter a number for your payment card!")
    } else if (isNaN(this.state.paymentInfo.cardNum)) {
      alert("Please enter a number for your payment card!")
    } else if (this.state.paymentInfo.cardType.trim() === '') {
      alert("Please enter a your card type!")
    } else if (this.state.paymentInfo.expDate.trim().length === 0) {
      alert("Please enter an expiration date for your card!")
    } else if (!this.state.paymentInfo.expDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      alert("Expiration date must match format mm/yy!")
    } else if (this.state.address.city.trim() === '') {
      alert("City field is empty!")
    } else if (this.state.address.street.trim() === '') {
      alert("Street field is empty!")
    } else if (isNaN(this.state.address.zipCode)) {
      alert("A zip is supposed to be a number!")
    } else if (this.state.address.zipCode.trim().length !== 5) {
      alert("A zip code is supposed to have 5 digits")
    } else {
      let encryptedCardNum = bcrypt.hashSync(this.state.paymentInfo.cardNum, this.state.salt)
      this.setState({
        ...this.state,
        paymentInfo: {
          ...this.state.paymentInfo,
          cardNum: encryptedCardNum,
        }
      })
      await this.updateDB()
      this.props.history.push('/profile')
      window.location.reload();
    }
  }

  async updateDB() {

    let addressJSON = await postData(this.state.address, 'http://localhost:8080/addresses')
    let paymentInfoJSON = await postData(this.state.paymentInfo, 'http://localhost:8080/paymentinfos')
    await putAssociation(paymentInfoJSON._links.self.href, this.state.user._links.paymentCards.href)
    await putAssociation(addressJSON._links.self.href, paymentInfoJSON._links.address.href)

  }

  render() {
    return (
      <Container className={'my-2 bg-light'}>
        <TitleComponent compTitle={'Add Payment Information'}/>
        <Card className={'m-2'}>
          <Form>
            <div>
              <Form.Group>
                <Form.Label><strong>Card Number</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter your card number.'}
                              value={this.state.paymentInfo.cardNum}
                              onChange={e => this.setState({
                                ...this.state, paymentInfo: {
                                  ...this.state.paymentInfo,
                                  cardNum: e.target.value
                                }
                              })}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>Card Type</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter your card type.'}
                              value={this.state.paymentInfo.cardType}
                              onChange={e => this.setState({
                                ...this.state, paymentInfo: {
                                  ...this.state.paymentInfo,
                                  cardType: e.target.value
                                }
                              })}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>Expiration Date (mm/yy)</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'mm/yy'}
                              value={this.state.paymentInfo.expDate}
                              onChange={e => this.setState({
                                ...this.state, paymentInfo: {
                                  ...this.state.paymentInfo,
                                  expDate: e.target.value
                                }
                              })}/>
              </Form.Group>
            </div>
            <div>
              <Form.Group>
                <Form.Label><strong>City</strong></Form.Label>
                <Form.Control type={'text'}
                              placeholder={'Enter the city you live in.'}
                              value={this.state.paymentInfo.city}
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
              <Button variant={'success'} onClick={this.handleSubmitPayment}>Submit Payment Info</Button>
              <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
            </Container>
          </Form>
        </Card>
      </Container>
    )
  }
}

export default AddPaymentComponent