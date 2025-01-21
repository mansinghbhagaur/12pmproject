import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../theme/ThemeContext';

export default function Header() {
      const { mode, toggleTheme } = useThemeContext();
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                        <Toolbar>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Todo App
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                              <IconButton onClick={toggleTheme} color='inherit'>
                                    {mode === 'light' ? <LightMode /> : <DarkMode />}
                              </IconButton>
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}
