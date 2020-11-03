import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Read from './components/Read/Read';
import Navigation from './components/Navigation';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/Login';
import firebase from './utilz/firebase';
import { useState } from 'react';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [history, setHistory] = useState();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      setIsAuthenticated(true);
    } else {
      // No user is signed in.
      setIsAuthenticated(false);
    }
  });

  function PrivateRoute({...rest}) {

    if (isAuthenticated) {
      return (
        <Route exact path="/read/:id">
          <Read />
        </Route>
      )
    } else {
      setHistory({...rest})
      return (
        <Redirect to="/login" />
      )
    }
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute exact path="/read/:id">
          <Read />
        </PrivateRoute>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login history={history} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
