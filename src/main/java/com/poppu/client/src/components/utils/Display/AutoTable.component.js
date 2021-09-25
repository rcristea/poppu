import { Component } from 'react'
import {ButtonGroup, Card, Row, Table} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/'
import EditButton from "../Buttons/EditButton.component";
import ViewButton from "../Buttons/ViewButton.component";
import DeleteButton from "../Buttons/DeleteButton.component";
import AddButton from "../Buttons/AddButton.component";

export class AutoTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className={'my-2'}>
                <Card>
                    <Card.Title><h2>{this.props.card_title}</h2></Card.Title>
                    <Card.Body>
                        <Table striped bordered hover style={{'width': '100%'}}>
                            <tr>
                                {this.props.widths.map(width => {
                                    return (
                                        <td className={'col-'.concat(width)} style={{'opacity': '0'}}>{width}</td>
                                    )
                                })}
                            </tr>
                            <thead>
                                <tr>
                                    {this.props.headings.split(',').map(heading => {
                                        return (
                                            <th style={{'text-transform': 'capitalize'}}>{heading.replaceAll('_', ' ')}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                            {

                                this.props.table_data.map(row => {
                                return (
                                    <TableRow row_data={row} viewable={this.props.viewable} editable={this.props.editable} deletable={this.props.deletable}/>
                                )
                            })}
                            </tbody>
                        </Table>
                        {this.props.addable && <AddButton />}
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
                    <ButtonGroup>
                        {this.props.viewable && <ViewButton/>}
                        {this.props.editable && <EditButton/>}
                        {this.props.deletable && <DeleteButton/>}
                    </ButtonGroup>
                </td>
            </tr>
        )
    }
}

export default AutoTable