import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import './style.css';
function RegisterPage() {
  return (
    <div className='mx-3'>
      <h6 style={{color:'gray'}}>We will need...</h6>
      <Box className="mt-3 mb-3" sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField color="secondary" fullWidth variant='standard' label="Email" id="standard-basic" />
      </Box>
     <Box className="mt-3 mb-3" sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField color="secondary" fullWidth variant='standard' label="Email" id="standard-basic" />
      </Box>
      <Box className="mt-3 mb-3" sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField  color="secondary" fullWidth variant='standard' label="Password" id="standard-basic" />
      </Box>
      <Box className="mt-3 mb-3" sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField  color="secondary" fullWidth variant='standard' label="Confirm Password" id="standard-basic" />
      </Box>
      <button className='btnDesign'>Sign up</button>
    </div>
  )
}
export default RegisterPage;
