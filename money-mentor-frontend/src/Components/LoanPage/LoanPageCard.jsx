function LoanPageCard(props)
{
    return ( 
        <div className="loan-page-card">
            <div className="inside-loan-page">
                {props.icon && <img src={props.icon} alt={props.title} />}
                <h2>{props.title}</h2>
                <p>{props.para}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default LoanPageCard;