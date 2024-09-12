'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { TextareaAutosize as BaseTextareaAutosize  } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { EventManager } from "@/events/EventBus";

export type FormData = {
    author: string;
    text: string;
};

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

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

const myCustomEvent = EventManager.getInstance('eventNewGuestbookEntry')
const message = 'New Guestbook Entry'

export default function GuestbookForm(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://niklasdeegapi.azurewebsites.net/Guestbook", {
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
            myCustomEvent.dispatchCustomEvent('myMessage', {message});
        }
        event.target.reset();
    }
    return(
        <React.Fragment>
                        <Divider />

<Typography sx={{mt:2}} align='center' variant="h4" gutterBottom>Schreibe etwas in das Gästebuch:</Typography>

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
            name="author"
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
        <InputLabel sx={{ alignContent: 'center' }}>Nachricht</InputLabel>
        <Textarea
            required
            name="text"
            aria-label="Deine Nachricht"
            placeholder="Deine Nachricht"
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
            Gästebucheintrag
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Der Eintrag war erfolgreich!
        </Typography>
    </Box>
</Modal>
        </React.Fragment>
    )
};