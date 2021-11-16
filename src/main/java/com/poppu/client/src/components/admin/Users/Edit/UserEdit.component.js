import {React, Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
/*import AppNavbar from './AppNavbar';*/

class UserEdit extends Component{

    emptyItem = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        isSubscribed: null,
        role: '',
        status: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const user = await (await fetch(`/api/users/${this.props.match.params.id}`)).json();
        this.setState({item: user});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    render() {
        const {item} = this.state;
        const title = <h2>Edit User</h2>;

        return <div>
            <Container className={'my-2 bg-light col-8'}>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={item.firstName || ''}
                               onChange={this.handleChange} autoComplete="firstName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                               onChange={this.handleChange} autoComplete="lastName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNum">Phone Number</Label>
                        <Input type="text" name="phoneNum" id="phoneNum" value={item.phoneNum || ''}
                               onChange={this.handleChange} autoComplete="phoneNum"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input type="text" name="role" id="role" value={item.role || ''}
                               onChange={this.handleChange} autoComplete="role"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="isSubscribed">Subscribed</Label>
                        <Input type="checkbox" name="isSubscribed" id="isSubscribed" checked={item.isSubscribed}
                               onChange={this.handleChange} autoComplete="isSubscribed"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/users">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }

}

export default withRouter(UserEdit);