import {Link} from "react-router-dom";

function AccountPageCard(props)
{
    return ( 
        <div className="loan-page-card">
            <div className="inside-loan-page">
                {props.icon}
                <h2 style={{fontSize: 20}}>{props.title}</h2>
                <p style={{fontSize: 19.3}}>{props.para}</p>
                <Link to={props.link}><button >Learn More</button></Link>
            </div>
        </div>
    )
}

export default AccountPageCard;