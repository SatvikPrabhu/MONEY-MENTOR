import React from "react";
import { AppBar, Toolbar, Box, Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header >  
            <Toolbar>
                <Link to="/home">
                <Box
                component="img"
                src="/Logo-removebg-preview.png"
                alt="Company Logo"
                sx={{ height: 180, mr: 2, margin:0}}
                />
                </Link>
            <Box sx={{ display: 'flex', gap: 3 }} >
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#F4E1C6', 
                        color: "#5B122D",
                        '&:hover': {
                            backgroundColor: '#FFF3E7' 
                        }
                    }}
                    component={Link} 
                    to="/loanpage">
                    Calculator
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: 'flex', gap: 3 }} >
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#F4E1C6', 
                        color: "#5B122D",
                        '&:hover': {
                            backgroundColor: '#FFF3E7' 
                        }
                    }}
                    component={Link} 
                    to="/login">
                    LOG-IN
                </Button>
                            <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#F4E1C6', 
                        color: "#5B122D",
                        '&:hover': {
                            backgroundColor: '#FFF3E7' 
                        }
                    }}
                    component={Link} 
                    to="/signup">
                    SIGN-UP
                </Button>
            </Box>
            {/* Remaining header content */}
        </Toolbar>
        </header>);
}

export default Header;