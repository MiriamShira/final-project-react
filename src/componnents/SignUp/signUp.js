import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/signUp.css';
//import { NutritionalFact } from './nutritionalFact';
//import{AllergensForm}from './allergens'
import CollapsibleComponentbyButton from './collapsible/collapsibleComponent';
import {FormButton} from "./FormButton"
//1
export default function SignUpForm(props) {
  return (
    <div id="signUpform">
      <FormHeader title={props.title} />
      <Form method={props.method} title={props.title} />
    </div>
  )

}
//2
const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

//3
function Form(props) {
  const [firstName, setfirstName] = useState('');
  const [lastname, setlastname] = useState('');
  const [language, setlanguage] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  //const [passwordVerification, setpasswordVerification] = useState('');


  // Only re-subscribe if props.friend.id changes
  // signUpFetch(firstName,lastname,language,email,password,passwordVerification,props.method)
  // onClick={()=>console.log("clicked")

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
      {/* <FormInput description="password verification" placeholder="Enter your password again " type="password"
        value={passwordVerification} setValue={setpasswordVerification} /> */}

      {/**/} <CollapsibleComponentbyButton /> 

      <FormButton
        firstName={firstName}
        lastname={lastname}
        language={language}
        email={email}
        password={password}
       // passwordVerification={passwordVerification}
        title={props.title} method={props.method} />
    </div>)
};



const FormInput = props => (
  <div className="row">
    {/**/} <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  </div>
);
// function FormButton(props) {
//   const [signup, setsignup] = useState(false);
//   useEffect(() => {
//     if (signup === true)
//       signUpFetch(props.firstName, props.lastname, props.language, props.email, props.password, props.passwordVerification, props.method)
//   }, [signup]);
//   //onClick={()=>{setsignup(true)}}
//   <div id="button" className="row">
//     <button onMouseOver={()=>setsignup(true)} >{props.title}</button>
//   </div>
// }
//4
