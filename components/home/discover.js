import { Image } from "@mui/icons-material";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "#DFF6FF",
  borderColor: "#DFF6FF",
}));

export default function Discover() {
  return (
    <div>
      <Box mt={25} mr={4} ml={4} justifyContent="center" textAlign="center">
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Découvrir nos caractéristiques
        </Typography>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 6,
              width: 350,
              height: 350,
            },
          }}
          justifyContent="center"
        >
          <Item variant="outlined">
            <img src="/images/test-logo.png" width="200" height="175" alt="tt" />
            <Typography variant="h6">
              Des tests de compétences successifs permettant de détecter les
              manques et les défaillances par rapport aux besoins du marché.{" "}
            </Typography>
          </Item>
          <Item variant="outlined">
            <img src="/images/intelligence-logo.png" width="275" height="175" />
            <Typography variant="h6">
              Une recommandation intélligente des séries de formations et de
              certifications nécessaires.{" "}
            </Typography>
          </Item>
          <Item variant="outlined">
            <img src="/images/profiling-logo.png" width="200" height="175" />
            <Typography variant="h6">
              Un profiling intélligent permettant une reconversation
              professionnelle vers des domaines sollicitant la main d’oeuvre.{" "}
            </Typography>
          </Item>
        </Box>
      </Box>
    </div>
  );
}
