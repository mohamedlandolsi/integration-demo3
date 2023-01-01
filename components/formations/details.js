import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import DeleteModal from "./delete-modal";
import SaveIcon from "@mui/icons-material/Save";
import Link from "next/link";

export const Details = (props) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          mb: 5,
        }}
      >
        <Avatar
          src={props.thumb}
          sx={{
            height: 300,
            mb: 2,
            width: 300,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {props.description}
        </Typography>
        {props.instructor && (
          <Typography color="textSecondary">
            Enseignant:
            {props.instructor}
          </Typography>
        )}
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      {props.isDeleting ? (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Supprimer
        </LoadingButton>
      ) : (
        <Button variant="contained" onClick={props.handleOpen}>
          Supprimer
        </Button>
      )}
      <DeleteModal
        handleClose={props.handleClose}
        open={props.open}
        handleDelete={props.handleDelete}
      />
      <Link href={`/formations/${props.id}/edit`} passHref>
        <Button sx={{ ml: 2 }} variant="contained">
          Modifier
        </Button>
      </Link>
    </CardActions>
  </Card>
);
