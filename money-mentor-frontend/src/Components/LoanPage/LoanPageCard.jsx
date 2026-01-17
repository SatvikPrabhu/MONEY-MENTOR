function LoanPageCard(props)
{
    return ( 
        <div className="loan-page-card">
            <div className="inside-loan-page">
                {props.icon}
                <h2 style={{fontSize: 25}}>{props.title}</h2>
                <p style={{fontSize: 20}}>{props.para}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default LoanPageCard;