import {Button, Box, Typography} from "@mui/material";

function IntroductionToFeature(props) {
    return <div> 
        <Box sx={props.backgroundboxsx}>
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
                maxWidth: 900,
                lineHeight: 2.2,
                opacity: 0.95
            }}>
                {props.description}
            </Typography>
            <Typography variant="h6" sx={{ 
                mt: 5, 
                textAlign: 'center', 
                fontSize:15,
                opacity: 0.95
            }}>
                {props.helperText}
            </Typography>
            <Button sx={props.btnsx}
            onClick={props.scrollFN}
            > 
                {props.btntext}
            </Button>
            
            <Typography variant="caption" sx={{ mt: 2, opacity: 0.8, fontSize:15 }}>
                {props.caption}
            </Typography>
        </Box>
        
    </div>;
}

export default IntroductionToFeature;