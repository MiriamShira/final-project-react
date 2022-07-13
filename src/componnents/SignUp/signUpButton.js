import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/signUp.css';
import { fetchUser } from '../../api/fetch';
import signUpAction from '../../Store/Actions/SignUpAction';
import store from '../../Store/store';
import {useHistory}from 'react-router-dom'
export function FormButton(props) {
const history=useHistory();
const handelNavagation=()=>{
  history.push('/');
}
  // const [signup, setsignup] = useState(false);
  // useEffect(() => {
  //   if (signup === true)
  //     signUpFetch(props.firstName, props.lastname, props.language, props.email, props.password)
  // // }, [signup]);

  return (
    <div id="button" className="row">
      <button onClick={() => {
        //setsignup(true)
        signUpFetch(props.firstname, props.lastname, props.language, props.email, props.password).then(handelNavagation())

      }}
      >{props.title}</button>
    </div>
  )
}

function signUpFetch(firstname, lastname, language, email, password) {
const method=store.getState().user.email?'PUT':'POST'
console.log(store.getState().user.email);
console.log(store.getState().allergensToSave);
console.log(store.getState().nutritionalFactlist);
console.log(method);
debugger
  // if (password !== passwordVerification) { debugger;
  //   return alert("passwordVerification must match password ")
  // }
  var newUser = {
    firstname: firstname
    , lastname: lastname
    , language: language
    , email: email
    , password: password,
      alerts: {

      allergens:store.getState().allergensToSave ,
      nutritionalFacts: store.getState().nutritionalFactlist
   }

  };
  return fetchUser(newUser,method).then((response) => {
    debugger
    console.log(response);
    store.dispatch(signUpAction(response))
    console.log('new state: ', store.getState())
    alert("hi "+response.firstname);
  
  })

}
