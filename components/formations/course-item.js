import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Link from "next/link";

export default function CourseItem(props) {
  const { title, description, thumb, date, id, domain } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "0%",
          }}
          image={thumb}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Link href={`/formations/${id}`} passHref>
            <Button size="medium">
              <Typography color="#256D85">Détail</Typography>
            </Button>
          </Link>
          <Link href={`/formations/${id}/edit`} passHref>
            <Button size="medium">
              <Typography color="#256D85">Modifier</Typography>
            </Button>
          </Link>
          <Link href={`/formations/${id}/delete`} passHref>
            <Button size="medium">
              <Typography color="#256D85">Supprimer</Typography>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
