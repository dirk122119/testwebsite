"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <Typography variant="h6" >Copyright © {new Date().getFullYear()} weightliftingcollege. All rights reserved.
                </Typography>
        </Box>
    )
}