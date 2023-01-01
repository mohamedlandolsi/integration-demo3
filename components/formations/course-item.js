import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Link from "next/link";

export default function CourseItem(props) {
  const { title, description, thumb, date, id, domain } = props;

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Link href={`/formations/${id}`} passHref>
        <CardActionArea>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              maxWidth: 345,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                pt: "0%",
              }}
              image={thumb}
              alt={title}
              height="240"
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
            </CardActions>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
}
