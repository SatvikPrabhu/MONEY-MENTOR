import { TextField, Button, Box, Typography, Divider } from '@mui/material';
import ProfilePicture from '../Components/Profile/ProfilePicture';
import { useState } from 'react';

function Dashboard() {
    const [isEditing, setIsEditing] = useState(false);

    // fetch from backend
    const [profileData, setProfileData] = useState({
        name: "John Nolan",
        email: "john.nolan@example.com",
        username: "jnolan",
        location: "Los Angeles, CA",
        phone: "+1 234 567 8900"
    });
    const handleSave = () => {
        // save to backend
        setIsEditing(false);
    };

    const handleImageChange = (file) => {
        // upload to backend
        console.log('New image:', file);
    };

    const textFieldStyles = {
        '& .MuiInputBase-input': {
            color: 'background.secondary', 
    },
        '& .MuiInputLabel-root': {
            color: 'background.tertiary',  
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'background.secondary', 
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'background.tertiary',
            },
            '&:hover fieldset': {
                borderColor: 'background.secondary', 
            },
            '&.Mui-focused fieldset': {
                borderColor: 'background.secondary', 
            },
        },
        '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'rgba(244, 225, 198, 0.6)', 
        },
        '& .MuiInputLabel-root.Mui-disabled': {
            color: 'rgba(166, 117, 122, 0.5)', 
        },
    };
    return (
        <Box className="dashboard-bg">
            
            <Box sx={{
                backgroundColor: 'background.darkPrimary',
                borderRadius: 10,
                minHeight: '100vh',
                marginX: 15,
                position: 'relative',
                pt: '25vh',
                pb: 4
                }}>   
                {/* Have to connect this with backend*/}
                <Box sx={{ 
                    position: 'absolute', 
                    left: '50%', 
                    top:'5vh',
                    transform: 'translateX(-50%)' 
                }}>
                    <ProfilePicture 
                        name={profileData.name} 
                        onImageChange={handleImageChange}
                    />
                </Box>
                <Box sx={{ px: 6 }}>
                    {/* Name and Edit Button */}
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 4 
                    }}>
                        <Typography 
                            sx={{color:'background.secondary',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                                maxWidth: '50%'}} 
                                variant="h3" 
                                fontWeight="bold"
                                >
                            {profileData.name}
                        </Typography>
                        <Button 
                            variant={isEditing ? "contained" : "outlined"}
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            {isEditing ? 'Save Changes' : 'Edit Profile'}
                        </Button>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    {/* Profile Information Grid */}
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 3,
                        mb: 4,
                    }}>
                        <TextField
                            sx={textFieldStyles}
                            label="Full Name"
                            value={profileData.name}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            sx={textFieldStyles}
                            label="Username"
                            value={profileData.username}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            sx={textFieldStyles}
                            label="Email"
                            value={profileData.email}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            sx={textFieldStyles}
                            label="Phone"
                            value={profileData.phone}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            fullWidth
                        />
                        <TextField
                            sx={textFieldStyles}
                            label="Location"
                            value={profileData.location}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            fullWidth
                        />
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    {/* Account Actions */}
                    <Box>
                        <Typography variant="h5" fontWeight="bold" mb={3}>
                            Account Settings
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button variant="outlined">
                                Change Password
                            </Button>
                            <Button variant="outlined">
                                Privacy Settings
                            </Button>
                            <Button variant="outlined" color="error">
                                Delete Account
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard; 