import 'bootstrap/dist/css/vapor.css'
import 'react-bootstrap/'
import {Button} from "react-bootstrap";
import SuperButton from "./SuperButton.component";

export class AddButton extends SuperButton {
    render() {
        return (
            <Button variant={"primary"}>
                + Add
            </Button>
        )
    }
}

export default AddButton