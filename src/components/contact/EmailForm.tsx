'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EmailForm() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "249dc002-30f6-4e2c-afe3-a7803882fb88");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            handleOpen();
            console.log(result);
        }
    }
    return (
        <React.Fragment>

            <Divider />

            <Typography sx={{mt:2}} align='center' variant="h4" gutterBottom>Kontaktiere Uns Jetzt</Typography>

            <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2} useFlexGap>

                    <InputLabel sx={{ alignContent: 'center' }}>Name</InputLabel>
                    <TextField
                        required
                        id="email-name"
                        hiddenLabel
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="name"
                        aria-label="Deine Name"
                        placeholder="Deine name"
                        slotProps={{
                            htmlInput: {
                                autoComplete: 'off',
                                'aria-label': 'Deine Name',
                            },
                        }}
                        sx={{ width: '100%' }}
                    />

                    <InputLabel sx={{ alignContent: 'center' }}>Email</InputLabel>
                    <TextField
                        required
                        id="email-newsletter"
                        hiddenLabel
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="email"
                        aria-label="Deine E-Mail Adresse"
                        placeholder="Deine E-Mail Adresse"
                        slotProps={{
                            htmlInput: {
                                autoComplete: 'off',
                                'aria-label': 'Deine E-Mail Adresse',
                            },
                        }}
                        sx={{ width: '100%' }}
                    />

                    <InputLabel sx={{ alignContent: 'center' }}>Nachricht</InputLabel>
                    <TextField
                        multiline
                        required
                        variant="outlined"
                        fullWidth
                        name="nachricht"
                        aria-label="Deine Nachricht an uns"
                        placeholder="Deine Nachricht an uns"
                        slotProps={{
                            htmlInput: {
                                autoComplete: 'off',
                                'aria-label': 'Deine Nachricht an uns',
                            },
                        }}
                        sx={{ width: '100%' }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        sx={{ flexShrink: 0 }}
                    >
                        Nachricht abschicken
                    </Button>
                </Stack>
            </form>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Nachricht wurde versendet
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Wir haben deine Nachricht erhalten und werden uns sobald wie möglich bei dir melden!
                    </Typography>
                </Box>
            </Modal>

        </React.Fragment>

    );
};