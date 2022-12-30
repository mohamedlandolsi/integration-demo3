import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function AddTestForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const questions = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 40 }} className="box">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Ajouter Test
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
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
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
                name="domain"
                label="Domaine"
                type="domain"
                id="domain"
                autoComplete="domain"
              />
            </Grid>
            {questions.map((question) => {
              return (
                <>
                  <Grid item xs={6}>
                    <TextField
                      required
                      multiline
                      fullWidth
                      name="question"
                      label="Question"
                      type="question"
                      id="question"
                      autoComplete="question"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      multiline
                      fullWidth
                      name="answer"
                      label="Résponse"
                      type="answer"
                      id="answer"
                      autoComplete="answer"
                    />
                  </Grid>
                </>
              );
            })}
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
export default AddTestForm;
