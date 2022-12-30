import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ReCAPTCHA from "react-google-recaptcha";

function Info() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 5 }} className="box">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Completer votre information
        </Typography>
        {/* <ReCAPTCHA size='normal' sitekey='6LdgeBAjAAAAAP5m2Hdfxu9RIVZBIMJdbnlsKOhk'>
            </ReCAPTCHA> */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="nom"
                required
                fullWidth
                id="nom"
                label="Nom"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="prenom"
                label="Prénom"
                name="prenom"
                autoComplete="prenom"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="age"
                label="Age"
                type="age"
                id="age"
                autoComplete="age"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="profession"
                label="Profession"
                type="password"
                id="profession"
                autoComplete="profession"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="lieures"
                label="Lieu de résidence"
                id="lieures"
                autoComplete="lieures"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Continuer
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
export default Info;
