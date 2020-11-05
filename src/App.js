import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Read from './components/Read/Read';
import Navigation from './components/Navigation/Navigation';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/Login';
import Character from './components/Read/CharacterPage';
import NotFound from './NotFound';
import firebase from './utilz/firebase';
import { useState, useEffect } from 'react';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState();
  const [history, setHistory] = useState();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      setIsAuthenticated(true);
    } else {
      // No user is signed in.
    }
  });

  function PrivateRoute({ ...rest }) {
    if (isAuthenticated) {
      return (
        <Route exact path="/read/:id">
          <Read />
        </Route>
      )
    } else if (!isAuthenticated) {
      {setHistory({...rest})}
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
        <Route exact path="/character/:id">
          <Character />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login history={history} />
        </Route>
        <Route exact path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
