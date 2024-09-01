'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function EmailForm() {
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
            console.log(result);
        }
    }
    return (
        <React.Fragment>
            <Typography align='center' variant="h4" gutterBottom>Kontaktiere Uns Jetzt</Typography>

            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={2} useFlexGap>

              <InputLabel sx={{alignContent: 'center'}}>Name</InputLabel>
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

              <InputLabel sx={{alignContent: 'center'}}>Email</InputLabel>
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

<InputLabel sx={{alignContent: 'center'}}>Nachricht</InputLabel>
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

            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
                <button type="submit">Submit Form</button>
            </form> */}

        </React.Fragment>

    );
};