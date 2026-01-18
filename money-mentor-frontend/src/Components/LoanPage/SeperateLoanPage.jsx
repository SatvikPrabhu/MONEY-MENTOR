import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useParams} from "react-router-dom";
import LoanSteps from './LoanSteps';

function SeperateLoanPage(){

    const {loanType} = useParams();

    const loanInfo = {
        home : {
            title: " 🏠  HOME LOAN ",
            content: " A home loan is a long‑term loan provided by banks to help individuals buy, build, or renovate a house. The loan is repaid in monthly installments over several years. ",
            contentHeading: " ⦿ HOW A HOME LOAN WORKS ",
            steps: ["CHOOSE PROPERTY AND LOAN AMOUNT",
        "CHECK ELIGIBILITY",
        "SUBMIT APPLICATION AND DOCUMENTS",
        "BANK VERIFICATION",
        "LOAN APPROVAL",
        "DISBURSEMENT",],
        },

        education : {
            title: " 📚  EDUCATION LOAN",
            content: " An education loan is provided by banks to help students finance their higher studies in India or abroad. It covers tuition fees, living expenses, books, and other education-related costs. The loan is usually repaid after completion of studies.",
            contentHeading: " ⦿ HOW AN EDUCATION LOAN WORKS ",
            steps: [ "CHOOSE COURSE AND INSTITUTE",
    "ESTIMATE TOTAL EDUCATION COST",
    "CHECK ELIGIBILITY",
    "SUBMIT APPLICATION AND DOCUMENTS",
    "LOAN SANCTION",
    "DISBURSEMENT AS PER COURSE REQUIREMENT"],
        },

        personal: {
            title: " 👤  PERSONAL LOAN",
            content: " A personal loan is an unsecured loan offered by banks to meet personal financial needs such as medical expenses, travel, or emergencies. It does not require any collateral and is repaid through fixed monthly installments. ",
            contentHeading: " ⦿ HOW A PERSONAL LOAN WORKS ",
            steps: [ "DETERMINE LOAN REQUIREMENT",
    "CHECK ELIGIBILITY AND CREDIT SCORE",
    "APPLY FOR THE LOAN",
    "DOCUMENT VERIFICATION",
    "LOAN APPROVAL",
    "AMOUNT CREDITED TO ACCOUNT" ],
        },

        car: {
            title: " 🚘  CAR LOAN",
            content: " A car loan is offered by banks to help individuals purchase a new or used vehicle. The vehicle itself acts as collateral, and the loan is repaid in monthly installments over a fixed tenure. ",
            contentHeading: " ⦿ HOW A CAR LOAN WORKS ",
            steps: [ "SELECT VEHICLE",
    "CHECK LOAN ELIGIBILITY",
    "APPLY FOR CAR LOAN",
    "DOCUMENT AND VEHICLE VERIFICATION",
    "LOAN APPROVAL",
    "PAYMENT TO DEALER"],
        },

        gold: {
            title: " 🌟  GOLD LOAN",
            content: " A gold loan is a secured loan where borrowers pledge their gold jewelry as collateral to get instant funds. It offers quick processing and flexible repayment options. ",
            contentHeading: " ⦿ HOW A GOLD LOAN WORKS ",
            steps: [ "SUBMIT GOLD ORNAMENTS",
    "GOLD VALUATION",
    "LOAN AMOUNT FINALIZATION",
    "DOCUMENT VERIFICATION",
    "LOAN APPROVAL",
    "CASH OR BANK TRANSFER"],
        },
    }

    const loan = loanInfo[loanType];

    if (!loan) {return <p>Loan not found</p>;}

    return (<Box>
        <Box sx={{display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "40px 90px 30px 70px",
                margin: "20px 20px 20px 20px ",
                border: " 3px solid #5B122D"}}>
            <h1 className="loan-page-h1">{loan.title}</h1>
            <Box sx={{ display: "flex",
                flexDirection: "row",
                gap: 6,

            }}>
                <Button  variant="contained" sx={{ backgroundColor: "#5B122D", 
                    color: "#F4E1C6", 
                    height: "50px", 
                    width: "140px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                    fontWeight: "500", 
                    borderRadius: "7%", 
                    }}>Eligibility</Button>
                <Button variant="contained" sx={{ backgroundColor: "#5B122D", 
                    color: "#F4E1C6", 
                    height: "50px", 
                    width: "140px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                    fontWeight: "500", 
                    borderRadius: "7%",}}>Documents</Button>
            </Box>
        </Box>
        <Box sx={{backgroundColor: "#5B122D",
            color: "#F4E1C6",
            padding: "40px 70px 40px 70px",
            height: "150px",
            display: " flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            fontFamily: "sans-serif",
        }}>
            {loan.content}
        </Box>
        <Box sx={{color: "#5B122D",
            padding: "40px 40px 40px 40px",
        }}>
            <h3 className="loan-page-h3">{loan.contentHeading}</h3>
            <LoanSteps steps={loan.steps}/>
        </Box>
    </Box>);
}

export default SeperateLoanPage;