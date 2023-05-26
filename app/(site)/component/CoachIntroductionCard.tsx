import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Link from 'next/link';

type Props = {
  img: string,
  name:string,
  id:string
}

export default function CoachCard(Props:Props) {
  
  return (
    <Card sx={{ width: "100%", height: "auto", '&:hover': { scale: "1.05" } }}>
      <CardActionArea>
          <Link href={`/coaches/${Props.name}`} key={Props.id} style={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image={Props.img}
          sx={{ height: "20vw",objectFit: "fit",objectPosition:"10% 20%" }}
          alt="coach image"
        />
        </Link>
      </CardActionArea>
      <CardContent sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {Props.name}
        </Typography>
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <IconButton aria-label="instagram">
            <InstagramIcon sx={{ color: "black", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
          </IconButton>
          <IconButton aria-label="facebook">
            <FacebookIcon sx={{ color: "black", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
          </IconButton>
        </Box>
      </CardContent>

    </Card>
  );
}