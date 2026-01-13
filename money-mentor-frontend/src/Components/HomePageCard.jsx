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

function HomePageCard(props){
    return (
        <ThemeProvider theme="theme">
        <Box className="MainPage-card-container"> 
            <Box sx={{height:'200px', width:'150px'}}className="MainPage-card-theCard"> 
                <Box sx={{backgroundColor:'background.secondary'}} className="MainPage-card-front">  
                    <Typography> {props.frontText} </Typography>
                </Box>
                <Box sx={{backgroundColor:'background.tertiary'}}className="MainPage-card-back"> 
                    <Typography> {props.backlink} </Typography>
                </Box>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default HomePageCard;