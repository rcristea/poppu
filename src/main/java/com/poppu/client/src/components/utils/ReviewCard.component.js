import 'react-bootstrap'
import {Component} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

export class ReviewCard extends Component {
    render() {
        return (
            <Container className={'my-0 p-3'} key={this.props.key}>
                <Card className={'p-3'} text={'white'} style={{width: '50rem', background: 'plum'}}>
                    <Row>
                        <Col>
                            <Card.Title className={'flex-grow-1 mb-3'}>{this.props.comment_title}</Card.Title>
                        </Col>
                        <Col className={'col-auto'}>{this.props.comment_rating}</Col>
                    </Row>
                    <Card.Text>{this.props.comment_description}</Card.Text>
                </Card>
            </Container>
        )
    }
}
export default ReviewCard