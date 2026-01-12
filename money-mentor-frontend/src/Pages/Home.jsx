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
import '../../styles.css';

const theme = createTheme({
            typography: {
                fontFamily: 'Poppins, Arial, sans-serif',
    
            },
            palette: {
                background: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                    teriary:"#d3c5b2ff"
    
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
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Box sx={{
        backgroundColor: 'background.primary',
      }}>
        <p>first</p>
      </Box>
      <Box sx={{
        backgroundColor: 'background.primary',
      }}>
        <p>second</p>
      </Box>
      <Box sx={{
        backgroundColor: 'background.primary',
      }}>
        <p>third</p>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Home;
