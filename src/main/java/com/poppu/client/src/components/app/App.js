import {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
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
import UserIndex from '../admin/Users/Index/UserIndex.component'
import UserEdit from '../admin/Users/Edit/UserEdit.component'
import UserView from '../admin/Users/View/UserView.component'
import Shows from '../default/TicketBooking/SelectTime.component'
import ViewProfileComponent from '../default/Profile/ViewProfile.component'
import Registration from '../default/Registration/Registration.component'
import ForgotPassword from '../default/ForgotPassword/ForgotPassword.component'
import EditPaymentInfoComponent from '../default/Profile/EditPaymentInfo.component'
import EditAddressComponent from '../default/Profile/EditAddress.component'
import EditPasswordComponent from '../default/Profile/EditPassword.component'
import AddPaymentComponent from '../default/Profile/AddPayment.component'
import bcrypt from 'bcryptjs'
import AddAddressComponent from '../default/Profile/AddAddress.component'
import Schedule from '../admin/Schedules/Index/Schedules.component'
import AddActorComponent from '../admin/Movies/Index/AddActor.component'
import ScheduleAdd from '../admin/Schedules/Add/ScheduleAdd.component'
import ScheduleEdit from '../admin/Schedules/Edit/ScheduleEdit.component'
import {SearchResultsComponent} from '../default/SearchResults/SearchResults.component'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salt: '$2a$10$O1RbZIPCQCLr522HZUP51/',
      email: '',
      password: '',
    }

    this.getUser = this.getUser.bind(this)
  }

  getUser(email) {
    return new Promise(function (resolve, reject) {
      fetch(`http://localhost:8080/api/users/email?email=${email}`, {
        method: 'GET',
      }).then(response => {
        response.json().then(json => {
          resolve(json)
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })
    })
  }

  async componentDidMount() {
    if (localStorage.getItem('remember_me')) {
      let cookie = JSON.parse(localStorage.getItem('remember_me'))
      this.state.email = cookie['email']
      this.state.password = cookie['password']

      let user = await this.getUser(this.state.email)
      let inputHash = await bcrypt.hash(this.state.password, this.state.salt)

      if (user['password'] === inputHash) {
        let role = user['role'].toLowerCase()
        sessionStorage.setItem('role', role)
        sessionStorage.setItem('user_email', this.state.email)
      }
    }
  }

  render() {
    return (
      <>
        <Route path='/' exact={true} component={LandingPage}/>
        <Route path='/login' exact={true} component={Login}/>
        <Route path='/register' exact={true} component={Registration}/>
        <Route path='/forgot_password' exact={true} component={ForgotPassword}/>

        <Route path='/booking/times' exact={true} component={SelectTimeComponent}/>
        <Route path='/booking/seats' exact={true} component={SelectSeatComponent}/>
        <Route path='/booking/order/summary' exact={true} component={OrderSummaryComponent}/>
        <Route path='/booking/order/checkout' exact={true} component={OrderCheckoutComponent}/>
        <Route path='/booking/order/confirm' exact={true} component={OrderConfirmationComponent}/>

        {/* User Routes */}
        <Route path='/profile' exact={true} component={ViewProfileComponent}/>
        <Route path='/profile/edit' exact={true} component={EditProfileComponent}/>
        <Route path='/profile/edit/password' exact={true} component={EditPasswordComponent}/>
        <Route path='/address/edit' exact={true} component={EditAddressComponent}/>
        <Route path='/address/add' exact={true} component={AddAddressComponent}/>
        <Route path='/payment/edit' exact={true} component={EditPaymentInfoComponent}/>
        <Route path='/payment/add' exact={true} component={AddPaymentComponent}/>
        <Route path='/search' component={SearchResultsComponent}/>
        <Route path='/shows/movie=:id' component={Shows}/>

        {/* Admin Routes */}
        <Route path='/admin' exact={true} component={Dashboard}/>
        <Route path='/promos' exact={true} component={PromoIndex}/>
        <Route path='/promos/add' exact={true} component={PromoAdd}/>
        <Route path='/movies' exact={true} component={MovieIndex}/>
        <Route path='/movies/add' exact={true} component={AddMovie}/>
        <Route path='/movies/view/:id' component={ViewMovie}/>
        <Route path='/actor/add' exact={true} component={AddActorComponent}/>
        <Route path='/showtime/add' exact={true} component={AddShowTime}/>
        <Route path='/schedule' exact={true} component={Schedule} />
        <Route path='/schedule/add' exact={true} component={ScheduleAdd} />
        <Route path='/schedule/edit/:id' component={ScheduleEdit} />
        <Route path='/users' exact = {true} component={UserIndex}/>
        <Route path='/users/edit/:id' component={UserEdit}/>
        <Route path='/users/view/:id' component={UserView}/>

        <Route path='/tests' exact={true} component={TestIndex}/>
        <Route path='/tests/add' exact={true} component={TestAdd}/>
        <Route path='/tests/:id' component={TestEdit}/>
      </>
    )
  }
}

export default withRouter(App)
