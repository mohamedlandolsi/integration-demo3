import * as React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField
} from '@mui/material';
import Chip from "@mui/material/Chip";
import { useTheme } from "@emotion/react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";

export const AccountProfileConfig = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const [educationLevel, setEducationLevel] = useState("");
    const [objective, setObjective] = useState("");

    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        setEducationLevel(event.target.value);
    };

    const handleObjectiveChange = (event) => {
        setObjective(event.target.value);
    };

    const handleDomainChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        "Science d&apos;informatique",
        "Technology d&apos;informatique",
        "Data Science",
        "Machine Learning",
        "Intélligence Artificielle",
        "Deep Learning",
        "Business Intelligence",
        "Développement Web",
        "Développement Mobile",
    ];



    // const handleLanguageChange = (event) => {
    //   setLanguage(event.target.value);
    // };

    function getStyles(name, personName, theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const languages = [
        "Français",
        "Anglais",
        "Arabe",
        "Espagnole",
        "Italien",
        "Allemand",
        "Chinois",
    ];

    function getStylesLang(language, languageName, theme) {
        return {
            fontWeight:
                languageName.indexOf(language) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const [languageName, setLanguageName] = React.useState([]);

    const handleLanguageChange = (event) => {
        const {
            target: { value },
        } = event;
        setLanguageName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Card>
            <CardHeader
                subheader="Terminez la configuration de votre profil"
                title="Profil"
            />
            <Divider />
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="education-level">
                                Niveau d&apos;éducation
                            </InputLabel>
                            <Select
                                labelId="education-level"
                                id="education-level"
                                value={educationLevel}
                                label="Niveau d'éducation"
                                onChange={handleChange}
                            >
                                <MenuItem value="no-diploma">Non diplomé</MenuItem>
                                <MenuItem value="bac">Baccalauréat</MenuItem>
                                <MenuItem value="license">License</MenuItem>
                                <MenuItem value="master">Mastere</MenuItem>
                                <MenuItem value="phd">Doctorat</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            name="last-dipolma"
                            label="Dernier diplôme obtenu"
                            type="text"
                            id="last-diploma"
                        />
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            name="professional-situation"
                            label="Situation Professionnelle Actuelle"
                            type="text"
                            id="professional-situation"
                        />
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="domaine-activite-interessants">
                                Domaines d&apos;activité intéressants
                            </InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleDomainChange}
                                input={
                                    <OutlinedInput
                                        id="domaine-activite-interessants"
                                        label="Domaines d'activité intéressants"
                                    />
                                }
                                renderValue={(selected) => (
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="objective">
                                Objectifs de l&apos;utilisation de la plateforme
                            </InputLabel>
                            <Select
                                labelId="objective"
                                id="objective"
                                value={objective}
                                label="Objectifs de l'utilisation de la plateforme"
                                onChange={handleObjectiveChange}
                            >
                                <MenuItem value="educative">Educative</MenuItem>
                                <MenuItem value="professionnelle">Professionnelle</MenuItem>
                                <MenuItem value="enseignement">Enseignement</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <FormControl>
                            <FormLabel id="motivation">
                                Motivation pour suivre des formations payantes
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="Motivation pour suivre des formations payantes"
                                defaultValue="non"
                                name="motivation"
                            >
                                <FormControlLabel
                                    value="oui"
                                    control={<Radio />}
                                    label="Oui"
                                />
                                <FormControlLabel
                                    value="non"
                                    control={<Radio />}
                                    label="Non"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Valider
                </Button>
            </Box>
        </Card>
    );
};