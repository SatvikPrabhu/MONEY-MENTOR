import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';

export default function FinancialYearDropdown({ value, onChange }) {
  const currentYear = new Date().getFullYear();
  
  const financialYears = [];
  for (let i = 0; i < 5; i++) {
    const startYear = currentYear - i;
    const endYear = startYear + 1;
    financialYears.push({
      value: `${startYear}-${endYear}`,
      label: `FY ${startYear}-${String(endYear).slice(-2)}`
    });
  }
  
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  return (
    <Box sx={{ py: 1 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Select Financial Year
      </Typography>
      
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={handleChange}
          sx={{
            backgroundColor: 'rgba(244, 225, 198, 0.1)',
            color: 'text.secondary',
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'background.secondary',
              borderWidth: 2
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'background.secondary',
              borderWidth: 2
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'text.secondary',
              borderWidth: 2
            },
            '& .MuiSvgIcon-root': {
              color: 'text.secondary'
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: 'background.primary',
                color: 'text.secondary',
                '& .MuiMenuItem-root': {
                  '&:hover': {
                    backgroundColor: 'rgba(244, 225, 198, 0.1)'
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(244, 225, 198, 0.2)',
                    '&:hover': {
                      backgroundColor: 'rgba(244, 225, 198, 0.3)'
                    }
                  }
                }
              }
            }
          }}
        >
          {financialYears.map((fy) => (
            <MenuItem key={fy.value} value={fy.value}>
              {fy.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
        Selected: {value}
      </Typography>
    </Box>
  );
}