import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TestList from "../../components/tests/test-list";
import { getAllTests } from "../../dummy-data";
import ScrollToTop from "react-scroll-to-top";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06283D",
      darker: "#053e85",
    },
  },
});

export default function TestsPage() {
  const tests = getAllTests();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#DFF6FF",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#06283D"
              gutterBottom
            >
              Testez vos compétences
            </Typography>
            {/* <Typography variant="h5" align="center" color="#06283D" paragraph>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography> */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                style={{ color: "#DFF6FF", backgroundColor: "#256D85" }}
              >
                Découvrir les Tests
              </Button>
              <Link href="/tests/add-test" passHref>
              <Button
                variant="outlined"
                style={{ color: "#06283D", borderColor: "#256D85" }}
              >
                Ajouter un Test
              </Button>
              </Link>
            </Stack>
          </Container>

          <TestList items={tests} />
          <ScrollToTop
            smooth
            component={<KeyboardDoubleArrowUpIcon color="primary" />}
          />
        </Box>
      </main>
    </ThemeProvider>
  );
}
