import { render } from '@testing-library/react';
import react, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/signIn.css';
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import signInAction from './action';
import { Dispatch } from 'react';
import store from '../store'
import Home from '../Home/Home';

export default function SignInForm() {

  return (
    <div id="signInform">
      <FormHeader title="signIn" />
      <Form />
      <br></br>
      {/* <OtherMethods /> */}
    </div>
  )
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


function Form(props) {
  const [userName, setuserName] = useState(store.getState().email);
 //  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const history = useHistory();
  // const navigate = useNavigate();

  const FormButton = props => (
    <div id="button" className="row">
      <button onClick={async () => {
        const user = await signIn(userName, password)
        if(user!==null)
        {
          debugger
          alert(`welcome back ${user}`)
          history.push('/');
          // <Home/>

        }
        // .then(() => history.push('/'));
      }}>{props.title}</button>
    </div>
  );

  return (
    <div id="container">
      <FormInput description="userName" placeholder="Enter your userName" type="text"
        value={userName} setValue={setuserName} />
      <FormInput description="password" placeholder="Enter your password" type="password"
        value={password} setValue={setpassword} />
      <FormButton title="Log in" />
      <a href='/signup'>signUp</a>
    </div>
  )
};

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} value={props.value}
      onChange={(e) => props.setValue(e.target.value)} />
  </div>
);

// const OtherMethods = props => (
//   <div id="alternativesignIn">
//     <label for="iconGroup">Or sign in with:</label>
//     <div id="iconGroup">
//       <Facebook />
//       <Twitter />
//       <Google />
//     </div>
//   </div>
// );

// const Facebook = props => (
//   <a href="#" id="facebookIcon">Facebook</a>
// );

// const Twitter = props => (
//   <a href="#" id="twitterIcon"></a>
// );

// const Google = props => (
//   <a href="#" id="googleIcon"></a>
// );
async function signIn(userName, password) {
  debugger
  let data
  console.log('Initial state: ', store.getState())
  console.log(userName, password)
  try {
    debugger
    var response=await fetch(`http://localhost:4020/api/users/${userName}/${password}`)
if(response.ok&&response.status === 200 ){

data=await response.json()
store.dispatch(signInAction(data))
debugger
console.log(store.getState())
alert("hi " + data.lastname);
}
  } catch (error) {
    alert("err:"+error)
  }
}