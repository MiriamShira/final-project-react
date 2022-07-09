const SAVETMP = 'SAVE-TMP';

export default function saveTmpAction(response) {
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
      type: SAVETMP,
      user
   }
} 