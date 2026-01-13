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
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2
            }} 
            className="MainPage-card-container"> 
            <Box sx={{
                height:'300px', 
                width:'200px', 
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="MainPage-card-theCard"> 
                    <Box sx={{
                    backgroundColor:'background.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    borderRadius:3
                    }} className="MainPage-card-front">  
                        <Box>
                            <Typography variant="h5" sx={{fontFamily: 'Cinzel', fontWeight:800, color:'foreground.primary'}}> 
                                {props.frontText} 
                            </Typography> 
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor:'background.tertiary', borderRadius:3}}className="MainPage-card-back"> 
                        <Typography> {props.backlink} </Typography>
                    </Box>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default HomePageCard;