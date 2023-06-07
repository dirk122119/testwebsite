import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import webTheme from '@/app/(site)/theme/theme';

type Props = {
    img: string,
    name: string,
    class: string,
    id: string,
    writer: string,
    date: string,
    tags: string[]
}

export default function ArticleCard(Props: Props) {
    console.log(Props.tags)
    const formattedDate = Props.date.split('T')[0]

    return (
        <ThemeProvider theme={webTheme}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                <Card sx={{ display: 'flex', width: "50vw", maxWidth: "700px", maxHeight: "300px" }}>

                    <CardActionArea sx={{ width: "auto" }}>
                        <Link href={`/posts/${Props.name}`} rel="noopener noreferrer" target="_blank" key={Props.id} style={{ display: "flex", justifyContent: "center" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "18vw", height: "15vw", maxWidth: "350px", maxHeight: "250px" }}
                                image={Props.img}
                                alt="article image" />
                        </Link>
                    </CardActionArea>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <div>
                                <Link href={`/posts/${Props.name}`} variant="h6" underline="hover" color="black">
                                    {Props.name}
                                </Link>
                            </div>
                            <div>
                                <Link href={`/coaches/${Props.writer}`} variant="subtitle1" underline="hover" color="black">
                                    {Props.writer}教練
                                </Link>
                            </div>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {Props.class}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {formattedDate}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "center" }}>
                <Card sx={{ width: "40vw", height: "auto", maxWidth: "700px", maxHeight: "300px" }}>
                    <CardActionArea sx={{ width: "auto" }}>
                        <Link href={`/posts/${Props.name}`} rel="noopener noreferrer" target="_blank" key={Props.id} style={{ display: "flex", justifyContent: "center" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "40vw", height: "20vw", maxWidth: "350px", maxHeight: "250px" }}
                                image={Props.img}
                                alt="article image" />
                        </Link>
                    </CardActionArea>
                    <CardContent>
                        <div>
                            <Link href={`/posts/${Props.name}`} variant="h6" underline="hover" color="black">
                                {Props.name}
                            </Link>
                        </div>
                        <div>
                            <Link href={`/coaches/${Props.writer}`} variant="subtitle1" underline="hover" color="black">
                                {Props.writer}教練
                            </Link>
                        </div>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {Props.class}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {formattedDate}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    )
}