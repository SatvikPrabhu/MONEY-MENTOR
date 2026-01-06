import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {useState} from 'react';
import SliderWithHeading from '../Components/LoanPage/SliderWithHeading';

function LoanPage() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
        },
        palette: {
            background: {
                main: "#a2b0bbff"
            },
            foreground: {
                main: "#db8fd6ff"
            }
        },
    });

    const [values, valueSetter] = useState({
        amt : 40000, tenure: 80, rate: 2.5
    });

    function handleAmountChange(event, newValue) {
    valueSetter({
        ...values,
        amt: newValue
    });
}

function handleTenureChange(event, newValue) {
    valueSetter({
        ...values,
        tenure: newValue
    });
}

function handleRateChange(event, newValue) {
    valueSetter({
        ...values,
        rate: newValue
    });
}

function monthToYear(months) {
    let result = "";
    if(months === 12) return "1 year";
    if(months%12 === 0) {
        result = months/12 + " years";
    } else {
        result = Math.floor(months/12) + " years, " + months%12 + " months";
    }

    return result;
}
    return (
        <div> 
            <ThemeProvider theme={theme}>
                <Typography variant="h4" sx={{ fontSize: '3rem', textAlign:'center', mt: 8}}>
                    Loan Calculator
                </Typography>
                <Box sx={{
                    position: 'relative',
                    top: 80,
                    left: 250,
                    width: 700,
                    borderRadius: 2,
                    display: 'flex',
                    bgcolor: 'background.main',
                    flexDirection: 'column',
                    alignItems: 'left',
                    p: 3
                }}> 
                    <SliderWithHeading 
                        heading="Loan Amount (INR)"
                        displayVal={"₹" + values.amt} 
                        defaultVal='40000' 
                        Slide={handleAmountChange} 
                        maxlim={100000} minlim={5000} incr={100}
                    />
                    <SliderWithHeading 
                        heading="Loan Tenure (months)" 
                        displayVal={monthToYear(values.tenure)} 
                        defaultVal='50' 
                        Slide={handleTenureChange}
                        maxlim={84} minlim={12} incr={1}
                    />
                    <SliderWithHeading 
                        heading="Interest Rate" 
                        displayVal={values.rate + "%"} 
                        defaultVal='50'
                        Slide={handleRateChange}
                        maxlim={15} minlim={2.5} incr={0.75}
                    />
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default LoanPage;