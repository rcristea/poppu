import 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import SuperButton from './SuperButton.component'

export class DeleteButton extends SuperButton {
  constructor(props) {
    super(props)

    this.deleteMovie = this.deleteMovie.bind(this)
  }

  render() {
    return (
      <Button variant={'danger'} onClick={this.deleteMovie}>
        X Delete
      </Button>
    )
  }

  async deleteMovie() {
    let movieId = this.props.movieId
    console.log('delete', this.props.movieId)
    await fetch(`http://localhost:8080/api/movies/${movieId}`, {
      method: 'DELETE',
    });

    window.location.reload()
  }
}

export default DeleteButton