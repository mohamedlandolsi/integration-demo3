import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { signIn, useSession, signOut } from 'next-auth/react';


export default function Login() {
  return (<div className="auth-body">
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          className="box"
          sx={{
            mt: 6,
            bgcolor: "#DFF6FF",
            height: "80vh",
            borderRadius: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: 30,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Se Connecter
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 5,
              textAlign: "center",
              fontSize: "25px",
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              rows="30"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Box>
          <Box
            component="form"
            sx={{
              mt: 3,
              textAlign: "center",
              fontSize: "25px",
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Mot de passe"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              mb: 2,
              mt: 0,
              ml: 14,
              color: "blue",
              font: "underline",
              fontSize: 12,
            }}
          >
            <Link href="#" underline="hover">
              {" Mot de passe oublié ?"}
            </Link>
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button style={{ backgroundColor: "#256D85" }} variant="contained">
              Se Connecter
            </Button>
          </Stack>
          <Stack
            sx={{
              textAlign: "center",
              mt: 2,
            }}
          >
            <h3>Pas de compte ?</h3>
          </Stack>
          <Stack
            sx={{
              ml: 15,
              mr: 15,
            }}
          >
            <FacebookLoginButton onClick={() => alert("Hello")}>
              <span>Se connecter via Facebook</span>
            </FacebookLoginButton>
          </Stack>
          <Stack
            sx={{
              ml: 15,
              mr: 15,
            }}
          >
            <GoogleLoginButton onClick={signIn()}>
              <span>Se connecter via Google</span>
            </GoogleLoginButton>
          </Stack>
          <Stack
            sx={{
              mt: 1,
              ml: 15,
              mr: 15,
            }}
          >
            <Button variant="contained" disableElevation>
              Creer un compte manuellement
            </Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
    </div>
  );
}

