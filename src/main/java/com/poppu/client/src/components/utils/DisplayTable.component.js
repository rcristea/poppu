import { Component } from 'react'
import {Card, Row, Table} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'

export class DisplayTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className={'my-2'}>
                <Card>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    {this.props.headings.split(',').map(heading => {
                                        return (
                                            <th>{heading}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.table_data.map(row => {
                                return (
                                    <TableRow row_data={row}/>
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
                {this.props.row_data.map((key, val) => {
                    return (
                        <td>{val}</td>
                    )
                })}
            </tr>
        )
    }
}

export default DisplayTable