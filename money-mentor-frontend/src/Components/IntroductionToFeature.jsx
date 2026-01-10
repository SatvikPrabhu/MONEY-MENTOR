import {Button, Box, Typography} from "@mui/material";

function IntroductionToFeature(props) {
    return <div> 
        <Box sx={{
            height: 500, 
            backgroundColor: '#3a6890e1', 
            width: 1200, 
            marginTop: 10,
            marginLeft: 'auto',       
            marginRight: 'auto',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',      
            alignItems: 'center',         
            justifyContent: 'center',     
            p: 5,
            color: 'white',
            boxShadow: 3
        }}>
            <Typography variant="h2" sx={{ 
                mb: 3, 
                textAlign: 'center', 
                fontWeight: 'bold'
            }}>
                {props.title}
            </Typography>
            
            <Typography variant="h6" sx={{ 
                mb: 5, 
                textAlign: 'center', 
                maxWidth: 700,
                lineHeight: 2.2,
                opacity: 0.95
            }}>
                {props.description}
            </Typography>
            
            <Button sx={{
                backgroundColor: '#94bfe4e1', 
                height: 80, 
                width: 250, 
                fontSize: '1.7rem',
                fontWeight: 'bold',
                color: '#1a3a52',
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': { 
                    backgroundColor: '#7aa8c9',
                    boxShadow: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s'
                }
            }}
            onClick={props.scrollFN}
            > 
                Get Started!
            </Button>
            
            <Typography variant="caption" sx={{ mt: 15, opacity: 0.8 }}>
                {props.caption}
            </Typography>
        </Box>
        
    </div>;
}

export default IntroductionToFeature;