import {TextField,Fab, Tooltip,Modal,Box,styled, Typography, Avatar } from "@mui/material";
import React from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { useState } from "react";
import { Stack } from "@mui/system";
import {Image} from "@mui/icons-material";
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';

const StyleModal=styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const UserBox=styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
  
})

const Add = () => {
  const [open,setOpen]= useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)}
      title="Delete">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
     
<StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box 
  width={400} 
  bgcolor={"background.default"} 
  color={"text.primary"}
  height={280}
   borderRadius={5}
    p={3}>
    <Typography variant="h6" color="purple" textAlign="center">Create post
    </Typography>
    <UserBox>
      <Avatar
      src=""
      sx={{width:30,height:30}}
      />
      <Typography fontWeight={500} variant="span" >Shezan Mahbub</Typography>
    </UserBox>
    <TextField
          id="standard-helperText"
         sx={{width:"100%"}}
          placeholder="What's on your mind?"
       rows={3}
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary"/>
          <Image color="secondary"/>
          <VideoCameraBack color="success"/>
          <PersonAdd color="error"/>

        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained"
        aria-aria-level="outlined primary button group">
<Button>Post</Button>
<Button sx={{width:"100px"}}>
  <DateRange></DateRange>
</Button>

        </ButtonGroup>

  </Box>
</StyleModal>
    </>
  );
};

export default Add;
