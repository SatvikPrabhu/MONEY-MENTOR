import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { CameraAlt } from '@mui/icons-material';
import { useState } from 'react';

function ProfilePicture(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [preview, setPreview] = useState(null);

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      if (props.onImageChange) props.onImageChange(file);
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '34vh',
        height: '34vh',
        borderRadius: '50%',
        border: '0.6vh solid',
        borderColor: 'background.secondary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Avatar src={preview || props.src} sx={{ height: '30vh', width: '30vh', fontSize: '3.5rem' }}>
        {!props.src && getInitials(props.name)}
      </Avatar>

      {isHovering && (
        <Box
          sx={{
            position: 'absolute',
            width: '30vh',
            height: '30vh',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('profile-picture-input').click()}
        >
          <IconButton sx={{ color: 'white' }}>
            <CameraAlt sx={{ fontSize: '4rem' }} />
          </IconButton>
          <Typography sx={{ color: 'white', fontSize: '1rem' }}>
            UPLOAD NEW PICTURE
          </Typography>
        </Box>
      )}

      <input
        id="profile-picture-input"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </Box>
  );
}

export default ProfilePicture;
