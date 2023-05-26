"use client"
import { getCoach, getCoaches, getCoachPost } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CoachCard from "@/app/(site)/component/CoachIntroductionCard"
import Link from 'next/link';
import { Padding } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PostCard from "../../component/PostCard";
type Props = {
    params: { coach: string };
}

export default async function Coach({ params }: Props) {
    const slug = params.coach
    const coach = await getCoach(decodeURI(slug))
    const coaches = await getCoaches(decodeURI(slug))
    const coachPosts = await getCoachPost(coach._id)




    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: 'relative', width: '100%' }}>

                <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                    <Grid container spacing={2} sx={{ backgroundColor: "#6B4240" }}>
                        <Grid item xs={3} sx={{ backgroundColor: "#6B4240" }}>
                            <br />
                        </Grid>
                        <Grid item xs={1} sx={{ backgroundColor: "#6B4240", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                {coach.coach}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sx={{ backgroundColor: "#000000", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                {coach.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sx={{ backgroundColor: "#6B4240", display: "flex", justifyContent: "center" }}>
                            <div>
                                <IconButton aria-label="instagram">
                                    <InstagramIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                </IconButton>
                                <IconButton aria-label="facebook">
                                    <FacebookIcon sx={{ color: "white", fontSize: 40, "&:hover": { color: "#c9a063" } }} />
                                </IconButton>
                            </div>
                        </Grid>


                        <Grid item xs={3} sx={{ backgroundColor: "#000000" }}>
                            <br />
                        </Grid>
                        <Grid item xs={9} sx={{ backgroundColor: "#000000" }}>
                            <Typography variant="h6" component="div" sx={{ color: "#ffffff", maxWidth: "70%" }}>
                                <PortableText value={coach.content} />
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>

                <Box
                    sx={{
                        height: "50px",
                        backgroundColor: '#ffffff',

                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} sx={{ backgroundColor: "#FFFFFF", paddingLeft: "0px" }}>
                        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <Image
                                    src={coach.image}
                                    alt="Picture of coach"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <Stack spacing={2}>

                                <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD", maxWidth: "70%" }}>專長</Typography>
                                {
                                    coach.skill.map((skill: string) => (<Typography variant="subtitle1" component="div" sx={{ color: "#000000", maxWidth: "70%" }}>{skill}</Typography>))
                                }
                                {coach.prizes && <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD", maxWidth: "70%" }}>獎項</Typography>}
                                {coach.prizes && coach.prizes.map((prize: string) => (<Typography variant="subtitle1" component="div" sx={{ color: "#000000", maxWidth: "70%" }}>{prize}</Typography>))}
                                <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD", maxWidth: "70%" }}>教練經歷</Typography>
                                {
                                    coach.experience.map((experience: string) => (<Typography variant="subtitle1" component="div" sx={{ color: "#000000", maxWidth: "70%" }}>{experience}</Typography>))
                                }
                                <Typography variant="h6" component="div" sx={{ color: "#000000", backgroundColor: "#DCDDDD", maxWidth: "70%" }}>教練證照</Typography>
                                {
                                    coach.license.map((license: string) => (<Typography variant="subtitle1" component="div" sx={{ color: "#000000", maxWidth: "70%" }}>{license}</Typography>))
                                }
                            </Stack>
                        </Grid>

                    </Grid>
                </Box>


                <Box sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
                    <Divider textAlign="left" >
                        <Typography variant="h6" component="div" sx={{ color: "#000000" }}>其他教練</Typography>
                    </Divider>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ position: 'relative', width: '1200px' }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    {
                                        coaches.map((coach) => (
                                            <>
                                                <Grid item xs={4} sx={{ maxWidth: "100%" }}>
                                                    <CoachCard img={coach.image} name={coach.name} id={coach._id} />
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </div>
                    </div>
                </Box>

                <Box sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
                    <Divider textAlign="left" >
                        <Typography variant="h6" component="div" sx={{ color: "#000000" }}>撰寫文章</Typography>
                    </Divider>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ position: 'relative', width: '1200px' }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    {
                                        coachPosts.map((coachPost) => (
                                            <>
                                                <Grid item xs={4} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                                    <PostCard img={coachPost.image} name={coachPost.name} id={coachPost._id} class={coachPost.class} />
                                                </Grid>
                                            </>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}