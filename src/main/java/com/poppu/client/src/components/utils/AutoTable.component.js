import {Component} from 'react'
import {ButtonGroup, Card, Container, Row, Table} from 'react-bootstrap'
import ViewButton from './Buttons/ViewButton.component'
import DeleteButton from './Buttons/DeleteButton.component'
import AddButton from './Buttons/AddButton.component'

import 'react-bootstrap/'


export class AutoTable extends Component {
  render() {
    return (
      <Container>
        <Row className={'my-2'}>
          <Card>
            <Card.Title><h2>{this.props.card_title}</h2></Card.Title>
            <Card.Body>
              <Table variant={'dark'} striped bordered hover style={{'width': '100%'}}>
                <thead>
                <tr>
                  {this.props.headings.split(',').map(heading => {
                    return (
                      <th key={heading.replaceAll('_', ' ')}
                          style={{'textTransform': 'capitalize'}}>{heading.replaceAll('_', ' ')}</th>
                    )
                  })}
                </tr>
                </thead>
                <tbody>
                {this.props.table_data.map(row => {
                  return (
                    <TableRow key={row.id} row_data={row} viewable={this.props.viewable}
                              deletable={this.props.deletable}/>
                  )
                })}
                </tbody>
              </Table>
              {this.props.addable && <AddButton/>}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    )
  }
}

export class TableRow extends Component {
  render() {
    return (
      <tr>
        <td key={this.props.row_data.id}>{this.props.row_data.id}</td>
        <td key={this.props.row_data.movieName}>{this.props.row_data.movieName}</td>
        <td key={this.props.row_data.movieRating}>{this.props.row_data.movieRating}</td>
        <td key={this.props.row_data.movieRatingCode}>{this.props.row_data.movieRatingCode}</td>
        <td key={this.props.row_data.movieIsShowing}>{(this.props.row_data.movieIsShowing) ? "Now Showing" : "Coming Soon"}</td>
        <td>
          <ButtonGroup>
            {this.props.viewable && <ViewButton movieId={this.props.row_data.id}/>}
            {this.props.deletable && <DeleteButton movieId={this.props.row_data.id}/>}
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default AutoTable