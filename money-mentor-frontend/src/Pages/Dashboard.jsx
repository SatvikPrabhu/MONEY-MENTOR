import { TextField, Button, Box, Typography, ThemeProvider } from '@mui/material';
import ProfilePicture from '../Components/Profile/ProfilePicture';

function Dashboard() {
    return (
        <Box className="dashboard-bg">
            <Box>   
                {/* Have to connect this with backend*/}
                <ProfilePicture name="John Nolan"/>
            </Box>
        </Box>
    );
}

export default Dashboard; 