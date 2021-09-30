import 'bootstrap/dist/css/vapor.css'
import 'react-bootstrap/'
import {Component} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import AutoCard from "../../../utils/AutoCard.component";
import AutoList from "../../../utils/AutoList.component";

export class ViewMovie extends Component {
    movie_title = "SPIDER-MAN: INTO THE SPIDER-VERSE 2"
    movie_data = {
        'movie_id': 12,
        'movie_name': 'SPIDER-MAN: INTO THE SPIDER-VERSE 2',
        'movie_description': 'The untitled Spider-Man: Into the Spider-Verse sequel is an upcoming American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man, produced by Columbia Pictures and Sony Pictures Animation in association with Marvel, and distributed by Sony Pictures',
        'movie_rating': 9.7,
        'movie_trailer_link': 'HsX8pVqp_gg',
    }
    showtime_data = [
        {
            "show_date": "10/02/2021",
            "show_time": "4:30 pm"
        },
        {
            "show_date": "10/03/2021",
            "show_time": "4:30 pm"
        },
        {
            "show_date": "10/04/2021",
            "show_time": "4:30 pm"
        },
        {
            "show_date": "10/05/2021",
            "show_time": "4:30 pm"
        },
        {
            "show_date": "10/05/2021",
            "show_time": "6:00 pm"
        },
    ]

    render() {
        return (
            <Container className={'my-2'}>
                <Row>
                    <AutoCard component_title={this.movie_title} component_data={this.movie_data} />
                </Row>
                <Row>
                    <AutoList component_title={"Show Times"} component_data={this.showtime_data} />
                </Row>
                <Row className={"mx-3"}>
                    <Col md={4}><Button variant={"warning"}>Edit Movie</Button></Col>
                    <Col md={4}><Button variant={"success"} href={"/movies"}>Back to Movies</Button></Col>
                    <Col md={4}><Button variant={"danger"} href={"/movies"}>Delete Movie</Button></Col>
                </Row>
            </Container>
        )
    }
}