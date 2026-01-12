import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  ThemeProvider
} from '@mui/material';
import { Link } from 'react-router-dom';
import '../../styles.css';

function HomePageCard(){
    return (
        <ThemeProvider theme="theme">
        <Box sx={{
            backgroundColor: 'background.primary',
            height: '300px',
            width: '250px'
        }}>

        </Box>
        </ThemeProvider>
    )
}

export default HomePageCard;