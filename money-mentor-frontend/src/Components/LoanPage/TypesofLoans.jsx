// import { styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LoanPageCard from "./LoanPageCard";

function TypesofLoans()
{
    return ( 
        <div>
        <div className="loans-div">
            <p className="loans-p">LET'S EXPLORE</p>
            <h1 className="loans-h1">TYPES OF LOANS</h1>
        </div>
        <div className="loan-cards">
            <LoanPageCard icon={<HomeIcon/>} title="HOME LOAN" para="for buying a house"/>
            <LoanPageCard icon={<SchoolIcon/>} title="EDUCATION LOAN" para="for financing your education"/>
            <LoanPageCard icon={<PersonIcon/>} title="PERSONAL LOAN" para="for your personal needs"/>
            <LoanPageCard icon={<TimeToLeaveIcon/>} title="CAR LOAN" para="for purchasing a car"/>
            <LoanPageCard icon={<AutoAwesomeIcon/>} title="GOLD LOAN" para="loan against gold"/>
        </div>
        </div>
    )
}

export default TypesofLoans;