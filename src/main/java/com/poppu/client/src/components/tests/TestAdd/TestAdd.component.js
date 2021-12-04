import React, {Component} from 'react'
import './TestAdd.component.css'
import {Link} from 'react-router-dom'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

export class TestAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: -1,
      name: '',
      description: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    const value = event.target.value
    this.setState({name: value})
  }

  handleDescriptionChange(event) {
    const value = event.target.value
    this.setState({description: value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    const test = {
      name: this.state.name,
      description: this.state.description,
    }

    await fetch('/api/tests', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(test),
    })
    this.props.history.push('/tests')
  }

  render() {
    const title = <h2>Add Test</h2>

    return (
      <div className='test-edit-container'>
        <Link to='/'>Go Back</Link>
        <div>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input type='text' name='name' id='name'
                     onChange={this.handleNameChange} autoComplete='name'/>
            </FormGroup>
            <FormGroup>
              <Label for='description'>Description</Label>
              <Input type='text' onChange={this.handleDescriptionChange}/>
            </FormGroup>
            <FormGroup>
              <Button type='submit'>Add</Button>{' '}
              <Button tag={Link} to='/tests'>Cancel</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

export default TestAdd