import { render } from '@testing-library/react';
import react, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/signIn.css';
import { useHistory } from "react-router-dom";


export default function SignInForm() {

  return (
    <div id="signInform">
      <FormHeader title="signIn" />
      <Form />
      <OtherMethods />
    </div>
  )
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


function Form(props) {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const history=useHistory();
  const FormButton = props => (
    
    <div id="button" className="row">
      <button onClick={() => {
       
       const user= signIn(userName,password);
        if(user){
          history.push('/signup')
        }

      }}>{props.title}</button>
    </div>
  );

  return (
  <div id="container">
    <FormInput description="userName" placeholder="Enter your userName" type="text"
      value={userName}
      setValue={setuserName} />
    <FormInput description="password" placeholder="Enter your password" type="password"
    value={password} setValue={setpassword}
      />

    <FormButton title="Log in" />
    {/* //<link>signUp</link> */}
  </div>
  )
}


;



const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}  value={props.value}
      onChange={(e) => props.setValue(e.target.value)} />
  </div>
);

const OtherMethods = props => (
  <div id="alternativesignIn
">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

//ReactDOM.render(<App />, document.getElementById('container'));
async function signIn(userName,password){
  
  console.log(userName,password)

  
fetch('api/users/'+{userName}+'/'+{password})
.then((response)=>{
  if(response.status==200&&response.ok){
    return response.json
  }
  else{
    throw new Error()
  }
}

)


  .catch(reson=>{
    alert('לא הצלחתנו לאתר משתמש זה ודא כי שם המשתמש והסיסמא תקינים')}
    )
}