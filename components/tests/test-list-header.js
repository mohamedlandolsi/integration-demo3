import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const domains = [
  "Science Informatique",
  "Machine Learning",
  "Intélligence Artificiel",
  "Business Intelligence",
];

export default function TestListHeader() {
  const [domainName, setDomainName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDomainName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ m: 1, width: 375 }}>
          <div>
            <InputLabel id="recherche-domaine">Domaine</InputLabel>
            <Select
              labelId="recherche-domaine"
              id="recherche-domaine"
              multiple
              value={domainName}
              onChange={handleChange}
              input={<OutlinedInput label="Domaine" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {domains.map((domain) => (
                <MenuItem key={domain} value={domain}>
                  <Checkbox checked={domainName.indexOf(domain) > -1} />
                  <ListItemText primary={domain} />
                </MenuItem>
              ))}
            </Select>
            
          </div>
          </FormControl>
          <div>
            <Button variant="contained" endIcon={<SearchOutlinedIcon />}>
              Rechercher par Domaine
            </Button>
          </div>
        
      </Stack>
    </div>
  );
}
