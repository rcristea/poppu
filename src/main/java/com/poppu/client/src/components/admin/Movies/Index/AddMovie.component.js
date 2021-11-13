import 'react-bootstrap/'
import {Component} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {TitleComponent} from "../../../default/Profile/Utils.component";

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
      trailerPhoto: '',
      trailerLink: '',
      isShowing: '',
    }

    this.handleBack = this.handleBack.bind(this)
    this.handleSubmitMovie = this.handleSubmitMovie.bind(this)
  }

  handleBack() {
    this.props.history.push('/admin')
  }

  handleSubmitMovie() {
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
    } else {
      console.log(this.state)
      this.props.history.push('/admin')
    }
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
                <Form.Group>
                  <Form.Label><strong>Category</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the category of this movie.'}
                                value={this.state.category}
                                onChange={e => this.setState({
                                  ...this.state, category: e.target.value
                                })}/>
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
                  <Form.Label><strong>Rating</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the rating of this movie.'}
                                value={this.state.rating}
                                onChange={e => this.setState({
                                  ...this.state, rating: e.target.value
                                })}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label><strong>Trailer Photo (Path)</strong></Form.Label>
                  <Form.Control type={'text'}
                                placeholder={'Enter the path to the trailer photo.'}
                                value={this.state.trailerPhoto}
                                onChange={e => this.setState({
                                  ...this.state, trailerPhoto: e.target.value
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
                <Form.Group>
                  <Form.Label><strong>isShowing</strong></Form.Label>
                  <Form.Control type={'radio'}
                                value={this.state.isShowing}
                                onChange={e => this.setState({
                                  ...this.state, isShowing: e.target.value
                                })}/>
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