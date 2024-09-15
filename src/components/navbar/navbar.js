import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorTemporaryDrawer from '../sidebar/sidebar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
         <p> Add Speaker</p>
        </Toolbar>
       
      <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
    </Box>
  );
}
