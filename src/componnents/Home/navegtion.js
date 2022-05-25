import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
import FoodBankIcon from '@mui/icons-material/FoodBank';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<FoodBankIcon />} />
        <BottomNavigationAction label="Manage Account" icon={<ManageAccountsIcon />} />
        <BottomNavigationAction label="sign-up" icon={<PersonAddAlt1Icon />} />
        <BottomNavigationAction label="sign-in" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
