import React from 'react';
import ImageUpload from './uploadingimage';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { FileUploadDemo } from './uplodePrime';
import SimpleBottomNavigation from './navegtion'
import SimpleDialogDemo from './dialogAlergens'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import  FormDialogNutritionalFact from './dialogNutrition';
const Input = styled('input')({
  display: 'none',
});
export default function Home() {
  // let path = window.location.href;

  // useEffect(() => {
  //   debugger
  //   alert("changed");
  // }, [window.location.href]);

  return (
    <div>
      <Card sx={{ minWidth: 275, maxWidth: 600, display: 'inline-block', margin: 5, minHeight: 700 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography> */}
          <CardActions sx={{ marginBottom: 2 }} >
            <SimpleBottomNavigation />

          </CardActions>
          <h2>upload barcode camera scan</h2>
           <FileUploadDemo/>  
         {/* < ImageUpload />*/}
<SimpleDialogDemo></SimpleDialogDemo>
<FormDialogNutritionalFact/>
        </CardContent>

      </Card>

      {/* <Box
    component="span"
    sx={{ display: 'inline-block', mx: '12px'}}
  >
       <SimpleBottomNavigation/>
      < ImageUpload/>
  </Box> */}


    </div>
  );
}
