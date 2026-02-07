import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    typography: {
            fontFamily: 'Poppins, Arial, sans-serif',

        },
    palette: {
                background: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                    tertiary:"#a6757a"
    
                },
                foreground: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                },
                text: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                }
            },  
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: "#5B122D",
                        } 
                    }
            }
        }
    }
});

export default theme;