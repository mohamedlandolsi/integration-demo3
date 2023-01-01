import { Container, Grid } from "@mui/material";
import CourseItem from "./course-item";

export default function CoursesList(props) {

  return (
    <>
      <Container sx={{ py: 8 }} width="50%">
        <Grid container spacing={5}>
          {props.formations.map((formation) => {
            return (
              <CourseItem
                key={formation._id}
                id={formation._id}
                title={formation.title}
                description={formation.description}
                thumb={formation.thumb}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
}


