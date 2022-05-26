import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/signUp.css';

import CollapsibleComponentbyButton from './collapsible/collapsibleComponent';
import { FormButton } from "./signUpButton"

import signUpAction from '../SignUp/action';
import { Dispatch } from 'react';
import store from '../store'

export default function SignUpForm(props) {
 

  return (
    <div id="signUpform">
      <FormHeader title={props.title} />
      <Form title={props.title} />
    </div>
  )
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

function Form(props) {
  const [firstname, setfirstname] = useState(store.getState().user.firstname);
  const [lastname, setlastname] = useState(store.getState().user.lastname);
  const [language, setlanguage] = useState(store.getState().user.language);
  const [email, setemail] = useState(store.getState().user.email);
  const [password, setpassword] = useState(store.getState().user.password);
  //const [passwordVerification, setpasswordVerification] = useState('');



  return (
    <div id="container">
      <FormInput description="firstName" placeholder="Enter your firstname" type="text"
        value={firstname} setValue={setfirstname} />
      <FormInput description="lastname" placeholder="Enter your lastname" type="text"
        value={lastname} setValue={setlastname} />
      <FormInput description="preferred language" placeholder="Enter your preferred language" type="text"
        value={language} setValue={setlanguage} />
      <FormInput description="email" placeholder="Enter your email" type="email"
        value={email} setValue={setemail} />
      <FormInput description="password" placeholder="Enter your password" type="password"
        value={password} setValue={setpassword} />
      {/* <FormInput description="password verification" placeholder="Enter your password again " type="password"
        value={passwordVerification} setValue={setpasswordVerification} /> */}
{/* commponnent below is to enable allergy an nf costimizing. */}
     <CollapsibleComponentbyButton /> {/*  */}

      <FormButton
        firstname={firstname}
        lastname={lastname}
        language={language}
        email={email}
        password={password}
        // passwordVerification={passwordVerification}
        title={props.title} />
    </div>)
};

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>

    <input type={props.type} placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
    
  </div>
);
