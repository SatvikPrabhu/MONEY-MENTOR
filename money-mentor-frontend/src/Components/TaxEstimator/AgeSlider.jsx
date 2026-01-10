import { Box, Typography, Slider } from '@mui/material';
import AGE1 from './Images/AGE1.png';
import AGE2 from './Images/AGE2.png';
import AGE3 from './Images/AGE3.png';
import AGE4 from './Images/AGE4.png';

export default function AgeSlider({ value, onChange }) {
  
  const ageRanges = [
    { label: 'Teenager (13-19)', image: AGE1, value: 0 },
    { label: 'Young Adult (20-34)', image: AGE2, value: 1 },
    { label: 'Mid Adult (35-59)', image: AGE3, value: 2 },
    { label: 'Elderly (60+)', image: AGE4, value: 3 }
  ];
  
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };
  
  return (
    <Box sx={{ py: 1 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3
      }}>
        <Typography variant="h6"> What is your age? </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
          {ageRanges[value].label}
        </Typography>
      </Box>
      
      <Box sx={{ position: 'relative', px: 2, mt: 18}}>
        <Slider
          value={value}
          onChange={handleChange}
          min={0}
          max={3}
          step={1}
          marks
          sx={{
            color: 'text.secondary',
            height: 8,
            '& .MuiSlider-thumb': {
              width: 180,
              height: 180,
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              borderRadius: '0',
              marginTop: '-90px',
              backgroundImage: `url(${ageRanges[value].image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              '&:hover': {
                boxShadow: 'none'
              },
              '&.Mui-active': {
                boxShadow: 'none'
              },
              '&::before': {
                display: 'none'
              }
            },
            '& .MuiSlider-track': {
              height: 8,
              borderRadius: 4,
              border: 'none'
            },
            '& .MuiSlider-rail': {
              height: 8,
              borderRadius: 4,
              opacity: 0.3,
              backgroundColor: 'text.secondary'
            },
            '& .MuiSlider-mark': {
              width: 3,
              height: 12,
              backgroundColor: 'text.secondary',
              opacity: 0.5,
              marginTop: -2
            },
            '& .MuiSlider-markActive': {
              backgroundColor: 'text.secondary',
              opacity: 1
            }
          }}
        />
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          px: 0.5
        }}>
          <Typography sx={{ opacity: 1, fontSize:15 }}>
            Teen
          </Typography>
          <Typography sx={{ opacity: 1, fontSize:15 }}>
            Elderly
          </Typography>
        </Box>
      </Box>
      
    </Box>
  );
}