import 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import SuperButton from './SuperButton.component'

export class EditButton extends SuperButton {
  render() {
    return (
      <Button variant={'warning'} href={'/movies/edit/'+this.props.movieId}>
        ✎ Edit
      </Button>
    )
  }
}

export default EditButton