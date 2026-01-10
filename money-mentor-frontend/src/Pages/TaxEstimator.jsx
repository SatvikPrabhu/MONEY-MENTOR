import {Button, Box, Typography} from "@mui/material";
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
    return <div> 
        <IntroductionToFeature 
            title="Tax Estimator"
            description="Calculate your estimated income tax based on your salary, 
                deductions, and investments. Get instant results and plan 
                your finances better."
            caption="Free - No registration required - Takes 2 minutes"
            scrollFN={scrollToForm}        
        />
        <Box ref={formSectionRef} sx={{height:1000}}>

        </Box>
    </div>;
}

export default TaxEstimator;