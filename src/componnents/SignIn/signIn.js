
import React from 'react';
import '../../css/signIn.css';

import SignInFormFormik from './signInFormik';


export default function  SignInForm  (props)  {


  return (
    <div id="signInform">
      <h2 id="headerTitle">{props.title}</h2>
      <div id="container">
        <SignInFormFormik/>
        <a href='/signup'>signUp</a>
      </div>
      <br></br>
    </div>
  )
};


