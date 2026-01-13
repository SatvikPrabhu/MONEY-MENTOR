import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import HomePageCard from '../Components/HomePageCard';

const theme = createTheme({
            typography: {
                fontFamily: 'Poppins, Arial, sans-serif',
    
            },
            palette: {
                background: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                    tertiary:"#a6757a"
    
                },
                foreground: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                },
                text: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                }
            },
        });

function Home() {
    useEffect(() => {
        const appContainer = document.getElementById('app-container');
        if (appContainer) {
            appContainer.style.backgroundColor = theme.palette.background.primary;
        }

        return () => {
            if (appContainer) {
                appContainer.style.backgroundColor = '#F4E1C6';
            }
        };
    }, []);
  return (
    <ThemeProvider theme={theme}>
    <Box >
        <Box> 
        {/* Intro */ }
        </Box>

        <Box sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
            padding: 5,
            minHeight: '400px'}}>
                <HomePageCard frontText="LEARN"/>
                <HomePageCard frontText="PLAN"/>
                <HomePageCard frontText="TRACK"/>
        </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Home;
