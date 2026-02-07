// import { styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LoanPageCard from "../Components/LoanPage/LoanPageCard";

function TypesofLoans()
{
    return ( 
        <div>
        <div className="loans-div">
            <p className="loans-p">LET'S EXPLORE</p>
            <h1 className="loans-h1">TYPES OF LOANS</h1>
        </div>
        <div className="loan-cards">
            <LoanPageCard icon={<HomeIcon sx={{fontSize:70}}/>} title="HOME LOAN" para="for buying a house" link="/loan/home"/>
            <LoanPageCard icon={<SchoolIcon sx={{fontSize:70}}/>} title="EDUCATION LOAN" para="for funding your education" link="/loan/education"/>
            <LoanPageCard icon={<PersonIcon sx={{fontSize:70}}/>} title="PERSONAL LOAN" para="for your personal needs" link="/loan/personal"/>
            <LoanPageCard icon={<TimeToLeaveIcon sx={{fontSize:70}}/>} title="CAR LOAN" para="for purchasing a car" link="/loan/car"/>
            <LoanPageCard icon={<AutoAwesomeIcon sx={{fontSize:70}}/>} title="GOLD LOAN" para="loan against gold" link="/loan/gold"/>
        </div>
        </div>
    )
}

export default TypesofLoans;