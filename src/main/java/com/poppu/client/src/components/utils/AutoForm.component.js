import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'

import 'react-bootstrap/'

export class AutoCompleteForm extends Component {
  render() {
    return (
      <Container className={'m-3 p-3'}>
        <Card className={'p-2'}>
          <Card.Title className={'m-2 p-2'}>
            <h2>{this.props.component_title}</h2>
          </Card.Title>
          <Card.Body>
            <Form className={'my-2 p-2'}>
              {this.props.component_data.map(item => {
                return (
                  <Form.Group className={'my-2 p-2'} controlId={item.control_id}>
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control type={item.type} placeholder={item.placeholder} value={item.value}/>
                  </Form.Group>
                )
              })}
              <Button type={'submit'} variant={'success'}
                      href={this.props.submit_link}>{this.props.submit_message}</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}


export default AutoCompleteForm