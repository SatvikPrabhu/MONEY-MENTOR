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
                <Box sx={{ textAlign: 'center', mb: 6 , mt:10}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>
                Understanding Income Tax
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.primary', opacity: 0.8 }}>
                Everything you need to know about tax calculations in India
            </Typography>
        </Box>

        <Box sx={{ 
            color: 'text.primary',
            pl: 10,
            pr:10,
            pt:5, 
            borderRadius: 2, 
            mt:4,
            mb: 4,
            boxShadow: 2
        }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            What is the new tax regime?
            </Typography>
            <Typography sx={{fontSize:20}}>
                The New Tax Regime is a simplified income tax system introduced by the Government of India to make tax calculation easier and more transparent. It offers lower tax slab rates compared to the Old Tax Regime but removes most exemptions and deductions.
                <br/>
                <br/>
                From FY 2023-24 onwards, the New Tax Regime is the <strong>default</strong> tax regime for individual taxpayers. However, taxpayers can still choose the Old Tax Regime if it is more beneficial for them.
            </Typography>
            {/* Old Regime */}
            <Box sx={{ mb: 4, mt:2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Slabs
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Tax slabs are predefined income ranges, where each range is taxed at a specific rate.
                    <br/>
                    Your entire income is not taxed at one single rate. Instead, different portions of your income are taxed at different rates as you move through the slabs.
                </Typography>
            {/* Add table or list of tax slabs here */}
            </Box>
        </Box>
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
