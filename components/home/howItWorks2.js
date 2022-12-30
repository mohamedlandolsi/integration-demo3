import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HowItWorks2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={6}>
        <Grid container justifyContent="center">
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title="Des Testes En Ligne" />
        <CardMedia
          component="img"
          height="194"
          image="/images/online-test.jpg"
          alt="Online Test"
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Au passage de chaque test, un score est calculé. Chaque test a un
              score minimum de validation. A chaque test sont affectées des
              compétences.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
      </Grid>

        <Grid item xs={6}>
        <Grid container justifyContent="center">
        <Card sx={{ maxWidth: 300 }}>
        <CardHeader title="Des Formations Pour Améliorer Vos Compétences" />
        <CardMedia
          component="img"
          height="194"
          image="/images/online-test2.jpg"
          alt="Online Courses"
        />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              A partier des ces compétences on vous propose de faire des
              formations pour améliorer votre niveau.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
      </Grid>

    </Grid>
  );
}
