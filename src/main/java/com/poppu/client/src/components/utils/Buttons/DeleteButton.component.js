import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import {Button} from "react-bootstrap";
import SuperButton from "./SuperButton.component";

export class DeleteButton extends SuperButton {
    render() {
        return (
            <Button variant={"danger"}>
                X Delete
            </Button>
        )
    }
}

export default DeleteButton