import 'react-bootstrap/'
import {Button} from 'react-bootstrap'
import SuperButton from './SuperButton.component'

export class AddButton extends SuperButton {
  render() {
    return (
      <Button variant={'primary'} href='/movies/add'>
        + Add
      </Button>
    )
  }
}

export default AddButton