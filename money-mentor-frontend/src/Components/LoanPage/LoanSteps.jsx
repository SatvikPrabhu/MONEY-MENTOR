import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function LoanSteps({steps})
{
    return (<Box sx={{ width: "100%", padding: "37px 0px 0px 0px"}}>
                <Stepper alternativeLabel activeStep={6}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>))}
                </Stepper>
            </Box> );
}

export default LoanSteps;