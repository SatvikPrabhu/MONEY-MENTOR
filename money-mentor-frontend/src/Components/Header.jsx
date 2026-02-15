import React from "react";
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeLogo from "./HomePage/HomeLogo";

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
       <AppBar position="fixed" 
        sx={{ 
            backgroundColor: 'background.primary', 
            boxShadow: 'none', 
            height: 100,
            borderBottom: '2px solid #350b1a'
             }}>
        <Toolbar 
            sx={{ 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                height: '100%' 
                }}>
                <HomeLogo/>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {token ? (
                        <Button
                            onClick={handleLogout}
                            variant="outlined"
                            sx={{
                                backgroundColor: 'background.primary',
                                color: 'background.secondary',
                                borderColor: 'background.secondary',
                                fontFamily: 'Poppins',
                                '&:hover': {
                                    backgroundColor: 'background.secondary',
                                    color: 'background.primary',
                                    borderColor: 'background.secondary'
                                }
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                to="/login"
                                variant="outlined"
                                sx={{
                                    backgroundColor: 'background.primary',
                                    color: 'background.secondary',
                                    borderColor: 'background.secondary',
                                    fontFamily: 'Poppins',
                                    '&:hover': {
                                        backgroundColor: 'background.secondary',
                                        color: 'background.primary',
                                        borderColor: 'background.secondary'
                                    }
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                component={Link}
                                to="/signup"
                                variant="contained"
                                sx={{
                                    backgroundColor: 'background.tertiary',
                                    color: 'background.secondary',
                                    fontFamily: 'Poppins',
                                    '&:hover': {
                                        backgroundColor: 'background.secondary',
                                        color: 'background.primary'
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;