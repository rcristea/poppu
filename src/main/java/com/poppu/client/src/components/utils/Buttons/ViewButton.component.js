import 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import SuperButton from './SuperButton.component'

export class ViewButton extends SuperButton {
  render() {
    return (
      <Button variant={'success'} href={'/movies/view/'+this.props.movieId}>
        View
      </Button>
    )
  }
}

export default ViewButton