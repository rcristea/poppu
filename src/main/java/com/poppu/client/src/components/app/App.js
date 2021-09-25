import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import TestIndex from '../tests/TestIndex/TestIndex.component'
import TestAdd from '../tests/TestAdd/TestAdd.component'
import TestEdit from '../tests/TestEdit/TestEdit.component'
import LandingPage from '../default/LandingPage/LandingPage.component'
import Login from '../default/Login/Login.component'
import Signup from '../default/Signup/Signup.component'
import SignupPayment from '../default/SignupPayment/SignupPayment.component'
import SignupAddress from '../default/SignupAddress/SignupAddress.component'
import SignupConfirm from '../default/SignupConfirm/SignupConfirm.component'
import SelectTimeComponent from "../default/TicketBooking/SelectTime.component";
import SelectSeatComponent from "../default/TicketBooking/SelectSeat.component";
import OrderSummaryComponent from "../default/TicketBooking/OrderSummary.component";
import OrderCheckoutComponent from "../default/TicketBooking/OrderCheckout.component";
import OrderConfirmationComponent from "../default/TicketBooking/OrderConfirmation.component";
import EditProfileComponent from "../default/EditProfile/EditProfile.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={LandingPage} />
          <Route path='/login' exact={true} component={Login} />
          <Route path='/signup' exact={true} component={Signup} />
          <Route path='/signup/payment' exact={true} component={SignupPayment} />
          <Route path='/signup/address' exact={true} component={SignupAddress} />
          <Route path='/signup/confirm' exact={true} component={SignupConfirm} />
          <Route path='/booking/times' exact={true} component={SelectTimeComponent} />
          <Route path='/booking/seats' exact={true} component={SelectSeatComponent} />
          <Route path='/booking/order/summary' exact={true} component={OrderSummaryComponent} />
          <Route path='/booking/order/checkout' exact={true} component={OrderCheckoutComponent} />
          <Route path='/booking/order/confirm' exact={true} component={OrderConfirmationComponent} />
          <Route path='/profile' exact={true} component={EditProfileComponent} />

          <Route path='/tests' exact={true} component={TestIndex} />
          <Route path='/tests/add' exact={true} component={TestAdd} />
          <Route path='/tests/:id' component={TestEdit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
