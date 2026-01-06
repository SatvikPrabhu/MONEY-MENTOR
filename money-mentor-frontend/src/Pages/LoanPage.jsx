import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
function LoanPage() {
    const theme = createTheme({
        palette: {
            background: {
                main: "#a2b0bbff"
            },
            foreground: {
                main: "#db8fd6ff"
            }
        },
    });

    return (<div> 
        <ThemeProvider theme={theme}>
        <Box
            sx={{
                position:'relative',
                top: 80,
                left: 250,

                width: 700,
                height: 400,
                borderRadius: 1,
                bgcolor: 'background.main',
                
            }
          }> 
          <Box
            sx={{
                p: 2,
            }}>
            <Typography
            variant="h3"
            >
                TEXT
            </Typography>
          </Box>
        </Box>
    </ThemeProvider>
    </div>);
}

export default LoanPage;