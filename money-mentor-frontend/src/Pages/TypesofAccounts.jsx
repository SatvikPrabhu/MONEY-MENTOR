import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LoanPageCard from "../Components/LoanPage/LoanPageCard";

function TypesofAccounts()
{
    return ( 
        <div>
        <div className="loans-div">
            <p className="loans-p">LET'S EXPLORE</p>
            <h1 className="loans-h1">TYPES OF ACCOUNTS</h1>
        </div>
        <div className="loan-cards">
            <LoanPageCard icon={<HomeIcon sx={{fontSize:70}}/>} title="SAVINGS ACCOUNT" para="for everyday saving and spending"/>
            <LoanPageCard icon={<SchoolIcon sx={{fontSize:70}}/>} title="CURRENT ACCOUNT" para="for businesses and frequent transactions"/>
            <LoanPageCard icon={<PersonIcon sx={{fontSize:70}}/>} title="FIXED DEPOSIT" para="deposit money for a fixed period"/>
            <LoanPageCard icon={<TimeToLeaveIcon sx={{fontSize:70}}/>} title="RECURRING DEPOSIT" para="save small amounts every month"/>
            <LoanPageCard icon={<AutoAwesomeIcon sx={{fontSize:70}}/>} title="SALARY ACCOUNT" para="account for salaried individuals"/>
        </div>
        </div>
    )
}

export default TypesofAccounts;