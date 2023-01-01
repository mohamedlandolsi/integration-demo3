import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Details } from "../../../components/formations/details";
import { Box, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";

export default function Formation({ formation, error }) {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { push, query } = useRouter();

  const deleteFormation = async () => {
    const { id } = query;
    try {
      await fetch(`http://localhost:3000/api/formations/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    deleteFormation();
    push("/formations");
    handleClose();
  };

  if (error && error.statusCode) {
    return (
      <div>
        ERROR: {error.statusCode} {error.statusText}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Formation | {formation.title}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          mb: 10
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 10 }} variant="h4">
            {formation.title}
          </Typography>
          <Grid container>
            <Grid item lg={8} md={12} xs={12}>
              <Details
                isDeleting={isDeleting}
                handleOpen={handleOpen}
                handleClose={handleClose}
                open={open}
                handleDelete={handleDelete}
                id={formation._id}
                title={formation.title}
                description={formation.description}
                domain={formation.domain}
                instructor={formation.instructor}
                thumb={formation.thumb}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/formations/${id}`);
  if (res.status === 200) {
    const formation = await res.json();
    return {
      props: {
        formation,
      },
    };
  }

  return {
    props: {
      error: {
        statusCode: res.status,
        statusText: "Invalid ID",
      },
    },
  };
}
