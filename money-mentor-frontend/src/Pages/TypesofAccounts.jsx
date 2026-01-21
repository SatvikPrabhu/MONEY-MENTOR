import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import EngineeringIcon from '@mui/icons-material/Engineering';
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
            <LoanPageCard icon={<SavingsIcon sx={{fontSize:70}}/>} title="SAVINGS ACCOUNT" para="for everyday saving and spending"/>
            <LoanPageCard icon={<AccountBalanceIcon sx={{fontSize:70}}/>} title="CURRENT ACCOUNT" para="for businesses and frequent transactions"/>
            <LoanPageCard icon={<PersonIcon sx={{fontSize:70}}/>} title="FIXED DEPOSIT" para="deposit money for a fixed period"/>
            <LoanPageCard icon={<TimeToLeaveIcon sx={{fontSize:70}}/>} title="RECURRING DEPOSIT" para="save small amounts every month"/>
            <LoanPageCard icon={<EngineeringIcon sx={{fontSize:70}}/>} title="SALARY ACCOUNT" para="account for salaried individuals"/>
        </div>
        </div>
    )
}

export default TypesofAccounts;