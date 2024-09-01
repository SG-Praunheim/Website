import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { makeStyles, styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import Divider from '@mui/material/Divider';
import ReactDOM from 'react-dom';
import ExpandText from '../expandText/ExpandText';
import Map from './Map';
import Socials from './Socials';
import Address from './Address';


export default function Contact() {

    return (
        <React.Fragment>
            <Divider id="contactContent" />
            <Typography variant="h3" gutterBottom>Kontakt</Typography>
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
                    <Box >
                        <Typography align='center' variant="h4" gutterBottom>Kontaktiere Uns Jetzt</Typography>
                    </Box>
                </Grid>


            </Grid>

        </React.Fragment>
    )
};