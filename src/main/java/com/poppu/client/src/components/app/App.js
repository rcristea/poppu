import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TestIndex from '../tests/TestIndex/TestIndex.component'
import TestAdd from '../tests/TestAdd/TestAdd.component'
import TestEdit from '../tests/TestEdit/TestEdit.component'
import LandingPage from '../default/LandingPage/LandingPage.component'
import Login from '../default/Login/Login.component'
import Signup from '../default/Signup/Signup.component'
import SignupPayment from '../default/SignupPayment/SignupPayment.component'
import SignupAddress from '../default/SignupAddress/SignupAddress.component'
import SignupConfirm from '../default/SignupConfirm/SignupConfirm.component'
import Dashboard from '../admin/Dashboard/Dashboard.component'
import MovieIndex from '../admin/Movies/Index/MovieIndex.component'
import PromoIndex from '../admin/Promos/Index/PromoIndex.component'
import PromoAdd from '../admin/Promos/Add/PromoAdd.component'

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
          <Route path='/admin' exact={true} component={Dashboard} />
          <Route path='/movies' exact={true} component={MovieIndex} />
          <Route path='/promos' exact={true} component={PromoIndex} />
          <Route path='/promos/add' exact={true} component={PromoAdd} />

          <Route path='/tests' exact={true} component={TestIndex} />
          <Route path='/tests/add' exact={true} component={TestAdd} />
          <Route path='/tests/:id' component={TestEdit} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
