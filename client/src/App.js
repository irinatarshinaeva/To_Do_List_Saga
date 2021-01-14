import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './Components/Header';
import Redux from './Components/Redux';
import Context from './Components/Context';

import Saga from './Components/Saga';

function App() {
  return (
    <div className="container py-5">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <h1>Welcome</h1>
          </Route>
          <Route exact path="/redux">
            <Redux />
          </Route>
          <Route exact path="/context">
            <Context />
          </Route>
          <Route exact path="/saga">
            <Saga />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
