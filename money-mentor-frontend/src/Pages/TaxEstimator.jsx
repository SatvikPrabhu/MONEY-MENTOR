import {Button, Box, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRef } from "react";
import IntroductionToFeature from "../Components/IntroductionToFeature";

function TaxEstimator() {
    const formSectionRef = useRef(null);    
    const scrollToForm = () => {
        formSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };      

    const theme = createTheme({
            typography: {
                fontFamily: 'Poppins, Arial, sans-serif',
    
            },
            palette: {
                background: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
    
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

    return <div> 
        <ThemeProvider theme={theme}>
    <IntroductionToFeature 
        title="Tax Estimator"
        description="Calculate your estimated income tax based on your salary, deductions, and investments. Get instant results and plan your finances better."
        caption="Free • No registration required • Takes 2 minutes"
        scrollFN={scrollToForm}        
    />
    
    <Box 
        ref={formSectionRef}  
        sx={{
            mt: 10,  
            mb: 5,
            display: 'flex', 
            justifyContent: 'center', 
            gap: 30,  
            minHeight: 500  
        }}
    >
        {/*Personal Section*/}
        <Box sx={{
            width: 500,
            borderRadius: 2,
            display: 'flex',
            bgcolor: 'background.primary',
            color: 'text.secondary',
            flexDirection: 'column',
            p: 3,
            boxShadow: 2  
        }}>  
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Personal Details
            </Typography>
            
        </Box>
        
        {/* Income/Deductions Section */}
        <Box sx={{
            width: 500,
            borderRadius: 2,
            display: 'flex',
            bgcolor: 'background.primary',
            color: 'text.secondary',
            flexDirection: 'column',
            p: 3,
            boxShadow: 2
        }}>  
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Income & Deductions
            </Typography>
            
        </Box>
    </Box>
</ThemeProvider>
    </div>;
}

export default TaxEstimator;