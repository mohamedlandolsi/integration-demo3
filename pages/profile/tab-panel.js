import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AccountProfileDetails } from '../../components/profile/account-profile-details';
import { AccountProfileConfig } from '../../components/profile/account-profile-config';

export default function LabTabs() {
  const [value, setValue] = React.useState('info');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Information" value="info" />
            <Tab label="Configuration" value="config" />
          </TabList>
        </Box>
        <TabPanel value="info"><AccountProfileDetails /></TabPanel>
        <TabPanel value="config"><AccountProfileConfig /></TabPanel>
      </TabContext>
    </Box>
  );
}
