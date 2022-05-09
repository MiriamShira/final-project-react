post<boolean>('Borrower/AthoticateUser',myUser)
.then(res=>{
    debugger
     alert("athorize")
     if(user.theData.userType==2){
     history.push("athoticateBank");
   }
  if(user.theData.userType==1){
    history.push("athoticateBorrower");
 }
  })
  .catch(reson=>alert('לא הצלחתנו לאתר משתמש זה ודא כי שם המשתמש והסיסמא תקינים'))
 
 