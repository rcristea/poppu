import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import TestIndex from '../tests/TestIndex/TestIndex.component'
import TestAdd from '../tests/TestAdd/TestAdd.component'
import TestEdit from '../tests/TestEdit/TestEdit.component'
import LandingPage from '../default/LandingPage/LandingPage.component'
import Login from '../default/Login/Login.component'
import SelectTimeComponent from '../default/TicketBooking/SelectTime.component'
import SelectSeatComponent from '../default/TicketBooking/SelectSeat.component'
import OrderSummaryComponent from '../default/TicketBooking/OrderSummary.component'
import OrderCheckoutComponent from '../default/TicketBooking/OrderCheckout.component'
import OrderConfirmationComponent from '../default/TicketBooking/OrderConfirmation.component'
import EditProfileComponent from '../default/Profile/EditProfile.component'
import Dashboard from '../admin/Dashboard/Dashboard.component'
import PromoIndex from '../admin/Promos/Index/PromoIndex.component'
import PromoAdd from '../admin/Promos/Add/PromoAdd.component'
import MovieIndex from '../admin/Movies/Index/MovieIndex.component'
import AddMovie from '../admin/Movies/Index/AddMovie.component'
import AddShowTime from '../admin/Movies/Index/AddShowtime.component'
import {ViewMovie} from '../admin/Movies/Index/ViewMovie.component'
import ViewProfileComponent from '../default/Profile/ViewProfile.component'
import Registration from '../default/Registration/Registration.component'
import ForgotPassword from '../default/ForgotPassword/ForgotPassword.component'
import EditPaymentInfoComponent from "../default/Profile/EditPaymentInfo.component";
import EditAddressComponent from "../default/Profile/EditAddress.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'salt': '$2a$10$O1RbZIPCQCLr522HZUP51/'
    }
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={LandingPage} />
          <Route path='/login' exact={true} component={Login} />
          <Route path='/register' exact={true} component={Registration} />
          <Route path='/forgot_password' exact={true} component={ForgotPassword} />

          <Route path='/booking/times' exact={true} component={SelectTimeComponent} />
          <Route path='/booking/seats' exact={true} component={SelectSeatComponent} />
          <Route path='/booking/order/summary' exact={true} component={OrderSummaryComponent} />
          <Route path='/booking/order/checkout' exact={true} component={OrderCheckoutComponent} />
          <Route path='/booking/order/confirm' exact={true} component={OrderConfirmationComponent} />

          {/* User Routes */}
          <Route path='/profile' exact={true} component={ViewProfileComponent} />
          <Route path='/profile/edit' exact={true} component={EditProfileComponent} />
          <Route path='/address/edit' exact={true} component={EditAddressComponent} />
          <Route path='/payment/edit' exact={true} component={EditPaymentInfoComponent} />

          {/* Admin Routes */}
          <Route path='/admin' exact={true} component={Dashboard} />
          <Route path='/promos' exact={true} component={PromoIndex} />
          <Route path='/promos/add' exact={true} component={PromoAdd} />
          <Route path='/movies' exact={true} component={MovieIndex} />
          <Route path='/movies/add' exact={true} component={AddMovie} />
          <Route path='/movies/id' exact={true} component={ViewMovie} />
          <Route path='/showtime/add' exact={true} component={AddShowTime} />

          <Route path='/tests' exact={true} component={TestIndex} />
          <Route path='/tests/add' exact={true} component={TestAdd} />
          <Route path='/tests/:id' component={TestEdit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
