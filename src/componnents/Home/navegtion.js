import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { useHistory } from "react-router-dom";
import { linkClasses } from '@mui/material';
import { Link } from 'react-router-dom';


function Relocate(props) {
  console.log("hi");
  const history = useHistory();
  switch (props.newValue) {
    
    case 0:debugger;
      history.push('/');
      break;
      case 1:
        history.push('/');
        break;
        case 2:
          history.push('/signup');
          break;
    default:
      history.push('/signin');

      break;
  }
}
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
          return (<Relocate newValue={newValue}/>)
        }}
      >
        <BottomNavigationAction label="Home" icon={<FoodBankIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Manage Account" icon={<ManageAccountsIcon />} component={Link} to="/" />
        <BottomNavigationAction label="sign-up" icon={<PersonAddAlt1Icon />}  component={Link} to="/signup" />
        <BottomNavigationAction label="sign-in" icon={<PersonIcon />} component={Link} to="/signin"/>
      </BottomNavigation>
    </Box>
  );
}
