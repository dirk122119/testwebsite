"use client"
import { getVideoDir } from '@/sanity/sanity-utils'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PostCard from '../component/PostCard';


type Props = {
    params?: {
        num?: string;
    };
    searchParams?: {
        search?: string;
    };
};

export default async function VideoDirArchive(props: Props) {

    const videoDirs = await getVideoDir();
    const tagSet: string[] = [...new Set(videoDirs.map(videoDir => videoDir.class))]

    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
            <div style={{ position: 'relative', width: '1200px' }}>
                <Box sx={{ flexGrow: 1, padding: "20px" }}>
                    <Chip
                        label="全部分類"
                        component="a"
                        href="videoDirs"
                        variant="outlined"
                        clickable
                        sx={{ marginRight: "10px" }}
                    />
                    {
                        tagSet.map((tag) => (
                            <Chip
                                label={tag}
                                component="a"
                                href={`/videoDirs?search=${tag}`}
                                variant="outlined"
                                clickable
                                sx={{ marginRight: "10px" }}
                            />

                        ))
                    }

                </Box>
                <Box sx={{ flexGrow: 1, padding: "20px" }}>
                    {!props.searchParams?.search &&
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6B4240" }}>
                            全部分類
                        </Typography>
                    }
                    {props.searchParams?.search &&
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6B4240" }}>
                            {props.searchParams?.search}
                        </Typography>
                    }
                    <Grid container spacing={2} >

                        {!props.searchParams?.search && videoDirs.map((videoDir) => (
                            <>
                                <Grid item xs={4} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <PostCard img={videoDir.image} name={videoDir.name} id={videoDir._id} class={videoDir.class} link="videoDirs" tag="innerLink" height='15vw' />
                                </Grid>
                            </>
                        ))}
                        {props.searchParams?.search && videoDirs.filter((videoDir) => (videoDir.class === props.searchParams?.search)).map((videoDir) => (
                            <>
                                <Grid item xs={4} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <PostCard img={videoDir.image} name={videoDir.name} id={videoDir._id} class={videoDir.class} link="videoDirs" tag="innerLink" height='15vw' />
                                </Grid>
                            </>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}