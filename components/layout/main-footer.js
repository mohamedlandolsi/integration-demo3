import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <Typography variant="h5" align="center" color="#DFF6FF" pt={3}>
        <QuizOutlinedIcon /> Skill Tester
      </Typography>
      <Typography variant="body2" align="center" color="#DFF6FF" pt={2} pb={3}>
        Développé par Mohamed Landolsi et Adem Miladi{" "}
        <CopyrightIcon fontSize="string" />
      </Typography>
    </Box>
  );
}
