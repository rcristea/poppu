import {Component} from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap'

import 'react-bootstrap/'

export class AutoCard extends Component {
  render() {
    return (
      <Container className={'m-2 p-2 border-primary'}>
        <Card className={'p-2 border-primary'}>
          <Card.Title className={'m-2 p-2'}>
            <h2>{this.props.component_title}</h2>
          </Card.Title>
          <Card.Body>
            {Object.entries(this.props.component_data).map(item => {
              return (
                <Row className={'my-2'}>
                  <Col md={2} style={{'textTransform': 'capitalize'}}>
                    <strong>{item[0].replaceAll('_', ' ')}</strong>
                  </Col>
                  <Col md={8}>
                    {item[1]}
                  </Col>
                </Row>
              )
            })}
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default AutoCard