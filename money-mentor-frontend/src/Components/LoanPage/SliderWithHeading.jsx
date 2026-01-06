import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function SliderWithHeading(props) {
    return (
    <div> 
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h6" sx={{ ml: 5, mt:2, fontSize : '1.5rem' }}> 
                {props.heading}            
            </Typography>
            <Typography variant="h4" sx={{ mr: 5, mt: 2, fontSize:'1.2rem', }} >
                {props.displayVal}
            </Typography>
        </Box>
        <Box sx={{marginTop: 3, display: 'flex'}}> 
            <Slider 
                defaultValue={props.defaultVal} 
                aria-label="Default" 
                valueLabelDisplay="on"
                onChange={props.Slide}
                step={props.incr}
                min={props.minlim}
                max={props.maxlim}
                sx={{
                    width: 600, 
                    ml: 2,
                    mb:2
                }}
            />
        </Box>
    </div>);
}

export default SliderWithHeading;