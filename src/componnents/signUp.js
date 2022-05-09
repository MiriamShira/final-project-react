import { render } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/signUp.css';
//import { NutritionalFact } from './nutritionalFact';
//import{AllergensForm}from './allergens'
import CollapsibleComponentbyButton from './collapsibleComponent'
export default function SignUpForm() {
  return (
    <div id="signUpform">
      <FormHeader title="Sign-up" />
      <Form />

    </div>
  )

}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


function Form(props) {
  const [firstName, setfirstName] = useState('');
  const [lastname, setlastname] = useState('');
  const [language, setlanguage] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordVerification, setpasswordVerification] = useState('');

  const [showAllergenic, setShowAllergenic] = useState(false);

  return (
    <div id="container">
      <FormInput description="firstName" placeholder="Enter your firstname" type="text"
        value={firstName} setValue={setfirstName} />
      <FormInput description="lastname" placeholder="Enter your lastname" type="text"
        value={lastname} setValue={setlastname} />
      <FormInput description="preferred language" placeholder="Enter your preferred language" type="text"
        value={language} setValue={setlanguage} />
      <FormInput description="email" placeholder="Enter your email" type="email"
        value={email} setValue={setemail} />
      <FormInput description="password" placeholder="Enter your password" type="password"
        value={password} setValue={setpassword} />
      <FormInput description="password verification" placeholder="Enter your password again " type="password"
        value={passwordVerification} setValue={setpasswordVerification} />
      <CollapsibleComponentbyButton/>
     
      <FormButton title="sign up" />
    </div>)
};

const FormButton = props => (
  <div id="button" className="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  </div>
);


