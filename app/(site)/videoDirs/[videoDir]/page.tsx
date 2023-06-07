"use client"
import {getDirVideos} from "@/sanity/sanity-utils"
import PostCard from "../../component/PostCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
type Props = {
    params: { videoDir: string };
}

export default async function Video({ params }: Props) {
    const slug = params.videoDir
    const videos = await getDirVideos(decodeURI(slug))

    return(
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
        <div style={{ position: 'relative', width: '1200px' }}>
          <Box sx={{ flexGrow: 1,padding:"20px",height:"100vh" }}>
            <Grid container spacing={2} >

                {videos && videos["video"].map((video:any,index:number) => (
                    <>
                      <Grid item xs={4} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <PostCard img={videos["imageURL"][index]} name={video.name} key={video._id} id={video._id} class={video.class} link={video.videoUrl} tag="outterLink" height="10vw"/>
                      </Grid>
                    </>
                  ))}
                {!videos && <h1>loading...</h1>}

            </Grid>
          </Box>
        </div>
      </div>
    )
}