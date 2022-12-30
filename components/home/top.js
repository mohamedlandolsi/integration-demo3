import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Stack } from "@mui/system";
import Link from 'next/link'
import HowItWorks from "./howItWorks";


export default function Top() {
  return (
    <div>
      <Box mt={35} mr={4} ml={4} justifyContent="center" textAlign="center">
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Testez vos compétences dans n&#39;importe quel domaine
        </Typography>
        <Typography variant="h6" align="center" color="secondary" gutterBottom>
          Ce platforme tente de résoudre le probléme de manque de compatiblité
          entre les besoins de marché et les profils disponibles.
        </Typography>
        <Stack spacing={4} direction="row" justifyContent="center" mt={6}>
            <Link href="/tests" passHref>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Commencer
          </Button></Link>
          <Link href="#HowItWorks" passHref>
          <Button variant="outlined" color="secondary">
            Comment ça marche?
          </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}
