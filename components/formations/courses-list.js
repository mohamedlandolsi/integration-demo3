import { Container, Grid } from "@mui/material";
import CourseItem from "./course-item";

export default function CoursesList(props) {

  return (
    <>
      <Container sx={{ py: 8 }} Width="50%">
        <Grid container spacing={5}>
          {/* {items.map((course) => (
            <CourseItem
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              date={course.date}
              image={course.image}
              domain={course.domain}
            />
          ))} */}
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


