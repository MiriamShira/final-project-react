import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AllergensForm from '../../componnents/SignUp/collapsible/allergens';
import store from '../../Store/store'
import { fetchUser } from '../../api/fetch';

import saveTmpAction from '../../Store/Actions/saveTmpUserAction';
import signUpAction from '../../Store/Actions/SignUpAction';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };
  const handleSave = () => {
    // check if there is an exsisting user outerwise saves info to database
  if(store.getState().user.firstname===''){
      //action to save allerens for tmpUser.
      let tmpUser=store.getState().tmpUser;
      tmpUser.alerts.allergens=store.getState().allergensToSave;
    
        fetchUser(tmpUser,'POST').then((response )=>{
            debugger
            console.log(response);
            store.dispatch(saveTmpAction(response))
            console.log('new state: ', store.getState().tmpUser)
            alert("saved  allergens to tmp user ");

        })
  }
  else{
    let User=store.getState().user;
    User.alerts.allergens=store.getState().allergensToSave;
  
      fetchUser(User,'POST').then((response )=>{
          debugger
          console.log(response);
          store.dispatch(signUpAction(response))
          console.log('new state: ', store.getState().user)
          alert("saved  allergens to user ");

      })
  }
        setOpen(false);
      };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        set Allergens
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Allergens</DialogTitle>
        <DialogContent>
          <DialogContentText>
         please choose allergens you would like to be alerted about!
          </DialogContentText>
          <AllergensForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleSave}>save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
