import { Container, Grid } from "@mui/material";
import CourseItem from "./course-item";

export default function CoursesList(props) {
  const { items } = props;

  return (
    <>
      <Container sx={{ py: 8 }} Width="50%">
        {/* End hero unit */}
        <Grid container spacing={5}>
          {items.map((course) => (
            <CourseItem
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              date={course.date}
              image={course.image}
              domain={course.domain}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
