"use client"
import { getProjects, getCoaches, getPosts, getVideoDir } from '@/sanity/sanity-utils'
import { typeCoaches } from '@/types/Project';
import Image from 'next/image';
import banner from "@/public/banner.jpg";
import CoachCard from "./component/CoachIntroductionCard"
import PostCard from './component/PostCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { Trykker } from 'next/font/google';
export default async function Home() {

  const coaches = await getCoaches();
  const posts = await getPosts();
  const videoDirs = await getVideoDir();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: 'relative', width: '1200px', height: '600px' }}>
          <Box sx={{ flexGrow: 1, padding: "20px" }}>
            <Image
              src={banner}
              alt="Picture of the banner"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        </div>
      </div>

      <br></br>

      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
        <div style={{ position: 'relative', width: '1200px' }}>
          <Box sx={{ flexGrow: 1, padding: "20px" }}>
            <Grid container spacing={2} >
              <Grid item xs={12} md={6} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Typography variant="h3" component="div" sx={{ backgroundImage: " linear-gradient(45deg, #f3ec78, #af4261)", backgroundSize: "100%", backgroundRepeat: "repeat", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>部落格文章</Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>

                <Grid container spacing={2} sx={{ width: "100%" }} >
                  {posts.slice(0, 4).map((post) => (
                    <>
                      <Grid item xs={6} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <PostCard img={post.image} name={post.name} id={post._id} class={post.class} link="posts" tag="innerLink" />
                      </Grid>
                    </>
                  ))}
                </Grid>

              </Grid>

            </Grid>
          </Box>
        </div>
      </div>


      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: 'relative', width: '1200px' }}>
          <Box sx={{ flexGrow: 1, padding: "20px" }}>
            <Grid container spacing={2} >
              {
                coaches.map((coach) => (
                  <>
                    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                      <CoachCard img={coach.image} name={coach.name} id={coach._id} />
                    </Grid>
                  </>
                ))
              }
            </Grid>
          </Box>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
        <div style={{ position: 'relative', width: '1200px' }}>
          <Box sx={{ flexGrow: 1, padding: "20px" }}>
            <Grid container spacing={2} >
              <Grid item xs={12} md={6} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Typography variant="h3" component="div" sx={{ backgroundImage: " linear-gradient(45deg, #f3ec78, #af4261)", backgroundSize: "100%", backgroundRepeat: "repeat", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>影音內容</Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>

                <Grid container spacing={2} sx={{ width: "100%",justifyContent:"center" }} >
                  {videoDirs.slice(0, 4).map((videoDir:any) => (
                    <>
                      <Grid item xs={6} md={8} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <PostCard img={videoDir.image} name={videoDir.name} id={videoDir._id} class={videoDir.class} link="videoDirs" tag="innerLink" height='15vw' />
                      </Grid>
                    </>
                  ))}
                </Grid>

              </Grid>

            </Grid>
          </Box>
        </div>
      </div>
    </div>
  )
}

