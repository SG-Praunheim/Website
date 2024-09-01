'use-client'

import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

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
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
                <button type="submit">Submit Form</button>
            </form>

        </React.Fragment>

    );
};