import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { AuthContextProvider } from "../stores/authContext";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06283D",
    },
    secondary: {
      main: "#256D85",
    },
    cyan: {
      main: "#47B5FF",
    },
    bright: {
      main: "#DFF6FF",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === "/auth/login") return <Component {...pageProps} />;
  if (router.pathname === "/auth/register") return <Component {...pageProps} />;

  return (
    <AuthContextProvider>
      <Head>
        <title>SkillTester</title>
        <link rel="icon" href="/images/test.png"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
