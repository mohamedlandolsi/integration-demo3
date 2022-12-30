import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function AddFormationForm() {
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
        <Typography component="h1" variant="h5">
          Ajouter Formation
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                required
                fullWidth
                id="title"
                label="Titre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="domain"
                label="Domaine"
                name="domain"
                autoComplete="domain"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="thumb"
                label="Thumbnail"
                type="thumb"
                id="thumb"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="instructor"
                label="Enseignant"
                type="instructor"
                id="instructor"
                autoComplete="instructor"
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
export default AddFormationForm;
