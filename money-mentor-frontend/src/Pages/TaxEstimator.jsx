import {Button, Box, Typography} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRef, useState } from "react";
import IntroductionToFeature from "../Components/IntroductionToFeature";
import AgeSlider from "../Components/TaxEstimator/AgeSlider";
import ResidentialSwitch from "../Components/TaxEstimator/ResidentialSwitch";
import FinancialYearDropdown from "../Components/TaxEstimator/FYDropdown";
import SalarySlider from "../Components/TaxEstimator/SalarySlider";
import CustomTable from "../Components/customTable";
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
                    teriary:"#d3c5b2ff"
    
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
        backgroundboxsx={{
            height: 500, 
            backgroundColor: '#3a6890e1', 
            width: 1200, 
            marginTop: 10,
            marginLeft: 'auto',       
            marginRight: 'auto',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',      
            alignItems: 'center',         
            justifyContent: 'center',     
            p: 5,
            color: 'white',
            boxShadow: 3
        }}
        btnsx={{
                backgroundColor: '#94bfe4e1', 
                mt:2,
                mb:5,
                height: 80, 
                width: 250, 
                fontSize: '1.7rem',
                fontWeight: 'bold',
                color: '#1a3a52',
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': { 
                    backgroundColor: '#7aa8c9',
                    boxShadow: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s'
                }
            }}
        description="Calculate your estimated income tax based on your salary, deductions, and investments. Get instant results and plan your finances better."
        caption="Free • No registration required • Takes 2 minutes"
        helperText="Below mentioned is some theory about how taxes work in our country. To head straight to the taxes estimator, click this button below."
        btntext="Get Started!"
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
            px:20,
            pt:5, 
            borderRadius: 2, 
            mt:4,
            mb: 4,
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
            
            <Box sx={{ mb: 4, mt:2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Slabs
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontSize:20}}>
                    Tax slabs are predefined income ranges, where each range is taxed at a specific rate.
                    <br/>
                    Your entire income is not taxed at one single rate. Instead, different portions of your income are taxed a`t different rates as you move through the slabs.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        New Tax Regime Slab Rates (FY 2024-25)
                    </Typography>

                    <Typography sx={{ fontSize: 20, mb: 3 }}>
                        Under the New Tax Regime, income is taxed progressively based on predefined slabs.
                        These slab rates apply uniformly to all individuals, regardless of age.
                    </Typography>
                    <Box sx={{px:25}}>
                        <CustomTable 
                            headers={['Annual Taxable Income', 'Tax Rate']}
                            data={[
                                ['Up to ₹3,00,000', 'Nil'],
                                ['₹3,00,001 - ₹6,00,000', '5%'],
                                ['₹6,00,001 - ₹9,00,000', '10%'],
                                ['₹9,00,001 - ₹12,00,000', '15%'],
                                ['₹12,00,001 - ₹15,00,000', '20%'],
                                ['₹15,00,001+', '30%']
                            ]
                            }
                        />
                    </Box> 
                </Box>
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
