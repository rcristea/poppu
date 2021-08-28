import React, {Component} from 'react'
import './TestIndex.component.css'
import {Link} from "react-router-dom";
import {Button, Form, Input} from "reactstrap";

export class TestIndex extends Component {
  state = {
    isLoading: true,
    tests: [],
  };

  async componentDidMount() {
    const response = await fetch('/api/tests');
    const body = await response.json();
    this.setState({ tests: body, isLoading: false });
  }

  async deleteTest(event) {
    event.preventDefault();
    const id = event.target[0].value;
    await fetch('/api/tests/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id)
    });
  }

  render() {
    return (
      <div className='test-index-container'>
        <Link to="/">Go Back</Link>
        <ul>
          {
            this.state.tests.map(test =>
              <li key={test.id}>
                {test.name} : {test.description} : <Link to={"/tests/" + test.id}>Edit</Link>
                <Form onSubmit={this.deleteTest}>
                  <Input type="hidden" value={test.id} />
                  <Button type="submit">Delete</Button>
                </Form>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default TestIndex