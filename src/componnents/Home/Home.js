import React from 'react';
import ImageUpload from './uploadingimage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { FileUploadDemo } from './uplodePrime';
import SimpleBottomNavigation from './navegtion'
import SimpleDialogDemo from './dialogAlergens'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FormDialogNutritionalFact from './dialogNutrition';
import { flexbox } from '@mui/system';
import { FormatAlignJustify } from '@mui/icons-material';
import { Tab, Tabs, Stack } from '@mui/material';
import UploadAndDisplayImage from './image';
import TextField from '@mui/material/TextField';
import { FileUpload } from 'primereact/fileupload';
import "primeicons/primeicons.css";

import store from '../../Store/store'
const Input = styled('input')({
  display: 'none',
});
export default function Home() {

  const chooseOptions = { label: 'Choose', icon: 'pi pi-fw pi-plus' };
  const uploadOptions = { label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success' };
  const cancelOptions = { label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger' };

  function myUploader(params) {
    console.log("object");
  }

  // let path = window.location.href;

  // useEffect(() => {
  //   debugger
  //   alert("changed");
  // }, [window.location.href]);
  const [barcode, setbarcode] = useState(0);
  const email = store.getState().user.email;
  const password = store.getState().user.password;
  //||store.getSate().tmpUser
  function uplodeBarcode() {

    fetch(`http://localhost:4020/api/users/byBarcode/${barcode}/${email}`)
      .then((response) => {
        if (response.status == 200 && response.ok)
          return response.json();
      }).then((res) => {
        alert(res)
      }

      ).catch((err) => {
        alert(err)
      })

  }
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
          <FileUploadDemo />
          <TextField type="text" placeholder='enter barcode:' onChange={(e) => {
            setbarcode(e.target.value)
          }} ></TextField>
          <Button onClick={uplodeBarcode}> click to get info </Button>
          {/* <UploadAndDisplayImage></UploadAndDisplayImage> */}
          {/* < ImageUpload />*/}
          {/* 
          <FileUpload name="demo[]" url="./upload"
           chooseOptions={chooseOptions} uploadOptions={uploadOptions}
            cancelOptions={cancelOptions} uploadHandler={myUploader} /> */}

          <Tabs aria-label="basic tabs example">
          </Tabs>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <SimpleDialogDemo sx={{ margin: 2 }} flexItem />

            <FormDialogNutritionalFact flexItem />



          </Stack>

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
