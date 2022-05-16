const SIGNIN = 'SIGN-IN';

export default function signInAction(response) {
   debugger
   let user = {

      firstName: response.firstname,
      lastname: response.lastname,
      lastname: response.lastname,
      language: response.language,
      email: response.email,
      password: response.password,
      alerts:response.alerts

}
   return {
      type: SIGNIN,
      user
   }
}