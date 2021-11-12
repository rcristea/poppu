import {React, Component} from 'react'
import {Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import {BiDotsVerticalRounded} from "react-icons/bi";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import { Container, Table } from 'reactstrap';


class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        fetch('/api/users/')
            .then(response => response.json())
            .then(data => this.setState({users: data}));
    }

    render() {
        const {users} = this.state;
        const userList = users.map(user => {
            return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNum}</td>
                <td>{user.isSubscribed ? 'Yes' : 'No'}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                    <Dropdown className='card-table-dropdown'>
                        <DropdownToggle
                            className='card-table-dropdown-button'><BiDotsVerticalRounded />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href={`/users/view/${user.id}`}>View</DropdownItem>
                            <DropdownItem href={`/users/edit/${user.id}`}>Edit</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </td>
            </tr>
        });

        return(
            <div>
                <Container fluid>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="5%">ID</th>
                            <th width="15%">First Name</th>
                            <th width="15%">Last Name</th>
                            <th width="15%">Email</th>
                            <th width="15%">Phone Number</th>
                            <th width="5%">Subscribed</th>
                            <th width="15%">Role</th>
                            <th width="15%">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default UserList