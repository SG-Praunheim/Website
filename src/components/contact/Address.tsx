'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Address() {
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>Unsere Kontaktdaten:</Typography>
            <Typography variant="body2" gutterBottom>Adresse: Alt-Praunheim 44, 60488 Frankfurt am Main</Typography>
            <Typography variant="body2" gutterBottom>Telefon: </Typography>
            <Typography variant="body2" gutterBottom>E-Mail: </Typography>
        </React.Fragment>
    );
};