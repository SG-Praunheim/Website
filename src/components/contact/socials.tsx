'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';

export default function Socials() {
    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>Folgt Uns Auf Social Media</Typography>
            <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
                color="inherit"
                size="large"
                href="https://www.instagram.com/sg_praunheim?igsh=MTEzb2xhdzVjaGRwdQ=="
                aria-label="Instagram"
                sx={{ alignSelf: 'center' }}
            >
                <InstagramIcon />
            </IconButton>
            <Typography variant="body2">Soon cooming more</Typography>
            </Stack>
        </React.Fragment>

    );
};