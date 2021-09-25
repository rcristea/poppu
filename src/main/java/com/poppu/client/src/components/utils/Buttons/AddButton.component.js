import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import {Button} from "react-bootstrap";
import SuperButton from "./SuperButton.component";

export class AddButton extends SuperButton {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button variant={"primary"}>
                + Add
            </Button>
        )
    }
}

export default AddButton