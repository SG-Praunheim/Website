import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Map from './map';
import Socials from './socials';
import Address from './Address';
import EmailForm from './EmailForm';

export default function Contact() {

    return (
        <React.Fragment>
            <Divider id="contactContent" />
            <Typography variant="h3" align='center' gutterBottom>Kontakt</Typography>
            <Grid container spacing={2} columns={12}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Map />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ m: '2rem' }}>
                        <Address />
                    </Box>
                    <Box sx={{ m: '2rem' }}>
                        <Socials />
                    </Box>
                </Grid>                

                <Grid size={{ xs: 12, md: 12 }}>
                    <EmailForm/>
                </Grid>


            </Grid>

        </React.Fragment>
    )
};