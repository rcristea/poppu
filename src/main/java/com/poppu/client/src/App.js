import './App.css';
import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./components/default/LandingPage/LandingPage.component";
import TestIndex from "./components/tests/TestIndex/TestIndex.component"
import TestAdd from "./components/tests/TestAdd/TestAdd.component";
import TestEdit from "./components/tests/TestEdit/TestEdit.component";

class App extends Component {
  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/tests" exact={true} component={TestIndex} />
          <Route path="/tests/add" exact={true} component={TestAdd} />
          <Route path="/tests/:id" component={TestEdit} />
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
