import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

export const AccountProfileDetails = () => {
  return (
    <>
      <Card>
        <CardHeader
          subheader="Completer votre information"
          title="Profil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                required
                fullWidth
                id="prenom"
                label="Prénom"
                name="prenom"
                autoComplete="prenom"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
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
            <Grid
              item
              md={6}
              xs={12}
            >
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
            <Grid
              item
              md={6}
              xs={12}
            >
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
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Valider
          </Button>
        </Box>
      </Card>
    </>
  );
};