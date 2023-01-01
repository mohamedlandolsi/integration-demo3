import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoursesList from "../../components/formations/courses-list";
import { getAllCourses } from "../../dummy-data";
import ScrollToTop from "react-scroll-to-top";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Link from "next/link";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06283D",
      darker: "#053e85",
    },
  },
});

export default function CoursesPage({ formations = [] }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
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
              Formations
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
                Découvrir les Formations
              </Button>
              <Link href="/formations/add-formation" passHref>
                <Button
                  variant="outlined"
                  style={{ color: "#06283D", borderColor: "#256D85" }}
                >
                  Ajouter une Formation
                </Button>
              </Link>
            </Stack>
          </Container>

          <CoursesList formations={formations} />
          <ScrollToTop
            smooth
            component={<KeyboardDoubleArrowUpIcon color="primary" />}
          />
        </Box>
      </main>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/formations");
  const formations = await response.json();

  return {
    props: {
      formations,
    },
  };
}
