import {Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {TitleComponent} from "../Profile/Utils.component";
import {Input} from "reactstrap";


export class SearchResultsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            rating: 'N/A',
            category: 'N/A',
            movies: [],
            filterHelpText: '',
        }

        this.getMovies = this.getMovies.bind(this)
        this.queryDB = this.queryDB.bind(this)
        this.renderMovies = this.renderMovies.bind(this)
    }

    async getMovies() {
        let query = 'http://localhost:8080/movies/search'
        if((this.state.rating !== 'N/A') && (this.state.category !== 'N/A')) {
            query = query + '/findAllByCategoryAndRating' + '?category=' + this.state.category + '?rating=' + this.state.rating
            this.setState({
                ...this.state,
                filterHelpText: 'Filtering by Category and Rating'
            })
        } else if(this.state.category !== 'N/A') {
            query = query + '/findAllByCategory' + '?category=' + this.state.category
            this.setState({
                ...this.state,
                filterHelpText: 'Filtering by Category ' + this.state.category
            })
        } else if(this.state.rating != 'N/A') {
            query = query + '/findAllByRating' + '?rating=' + this.state.rating
            this.setState({
                ...this.state,
                filterHelpText: 'Filtering by Rating ' + this.state.rating
            })
        } else {
            this.setState({
                ...this.state,
                filterHelpText: 'No Filters Applied'
            })
            query = 'http://localhost:8080/movies'
        }
        console.log(query)
        let MoviesJSON = await this.queryDB(query)
        let movies = MoviesJSON._embedded.movies
        console.log(movies)
        this.setState({
            ...this.state,
            movies: movies
        })
    }

    renderMovies() {
        if (this.state.movies.length === 0) {
            return (
                <Row className={'m-2 bg-danger bg-opacity-25'}>
                    <h2>No movie came up!</h2>
                </Row>
            )
        } else {
            return (
                <Row className={'m-2 bg-info bg-opacity-10'}>
                    <Row className={'m-2 bg-opacity-25'}>
                        <Col>

                        </Col>
                        <Col>
                            <h4><strong>Title</strong></h4>
                        </Col>
                        <Col>
                            <h4>Date Released</h4>
                        </Col>
                        <Col>
                            <h4>Synopsis</h4>
                        </Col>
                        <Col>
                            <h4>Category</h4>
                        </Col>
                        <Col>
                            <h4>Rating</h4>
                        </Col>
                    </Row>
                    {this.state.movies.map(m => {
                        let render = false
                        let showingText = ''
                        if (m.showing) {
                            showingText = 'Now Showing'
                        } else {
                            showingText = 'Coming Soon'
                        }
                        if(this.state.searchTerm.trim() !== '') {
                            if(m.title.toLowerCase().includes(this.state.searchTerm.toLowerCase().trim())) {
                                render = true
                            } else {
                                render = false
                            }
                        } else {
                            render = true
                        }

                        if(render) {
                            return (
                                <Row className={'m-2 bg-opacity-25'}>
                                    <Col>
                                        <Card.Img variant="top"
                                                  src={`${process.env.PUBLIC_URL}/${m.trailerPhoto}`}/>
                                        <div>
                                            <h4>{showingText}</h4>
                                        </div>
                                    </Col>
                                    <Col>
                                        <strong><h3>{m.title}</h3></strong>
                                    </Col>
                                    <Col>
                                        <Col>
                                            {m.date}
                                        </Col>
                                        <Col>
                                            {m.duration}
                                        </Col>
                                    </Col>
                                    <Col>
                                        {m.synopsis}
                                    </Col>
                                    <Col >
                                        <h3>{m.category}</h3>
                                    </Col>
                                    <Col>
                                        <h3>{m.rating}</h3>
                                    </Col>
                                    <div>
                                        <Button disabled={!m.showing}>✎ Book Tickets</Button>
                                    </div>
                                    <div>
                                        <Button variant={"success"} onClick={e => {this.props.history.push('/movies/view/' + m.movieId)}}>View Movie</Button>
                                    </div>
                                </Row>
                            )
                        }
                    })}
                </Row>
            )
        }
    }

    async queryDB(query) {
        return new Promise(function (resolve, reject) {
            fetch(query, {
                method: 'GET',
            }).then(response => {
                response.json().then(json => {
                    resolve(json)
                }).catch(error => {
                    reject(error)
                })
            }).catch(error => {
                reject(error)
            })
        })
    }

    render() {
        return (
            <Container className={'my-2 bg-light'}>
                <TitleComponent compTitle={'Search Movies'}/>
                <Row className={'m-2'}>
                    <Form.Label><strong><strong><h2>Search By Title: {this.state.searchTerm}</h2></strong></strong></Form.Label>
                    <Form.Control size={"lg"} type={'text'} onChange={e => this.setState({...this.state, searchTerm: e.target.value})} value={this.state.searchTerm} />
                </Row>
                <Row className={'m-2 bg-success bg-opacity-10'}>
                    <div>
                        <Form.Label><strong><h3>Search By Rating: {this.state.rating}</h3></strong></Form.Label>
                        <div>
                            <Button className={'m-2'} variant={"warning"} onClick={e => this.setState({...this.state, rating: "G"})}>G</Button>
                            <Button className={'m-2'} variant={"warning"} onClick={e => this.setState({...this.state, rating: "PG"})}>PG</Button>
                            <Button className={'m-2'} variant={"warning"} onClick={e => this.setState({...this.state, rating: "PG13"})}>PG13</Button>
                            <Button className={'m-2'} variant={"warning"} onClick={e => this.setState({...this.state, rating: "R"})}>R</Button>
                            <Button className={'m-2'} variant={"warning"} onClick={e => this.setState({...this.state, rating: "NC17"})}>NC17</Button>
                            <Button className={'m-2'} variant={"outline-warning"} onClick={e => {
                                this.setState({...this.state, rating: "N/A"})
                            }}>❌</Button>
                        </div>
                    </div>
                </Row>
                <Row className={'m-2 bg-success bg-opacity-10'}>
                    <div>
                        <Form.Label><strong><h3>Search By Category: {this.state.category}</h3></strong></Form.Label>
                        <div>
                            <Button className={'m-2'} variant={'warning'} onClick={e => this.setState({...this.state, category: 'Action'})}>Action</Button>
                            <Button className={'m-2'} variant={'warning'} onClick={e => this.setState({...this.state, category: 'Drama'})}>Drama</Button>
                            <Button className={'m-2'} variant={'warning'} onClick={e => this.setState({...this.state, category: 'Horror'})}>Horror</Button>
                            <Button className={'m-2'} variant={'warning'} onClick={e => this.setState({...this.state, category: 'Romance'})}>Romance</Button>
                            <Button className={'m-2'} variant={'warning'} onClick={e => this.setState({...this.state, category: 'Thriller'})}>Thriller</Button>
                            <Button className={'m-2'} variant={"outline-warning"} onClick={e => {
                                this.setState({...this.state, category: 'N/A'})
                            }}>❌</Button>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <Button variant={'warning'} className={'m-2'} size={'lg'} onClick={e => this.getMovies()}>Search</Button>
                    </div>
                </Row>
                <Row>
                    <TitleComponent compTitle={this.state.filterHelpText}/>
                </Row>
                <Row>
                    {this.renderMovies()}
                </Row>
            </Container>
        )
    }
}