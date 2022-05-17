const SIGNUP = 'SIGN-UP';

export default function signUpAction(response) {
   debugger
   let user = {

      firstname: response.firstname,
      lastname: response.lastname,
      language: response.language,
      email: response.email,
      password: response.password,
      alerts:response.alerts

}   

   return { 
      type: SIGNUP,
      user
   }
} 