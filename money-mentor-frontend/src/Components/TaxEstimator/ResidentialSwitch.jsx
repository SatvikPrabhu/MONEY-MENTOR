import { Box, Typography, Switch } from '@mui/material';
import IndianFlag from './Images/Flag_of_India.svg.png';
import WorldIcon from './Images/Earth_icon_2.png';

export default function ResidentialStatusSwitch({ value, onChange }) {
  
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  
  return (
    <Box sx={{ py: 1 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        What is your residential status?
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: 2,
        backgroundColor: 'rgba(244, 225, 198, 0.1)',
        padding: 2,
        borderRadius: 2,
        border: '2px solid',
        borderColor: 'background.secondary'
      }}>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: !value ? 'bold' : 'normal',
            color: !value ? 'text.secondary' : 'inherit',
            transition: 'all 0.3s ease'
          }}
        >
          Indian Resident
        </Typography>
        
        <Switch
          checked={value}
          onChange={handleChange}
          sx={{
            width: 62,
            height: 34,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: '2px',
              transitionDuration: '300ms',
              '&.Mui-checked': {
                transform: 'translateX(28px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                  backgroundColor: 'text.secondary',
                  opacity: 1,
                  border: 0,
                },
                '& .MuiSwitch-thumb': {
                  backgroundImage: `url(${WorldIcon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  '&:before': {
                    display: 'none'
                  }
                }
              },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 30,
              height: 30,
              backgroundImage: `url(${IndianFlag})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              '&:before': {
                display: 'none'
              }
            },
            '& .MuiSwitch-track': {
              borderRadius: 34 / 2,
              backgroundColor: 'text.secondary',
              opacity: 0.3,
              transition: 'background-color 300ms'
            },
          }}
        />
        
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: value ? 'bold' : 'normal',
            color: value ? 'text.secondary' : 'inherit',
            transition: 'all 0.3s ease'
          }}
        >
          NRI
        </Typography>
      </Box>
      
      <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
        Selected: {value ? 'Non-Resident Indian (NRI)' : 'Indian Resident'}
      </Typography>
    </Box>
  );
}