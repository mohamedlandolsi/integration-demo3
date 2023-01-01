import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../../components/profile/account-profile';
import BasicTabs from './tab-panel';

const Page = () => (
    <>
        <Head>
            <title>
                Profile
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    sx={{ mb: 3 }}
                    variant="h4"
                >
                    Account
                </Typography>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <AccountProfile />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xs={12}
                    >
                        <BasicTabs />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

export default Page;