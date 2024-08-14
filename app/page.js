"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme({
  palette: {
    mode: 'dark', // Enable dark mode
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center" sx={{ p: 2, background: "#121212", borderRadius: 2 }}>
        <TextField 
          fullWidth
          label="Enter Message"
          sx={{ marginRight: 2 }}
        />
        <Button size="large" variant="contained" endIcon={<SendIcon />} sx={{ padding: '14px 24px' }}>Send</Button>
      </Box>
    </ThemeProvider>
  );
}
