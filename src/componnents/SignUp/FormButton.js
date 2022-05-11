import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/signUp.css';


export function FormButton(props) {

    const [signup, setsignup] = useState(false);
    useEffect(() => {
      if (signup === true)
        signUpFetch(props.firstName, props.lastname, props.language, props.email, props.password, props.method)
    }, [signup]);
 
    return(
    <div id="button" className="row">
      <button onClick={() => {
          //setsignup(true)
// console.log(
//     "hhhhh"
// );
signUpFetch(props.firstName, props.lastname, props.language, props.email, props.password, props.method)

}}
      >{props.title}</button>
    </div>
    )
  }

  function signUpFetch(firstName, lastname, language, email, password, method) {
     
    // if (password !== passwordVerification) { debugger;
    //   return alert("passwordVerification must match password ")
    // }
    var newUser = {
      firstName: firstName
      , lastname: lastname
      , language: language
      , email: email
      , password: password
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
          return response.json
        }
        else {
          throw new Error()
        }
      }
  
      ).then((response) => {
        alert(response.userName);
  
      })
  
  
      .catch(reson => {
        alert('לא הצלחתנו לאתר משתמש זה ודא כי שם המשתמש והסיסמא תקינים')
      }
      )
  }
  
  
  