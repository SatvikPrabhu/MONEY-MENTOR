import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccountPageCard from "../Components/AccountsPage/AccountPageCard";

function TypesofAccounts()
{
    return ( 
        <div>
        <div className="loans-div">
            <p className="loans-p">LET'S EXPLORE</p>
            <h1 className="loans-h1">TYPES OF ACCOUNTS</h1>
        </div>
        <div className="loan-cards">
            <AccountPageCard icon={<SavingsIcon sx={{fontSize:60}}/>} title="SAVINGS ACCOUNT" para="for everyday saving and spending" link="/account/savings"/>
            <AccountPageCard icon={<AccountBalanceIcon sx={{fontSize:60}}/>} title="CURRENT ACCOUNT" para="for businesses and frequent transactions" link="/account/current"/>
            <AccountPageCard icon={<PersonIcon sx={{fontSize:60}}/>} title="FIXED DEPOSIT" para="deposit money for a fixed period" link="/account/fixed"/>
            <AccountPageCard icon={<TimeToLeaveIcon sx={{fontSize:60}}/>} title="RECURRING DEPOSIT" para="save small amounts every month" link="/account/recurring"/>
            <AccountPageCard icon={<EngineeringIcon sx={{fontSize:60}}/>} title="SALARY ACCOUNT" para="account for salaried individuals" link="/account/salary"/>
        </div>
        </div>
    )
}

export default TypesofAccounts;