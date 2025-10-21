import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Vencedores = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#2d2e82', 
        textAlign: 'center',
        padding: '20px',
        borderTop: '50px solid #FFFFFF', 
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: {
            xs: '4rem',  
            sm: '6rem',  
            md: '8rem',  
          },
          fontWeight: 'bold',
          color: '#FFFFFF',
          textShadow: '0 0 15px rgba(255, 255, 255, 0.7)',
          animation: `${pulseAnimation} 2s infinite ease-in-out`,
        }}
      >
        Em Breve
      </Typography>
    </Box>
  );
};

export default Vencedores;
