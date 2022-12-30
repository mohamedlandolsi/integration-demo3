import TestItem from "./test-item";
import { Container, Grid } from "@mui/material";

export default function TestList(props) {
  const { items } = props;

  return (
    <>
      <Container sx={{ py: 8 }} Width="50%">
        {/* End hero unit */}
        <Grid container spacing={5}>
          {items.map((test) => (
            <TestItem
              key={test.id}
              id={test.id}
              title={test.title}
              description={test.description}
              date={test.date}
              image={test.image}
              domain={test.domain}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
