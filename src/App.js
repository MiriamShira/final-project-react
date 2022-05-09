import './App.css';
import SignInForm from  './componnents/signIn';
import SignUpForm from  './componnents/signUp';
import ReactDOM from 'react-dom';
import { CollapsibleComponent } from "./componnents/collapsibleComponent";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <SignInForm /> 
        <SignUpForm />
       <CollapsibleComponent /> */}
{/* */}
<Router>
  <Switch>
    <Route path="/signin">
    <SignInForm />
    </Route>
    <Route path="/signup">
    <SignUpForm />
    </Route> 
  </Switch>
</Router> 
    </div>
  );
}

export default App;
