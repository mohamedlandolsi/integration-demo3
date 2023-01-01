import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import DeleteModal from '../../../components/formations/delete-modal';

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
    }

    // const open = () => setConfirm(true);
    // const close = () => setConfirm(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        deleteFormation();
        push("/formations");
        handleClose();
    };

    if(error && error.statusCode) {
        return <div>ERROR: {error.statusCode} {error.statusText}</div>
    }

    return (
        <div>
            <div>Titre: {formation.title}</div>
            <div>Description: {formation.description}</div>
            <div>Domaine: {formation.domain}</div>
            {formation.instructor && <div>Enseignant: {formation.instructor}</div>}
            {isDeleting ? <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="contained">Supprimer</LoadingButton> : <Button variant="contained" onClick={handleOpen}>Supprimer</Button>}
            <DeleteModal handleClose={handleClose} open={open} handleDelete={handleDelete} />
        </div>
    )
}

export async function getServerSideProps({ query: { id } }) {
    const res = await fetch(`http://localhost:3000/api/formations/${id}`);
    if (res.status === 200) {
        const formation = await res.json();
        return {
            props: {
                formation,
            },
        }
    }

    return {
        props: {
            error: {
                statusCode: res.status,
                statusText: "Invalid ID"
            }
        }
    }
} 