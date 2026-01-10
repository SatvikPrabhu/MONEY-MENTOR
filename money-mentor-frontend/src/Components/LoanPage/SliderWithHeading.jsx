import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function SliderWithHeading(props) {
    return (
    <div> 
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h4" sx={{ ml: 5, mt:2, fontSize : '1.5rem' }}> 
                {props.heading}            
            </Typography>
            <Box sx={{backgroundColor:'#ced5d6ff', borderRadius:5}}>
                <Typography variant="h4" sx={{ margin:2, fontSize:'1.4rem', color:'rgba(41, 44, 29)'}} >
                    {props.displayVal}
                </Typography>
            </Box>
        </Box>
        <Box sx={{marginTop: 3, display: 'flex', justifyContent:'space-between'}}> 
            <Slider 
                defaultValue={props.defaultVal} 
                aria-label="Default" 
                valueLabelDisplay="on"
                onChange={props.Slide}
                step={props.incr}
                min={props.minlim}
                max={props.maxlim}
                color="white"
                sx={{
                    width: 400, 
                    ml: 2,
                }}
            />
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', mb:2}}> 
            <Typography variant="h4" sx={{fontSize: '1.2rem'}}> 
                {props.minlim}
            </Typography>
            <Typography variant="h4" sx={{fontSize: '1.2rem'}}> 
                {props.maxlim}
            </Typography>
        </Box>

    </div>);
}

export default SliderWithHeading;