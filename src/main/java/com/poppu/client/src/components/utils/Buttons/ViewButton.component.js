import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import {Button} from "react-bootstrap";
import SuperButton from "./SuperButton.component";

export class ViewButton extends SuperButton {
    render() {
        return (
            <Button variant={"success"}>
                View
            </Button>
        )
    }
}

export default ViewButton