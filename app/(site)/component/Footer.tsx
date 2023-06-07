"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import webTheme from '@/app/(site)/theme/theme';

export default function Footer() {
    return (
        <ThemeProvider theme={webTheme}>
            <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
                <Typography variant="h6" >Copyright © {new Date().getFullYear()} weightliftingcollege. All rights reserved.
                </Typography>
            </Box>
        </ThemeProvider>
    )
}