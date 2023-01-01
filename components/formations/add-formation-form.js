import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useRouter } from "next/router";

function AddFormationForm() {
  const [newFormation, setNewFormation] = useState({
    title: "",
    description: "",
    domain: "",
    thumb: "",
    instructor: "",
  });

  const { title, description, domain, thumb, instructor } = newFormation;

  const { push } = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!title) {
      errors.title = "Le champ titre est obligatoire";
    }
    if (!description) {
      errors.description = "Le champ description est obligatoire";
    }
    if (!domain) {
      errors.domain = "Le champ domaine est obligatoire";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = validate();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    await createFormation();
    await push("/formations");
  };

  const createFormation = async () => {
    try {
      await fetch("http://localhost:3000/api/formations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFormation),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFormation({ ...newFormation, [name]: value });
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
              {errors.title ? (
                <TextField
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Titre"
                  autoFocus
                  onChange={handleChange}
                  value={title}
                  error
                  helperText={errors.title}
                />
              ) : (
                <TextField
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Titre"
                  autoFocus
                  onChange={handleChange}
                  value={title}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {errors.description ? (
                <TextField
                  name="description"
                  multiline
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  autoFocus
                  onChange={handleChange}
                  value={description}
                  error
                  helperText={errors.description}
                />
              ) : (
                <TextField
                  name="description"
                  multiline
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  autoFocus
                  onChange={handleChange}
                  value={description}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {errors.domain ? (
                <TextField
                  required
                  fullWidth
                  id="domain"
                  label="Domaine"
                  name="domain"
                  autoComplete="domain"
                  onChange={handleChange}
                  value={domain}
                  error
                  helperText={errors.domain}
                />
              ) : (
                <TextField
                  required
                  fullWidth
                  id="domain"
                  label="Domaine"
                  name="domain"
                  autoComplete="domain"
                  onChange={handleChange}
                  value={domain}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="thumb"
                label="Thumbnail"
                type="thumb"
                id="thumb"
                onChange={handleChange}
                value={thumb}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="instructor"
                label="Enseignant"
                type="instructor"
                id="instructor"
                autoComplete="instructor"
                onChange={handleChange}
                value={instructor}
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
