import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const defaultTheme = createTheme();

interface ThemeProps {
  children: ReactNode;
}

function Theme({ children }: ThemeProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <Box
            sx={{
              marginTop: "40px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {children}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Theme;
