import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NutritionalFact from '../SignUp/collapsible/nutritionalFact'
export default function FormDialogNutritionalFact() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };

  
  const handleSave = () => {
// check if there is an exsisting user outerwise saves info to database
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        set NutritionalFact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Allergens</DialogTitle>
        <DialogContent>
          <DialogContentText>
         please choose NutritionalFact values  you would like to be alerted about!
          </DialogContentText>
          <NutritionalFact/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleSave}>save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
