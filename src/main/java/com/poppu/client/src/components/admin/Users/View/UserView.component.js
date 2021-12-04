import {React, Component} from 'react';
import {Button, Card, Container} from "reactstrap";
import {
    DisplayAttribute,
    TitleComponent
} from "../../../default/Profile/Utils.component";
import {Link} from "react-router-dom";

class UserView extends Component{

    emptyAddress = {
        addressId: null,
        street: '',
        city:'',
        zipCode:'',
    }

    emptyUser = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        isSubscribed: null,
        role: '',
        status: '',
        address: null,
    };



    constructor(props) {
        super(props);
        this.state = {
            user: this.emptyUser,
            address: this.emptyAddress,
        };
    }

    async componentDidMount() {
        this.getUser(this.props.match.params.id);
    }

    async getUser(userId) {
        let res = await fetch(`/api/users/${userId}`);
        const user = await res.json();

        /*res = await fetch(`/api/address/${user.addressId}`);
        const address = await res.json();
        console.log(address);*/

        this.setState({ user});
    }

    render() {
        if (this.state.user) {
            return (
                <Container className={'my-2 bg-light col-8'}>
                    <TitleComponent
                        compTitle={this.state.user.firstName.concat("'s Profile")}
                    />
                    <Card className={'bg-primary bg-opacity-25'}>
                        <DisplayAttribute
                            attName={'First Name'}
                            attVal={this.state.user.firstName}
                        />
                        <DisplayAttribute
                            attName={'Last Name'}
                            attVal={this.state.user.lastName}
                        />
                        <DisplayAttribute attName={'Role'} attVal={this.state.user.role} />
                        <DisplayAttribute
                            attName={'Email'}
                            attVal={this.state.user.email}
                        />
                        <DisplayAttribute
                            attName={'Phone Number'}
                            attVal={this.state.user.phoneNum}
                        />
                        <DisplayAttribute
                            attName={'Subscribed'}
                            attVal={this.state.user.isSubscribed ? 'Yes' : 'No'}
                        />
                        <DisplayAttribute
                            attName={'Status'}
                            attVal={this.state.user.status}
                        />
                    </Card>
                    <Button color="primary" tag={Link} to="/users">
                        Close
                    </Button>
                </Container>
            );
        } else {
            return (
                <Container className={'my-2 bg-light col-8'}>
                    <h1>Loading...</h1>
                </Container>
            );
        }
    }
}

export default UserView