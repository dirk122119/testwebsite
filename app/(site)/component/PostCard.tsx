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
  class:string,
  id:string,
  height?:string ,
  link:string,
  tag:string
}

export default function PostCard(Props:Props) {
  let router = ""
  let height="13vw"
  if(Props.tag=="innerLink"){
     router = `/${Props.link}/${Props.name}`
  }
  else if(Props.tag=="outterLink"){
     router = `${Props.link}`
  }
  if(Props.height){
    height=Props.height
  }
  return (
    <Card sx={{ width: "100%", height: "auto", '&:hover': { scale: "1.05" } }}>
      <CardActionArea>
          <Link href={router} rel="noopener noreferrer" target="_blank" key={Props.id} style={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          image={Props.img}
          sx={{ height:{height},objectFit: "fit",objectPosition:"10% 20%" }}
          alt="video image"
        />
        </Link>
        
      <CardContent sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#6B4240"}}>
          {Props.class}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {Props.name}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}