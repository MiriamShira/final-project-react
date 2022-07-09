// import './App.css';
import SignInForm from './componnents/SignIn/signIn';
import SignUpForm from './componnents/SignUp/signUp';
import ReactDOM from 'react-dom';

import Home from './componnents/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/signin">
          <SignInForm />
        </Route>
        <Route path="/signup">
          <SignUpForm title='signUp' method='POST' />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
