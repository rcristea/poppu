import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {TitleComponent} from "../../../default/Profile/Utils.component";
import {postData, putData} from "../../../default/Profile/methods";

export class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      category: '',
      director: '',
      producer: '',
      synopsis: '',
      rating: '',
      photoName: '',
      trailerPhoto: '',
      trailerLink: '',
      isShowing: '',
      _actors: [],
      _actorsText: ''
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitMovie = this.handleSubmitMovie.bind(this)
    this.updateDB = this.updateDB.bind(this)
  }

  handleBack() {
    this.props.history.push('/admin')
  }

  async handleSubmitMovie() {
    if (this.state.title.trim() === '') {
      alert('Empty title. Please fill it out.')
    } else if (this.state.date.trim() === '') {
      alert('Empty date. Please fill it out.')
    } else if (this.state.category.trim() === '') {
      alert('Empty category. Please fill it out.')
    } else if (this.state.director.trim() === '') {
      alert('Empty director field. Please fill it out.')
    } else if (this.state.producer.trim() === '') {
      alert('Empty producer. Please fill it out.')
    } else if (this.state.synopsis.trim() === '') {
      alert('Empty synopsis. Please fill it out.')
    } else if (this.state.rating.trim() === '') {
      alert('Empty rating. Please fill it out.')
    } else if (this.state.trailerPhoto.trim() === '') {
      alert('Empty trailer photo. Please fill it out.')
    } else if (this.state.trailerLink.trim() === '') {
      alert('Empty trailer link. Please fill it out.')
    } else if (this.state._actors.length === 0) {
      alert('No actors selected for this movie')
    } else {
      let path = 'assets/img/posters/' + this.state.trailerPhoto
      this.setState({...this.state, trailerPhoto: path})
      console.log('AddMovieComponent State:', this.state)
      await this.updateDB()
      this.props.history.push('/admin')
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('role') !== 'admin') {
      sessionStorage.setItem('alert', 'User does not have correct privileges.')
      this.props.history.push('/')
    }
  }

  async updateDB() {
    let movieJSON = await postData(this.state, 'http://localhost:8080/movies/')
    const actorsResult = await Promise.all(this.state._actors.map(async (actor: string) => {
      let movieActor = await putData( {
        movie_id: 1,
        actor_id: parseInt(actor),
        role: 'N/A'
      }, `http://localhost:8080/movieActors`)
      console.log('Added Actor', movieActor)
    }));
    console.log('Added Movie: ', movieJSON)
    console.log('Actors Result: ', actorsResult)
  }

  render() {
    return (
        <Container className={'my-2 bg-light'}>
          <TitleComponent compTitle={'Add New Movie'}/>
          <Card className={'m-2'}>
            <Form>
              <div>
                <Form.Group>
                  <Form.Label><strong>Movie Title</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the title of the movie.'}
                                value={this.state.title}
                                onChange={e => this.setState({
                                  ...this.state, title: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Movie Release Date</strong></Form.Label>
                  <Form.Control type={'date'}
                                placeholder={'Enter the release date of the movie.'}
                                value={this.state.date}
                                onChange={e => this.setState({
                                  ...this.state, date: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group className={'m-2'}>
                  <Form.Label><strong>Category: {this.state.category}</strong></Form.Label>
                  <div>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, category: 'Action'})}>Action</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, category: 'Drama'})}>Drama</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, category: 'Horror'})}>Horror</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, category: 'Romance'})}>Romance</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, category: 'Thriller'})}>Thriller</Button>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Movie Director</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the director of this movie.'}
                                value={this.state.director}
                                onChange={e => this.setState({
                                  ...this.state, director: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Producer</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the producer of this movie.'}
                                value={this.state.producer}
                                onChange={e => this.setState({
                                  ...this.state, producer: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Synopsis</strong></Form.Label>
                  <Form.Control type={'textarea'}
                                placeholder={'Enter a synopsis for this movie.'}
                                value={this.state.synopsis}
                                onChange={e => this.setState({
                                  ...this.state, synopsis: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Rating: {this.state.rating}</strong></Form.Label>
                  <div>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'G'})}>G</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'PG'})}>PG</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'PG13'})}>PG13</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'R'})}>R</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'NC17'})}>NC17</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'TVMA'})}>TVMA</Button>
                    <Button className={'m-2'} variant={'outline-warning'} onClick={e => this.setState({...this.state, rating: 'Unrated'})}>Unrated</Button>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Trailer Photo (Filename)</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the path to the trailer photo.'}
                                value={this.state.photoName}
                                onChange={e => this.setState({
                                  ...this.state,
                                  photoName: e.target.value,
                                  trailerPhoto: 'assets/img/posters/' + e.target.value,
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Trailer Link (Youtube)</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the youtube link to the trailer for this movie.'}
                                value={this.state.trailerLink}
                                onChange={e => this.setState({
                                  ...this.state, trailerLink: e.target.value
                                })}/>
                </Form.Group>
                <div>
                  <Form.Group>
                    <Form.Label><strong>Actors (Add IDs separated by commas)</strong></Form.Label>
                    <Form.Control type={'text'}
                                  placeholder={'Enter actor IDs for this movie.'}
                                  value={this.state._actorsText}
                                  onChange={e => this.setState({
                                    ...this.state,
                                    _actorsText: e.target.value,
                                    _actors: e.target.value.trim().replaceAll(' ', '').split(',')
                                  })}/>
                  </Form.Group>
                </div>
                <Form.Group className={'m-2'}>
                  <Form.Label><strong>isShowing</strong></Form.Label>
                  <Button className={'m-2'} variant={"primary"} onClick={e => this.setState({...this.state, isShowing: false})}>Coming Soon</Button>
                  <Button className={'m-2'} variant={'success'} onClick={e => this.setState({...this.state, isShowing: true})}>Now Showing</Button>
                </Form.Group>
              </div>
              <Container className={'m-2'}>
                <Button variant={'success'} onClick={this.handleSubmitMovie}>Submit New Movie</Button>
                <Button variant={'warning'} onClick={this.handleBack}>Go Back</Button>
              </Container>
            </Form>
          </Card>
        </Container>
    )
  }
}



export default AddMovie