import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import TestIndex from '../tests/TestIndex/TestIndex.component'
import TestAdd from '../tests/TestAdd/TestAdd.component'
import TestEdit from '../tests/TestEdit/TestEdit.component'
import LandingPage from "../default/LandingPage/LandingPage.component";
import Login from "../default/Login/Login.component";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={LandingPage} />
          <Route path='/login' exact={true} component={Login} />

          <Route path='/tests' exact={true} component={TestIndex} />
          <Route path='/tests/add' exact={true} component={TestAdd} />
          <Route path='/tests/:id' component={TestEdit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
