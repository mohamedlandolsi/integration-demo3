import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#DFF6FF",
  boxShadow: "none",
  padding: theme.spacing(1),
  textAlign: "left",
  display: "flex",
}));

export default function HowItWorks() {
  return (
    <div>
        <Typography variant="h4" textAlign="center" gutterBottom mt={10}>
          Comment ça marche?
        </Typography>
      <Box pl={50} pr={25} pb={5} mt={5} mb={10} sx={{ width: "100%" }}>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8} md={6}>
            <Item>
              <Typography variant="h6">
                Au passage de chaque test, un score est calculé. Chaque test a
                un score minimum de validation. A chaque test sont affectées des
                compétences.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4} md={6}>
            <Item>
              <img src="/images/online-test.jpg" width="200px" />
            </Item>
          </Grid>
          <Grid item xs={8} md={6}>
            <Item>
              <Typography variant="h6">
                A partier des ces compétences on vous propose de faire des
                formations pour améliorer votre niveau.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4} md={6}>
            <Item>
              <img src="/images/online-test2.jpg" width="200px" />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
