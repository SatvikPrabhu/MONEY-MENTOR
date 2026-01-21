import {Button, Box, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRef, useState } from "react";
import IntroductionToFeature from "../Components/IntroductionToFeature";
import AgeSlider from "../Components/TaxEstimator/AgeSlider";
import ResidentialSwitch from "../Components/TaxEstimator/ResidentialSwitch";
import FinancialYearDropdown from "../Components/TaxEstimator/FYDropdown";
import SalarySlider from "../Components/TaxEstimator/SalarySlider";

function TaxEstimator() {
    const formSectionRef = useRef(null); 
    const [ageGroup, setAgeGroup] = useState(1);
    const [isNRI, setIsNRI] = useState(false);
    const [financialYear, setFinancialYear] = useState('2024-2025');
    const[salary, setSalary] = useState(500000);

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
        helperText="Below mentioned is some theory about how taxes work in our country. To head straight to the taxes estimator, click this button below."
        scrollFN={scrollToForm}        
    />
    <Box>
        {/* TAXES THEORY */}
    </Box>
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
            <Box>
                <AgeSlider value={ageGroup} onChange={setAgeGroup} />
            </Box>
            <Box> 
                <ResidentialSwitch value={isNRI} onChange={setIsNRI} />
            </Box>
            <Box> 
                <FinancialYearDropdown value={financialYear} onChange={setFinancialYear} />
            </Box>
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

            <Box sx={{ mb: 3 }}>
            <SalarySlider value={salary} onChange={setSalary} />
            </Box>
            
            
        </Box>
    </Box>
</ThemeProvider>
    </div>;
}

export default TaxEstimator;
