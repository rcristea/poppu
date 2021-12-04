import {React, Component} from 'react'
import './UserIndex.component.css'
import Sidebar from '../../Sidebar/Sidebar.component'
import UserList from "./UserList.component";

class UserIndex extends Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    handleDelete(id) {
        return e => {
            e.preventDefault()
            alert('Attempted to delete user with id: ' + id)
        }
    }

    logOut() {
        if (localStorage.getItem('remember_me')) {
            localStorage.removeItem('remember_me')
        }

        if (sessionStorage.getItem('user_email')) {
            sessionStorage.removeItem('user_email')
        }

        if (sessionStorage.getItem('role')) {
            sessionStorage.removeItem('role')
            sessionStorage.setItem('alert', 'Successfully logged out!')

            this.props.history.push('/')
        }
    }

    async componentDidMount() {
        if (sessionStorage.getItem('role') !== 'admin') {
            sessionStorage.setItem('alert', 'User does not have correct privileges.')
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <>
                <Sidebar logOut={this.logOut} />
                <div className='users-container'>
                    <div className='cover'>
                        <div className='users-card'>
                            <div className='users-card-heading'>
                                <div className='users-card-title'>
                                    <h1>Users</h1>
                                </div>
                                <div className='users-card-subtitle'>
                                    <h3>For more options, click the three dots on the right.</h3>
                                </div>
                            </div>
                            <div className='users-card-content'>
                                <UserList/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserIndex