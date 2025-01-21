import { ThemeProvider, createTheme } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";



export const CustomTheme = ({ children }) => {
      const [mode, setMode] = useState('light');


      useEffect(() => {
            const storedTheme = localStorage.getItem('themeMode');
            setMode(storedTheme);

      }, [])

      const toggleTheme = () => {
            const newTheme = mode === 'light' ? 'dark' : 'light';
            setMode(newTheme);
            localStorage.setItem('themeMode', newTheme);
      }

      // creating theme object light & Dark Theme 
      const lightTheme = createTheme({
            palette: {
                  mode: 'light',
                  primary: {
                        main: '#f05',
                  },
                  background: {
                        default: '#ffffff'
                  }
            }
      });

      const darkTheme = createTheme({
            palette: {
                  mode: 'dark',
                  primary: {
                        main: '#F4F4F4',
                  },
                  background: {
                        default: '#121212'
                  }
            }
      });

      const theme = mode === 'light' ? darkTheme : lightTheme;


      return (
            <ThemeContext.Provider value={{ mode, toggleTheme, }}>
                  <ThemeProvider theme={theme}>
                        {children}
                  </ThemeProvider>
            </ThemeContext.Provider>
      )
}