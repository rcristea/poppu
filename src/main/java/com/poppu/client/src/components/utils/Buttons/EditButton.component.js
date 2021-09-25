import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import {Button} from "react-bootstrap";
import SuperButton from "./SuperButton.component";

export class EditButton extends SuperButton {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button variant={"warning"}>
                ✎ Edit
            </Button>
        )
    }
}

export default EditButton