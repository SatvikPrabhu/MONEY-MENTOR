import { useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MoneyMentorIMG from "./MoneyMentor.png";
import MoneyMentorHoverIMG from "./MoneyMentor-hover.png";

function HomeLogo() {
    const [hovered, setHovered] = useState(false);

    return (
        <Link to="/">
        <Box
            component="img"
            src={hovered ? MoneyMentorHoverIMG : MoneyMentorIMG}
            alt="Money Mentor logo"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                height: 52,   
                ml: 3,       
                width: 'auto',       
                objectFit: 'contain',
                display: 'block',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                '&:hover': {
                    transform: 'scale(1.04)', 
                    opacity: 0.9,
                }
            }}
        />
    </Link>
    );
}

export default HomeLogo;