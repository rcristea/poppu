import { Component } from 'react'
import {Card, Row, Table} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import EditButton from "./EditButton.component";

export class DisplayTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row className={'my-2'}>
                <Card>
                    <Card.Title>{this.props.card_title}</Card.Title>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {this.props.headings.split(',').map(heading => {
                                        return (
                                            <th style={{'text-transform': 'capitalize'}}>{heading}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                            {

                                this.props.table_data.map(row => {
                                return (
                                    <TableRow row_data={row} editable={this.props.editable} deletabe={this.props.deletable}/>
                                )
                            })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Row>
        )
    }
}

export class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                {Object.entries(this.props.row_data).map(entry => {
                    return (
                        <td>{entry[1]}</td>
                    )
                })}
                <td>
                    <EditButton/>
                </td>
            </tr>
        )
    }
}

export default DisplayTable