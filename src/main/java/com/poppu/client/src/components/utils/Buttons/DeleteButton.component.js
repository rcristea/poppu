import 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import SuperButton from './SuperButton.component'

export class DeleteButton extends SuperButton {
  render() {
    return (
      <Button variant={'danger'} onClick={this.deleteMovie(this.props.movieId)}>
        X Delete
      </Button>
    )
  }

  deleteMovie(movieId) {
    return e => {
      e.preventDefault()
      console.log(movieId)
      fetch(`http://localhost:8080/movies/${movieId}`, {
        method: 'DELETE',
      });

      window.location.reload()
    }
  }
}

export default DeleteButton