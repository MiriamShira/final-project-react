import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/signUp.css';
import signUpAction from '../SignUp/action';
import store from '../store'

export function FormButton(props) {

  // const [signup, setsignup] = useState(false);
  // useEffect(() => {
  //   if (signup === true)
  //     signUpFetch(props.firstName, props.lastname, props.language, props.email, props.password)
  // // }, [signup]);

  return (
    <div id="button" className="row">
      <button onClick={() => {
        //setsignup(true)
        signUpFetch(props.firstname, props.lastname, props.language, props.email, props.password)

      }}
      >{props.title}</button>
    </div>
  )
}

function signUpFetch(firstname, lastname, language, email, password) {
const method=store.getState().user.email?'PUT':'POST'
console.log(store.getState().user.email);
console.log(store.getState().allergensToSave);
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
  fetch(`http://localhost:4020/api/users`, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then((response) => {

      if (response.status === 200 && response.ok) {
        return response.json()
      }
      else {
        throw new Error()
      }
    })
    .then((response) => {
      console.log(response);
      store.dispatch(signUpAction(response))
      console.log('new state: ', store.getState())
      alert("hi "+response.firstname);

    })
 .catch((reson) => {
      alert(reson)
    }
    )
}
