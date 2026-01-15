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
import HomePageCard from '../Components/HomePage/HomePageCard';
import IntroductionToFeature from '../Components/IntroductionToFeature';

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
        <Box sx={{height:'100vh', display:'flex', alignItems:'center'}}> 
            <IntroductionToFeature/>
        </Box>

        <Box sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
            padding: 5,
            minHeight: '400px',
            height:'100vh'}}>
                <HomePageCard 
                    frontText="LEARN"
                    buttons={[
                    {
                        text: 'Loans',
                        link: '/loanpage'
                    },
                    {
                        text: 'Accounts',
                        link: '/resources'
                    },
                    {
                        text: 'Taxes',
                        link: '/taxestimator'
                    }
                ]} />
                <HomePageCard 
                    frontText="PLAN"
                    buttons={[
                    {
                        text: 'Budget Planner',
                        link: '/budgetplanner'
                    },
                    {
                        text: 'Loan Calculator',
                        link: '/resources'
                    },
                    {
                        text: 'Tax Estimator',
                        link: '/taxestimator'
                    }
                ]} />
                <HomePageCard 
                    frontText="TRACK"
                    buttons={[
                    {
                        text: 'Dashboard',
                        link: '/budgetplanner'
                    },
                    {
                        text: 'Transaction',
                        link: '/resources'
                    },
                    {
                        text: 'Quizzes',
                        link: '/taxestimator'
                    }
                ]} />
        </Box>
    </Box>
    </ThemeProvider>
  );
}

export default Home;
