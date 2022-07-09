import { useState } from 'react';
import React from 'react';
import '../../css/signIn.css';
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import signInAction from '../../Store/Actions/SignInAction';
import store from '../../Store/store'

export default function SignInForm() {
  return (
    <div id="signInform">
      <FormHeader title="signIn" />
      <Form />
      <br></br>
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
        if (user !== null) {
          debugger
          alert(`welcome back ${user}`)
          history.push('/');
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

async function signIn(userName, password) {
  debugger
  let data
  console.log('Initial state: ', store.getState())
  console.log(userName, password)
  try {
    debugger
    var response = await fetch(`http://localhost:4020/api/users/${userName}/${password}`)
    if (response.ok && response.status === 200) {

      data = await response.json()
      store.dispatch(signInAction(data))
      debugger
      console.log(store.getState())
      alert("hi " + data.lastname);
    }
  } catch (error) {
    alert("err:" + error)
  }
}