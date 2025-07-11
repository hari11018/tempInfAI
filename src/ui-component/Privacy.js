/* eslint-disable */
// material-ui
import { Container, Typography, Box } from '@mui/material';

const Privacy = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>
      <Box
        sx={{
          whiteSpace: 'pre-line',
          fontSize: '1rem',
          lineHeight: 1.6,
          overflowY: 'auto',
          maxHeight: '75vh',
          p: 1,
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      >
        {`
`}
      </Box>
    </Container>
  );
};

export default Privacy;

