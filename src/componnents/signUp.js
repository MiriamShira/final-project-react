import { render } from '@testing-library/react';
import { useState,useEffect } from 'react';
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
     
  const [signup, setsignup] = useState(false);



  const FormButton = props => (
    <div id="button" className="row">
      <button onClick={()=>{signUpFetch(firstName,lastname,language,email,password,passwordVerification)}}>{props.title}</button>
    </div>
  );

// useEffect(() => {
//   signUp(firstName,lastname,language,email,password,passwordVerification)
// }, [signup]); // Only re-subscribe if props.friend.id changes


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

      <FormButton title="sign up"  />
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
function signUpFetch(firstName,lastname,language,email,password,passwordVerification){
if(password!=passwordVerification){
  return alert("passwordVerification must match password ")
}
var newUser = {
  firstName:firstName
  ,lastname:lastname
  ,language:language
  ,email:email
  ,password:password
};
fetch('/api/users', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(newUser)
})
.then((response)=>{
 
  if(response.status==200&&response.ok){
    return response.json
  }
  else{
    throw new Error()
  }
}

).then((response)=>{
  alert(response.userName);
  
})


  .catch(reson=>{
    alert('לא הצלחתנו לאתר משתמש זה ודא כי שם המשתמש והסיסמא תקינים')}
    )
}


