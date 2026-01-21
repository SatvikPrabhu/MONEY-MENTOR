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
                height:'400px', 
                width:'260px', 
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
                            <Typography variant="h3" sx={{ fontWeight:800, color:'foreground.primary'}}> 
                                {props.frontText} 
                            </Typography> 
                        </Box>
                    </Box>
                    <Box sx={{backgroundColor:'background.tertiary', 
                        borderRadius:3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        padding: 3,
                        gap: 3 }}
                        className="MainPage-card-back"> 
                        {props.buttons?.map((button, index) => (
                            <Box key={index} sx={{ width: '100%' }}>
                                <Button
                                    component={Link}
                                    to={button.link || '/'}
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        borderColor: 'background.secondary',
                                        color: 'background.secondary',
                                        backgroundColor:'background.primary',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        padding: '10px 28px',
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        borderWidth: 2,
                                        '&:hover': {
                                            borderWidth: 2,
                                            backgroundColor:'background.secondary',
                                            borderColor: 'background.primary',
                                            color: 'background.primary',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.2s ease',
                                        ...button.sx
                                    }}
                                >
                                    {button.text}
                                </Button>
                            </Box>
                        ))}
                    </Box>
            </Box>
        </Box>
        </ThemeProvider>
    )
}

export default HomePageCard;