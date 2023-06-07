"use client"
import { getPosts } from '@/sanity/sanity-utils'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArticleCard from '../component/ArticleCard';


type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    search?: string;
  };
};

export default async function PostArchive(props: Props) {

  const posts = await getPosts();
  const tagSet = [...new Set(posts.map(post => post.class))]
  console.log(tagSet)
  if (!props.searchParams?.search) {
    console.log("all post")
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
      <div style={{ position: 'relative', width: '1200px' }}>
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
          <Chip
            label="全部文章"
            component="a"
            href="posts"
            variant="outlined"
            clickable
            sx={{marginRight:"10px"}}
          />
          {
            tagSet.map((tag) => (
              <Chip
                label={tag}
                component="a"
                href={`/posts?search=${tag}`}
                variant="outlined"
                clickable
                sx={{marginRight:"10px"}}
              />

            ))
          }

        </Box>
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
          {!props.searchParams?.search &&
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6B4240" }}>
              全部文章
            </Typography>
          }
          {props.searchParams?.search &&
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#6B4240" }}>
              {props.searchParams?.search}
            </Typography>
          }
          <Grid container spacing={2} >

            {!props.searchParams?.search && posts.map((post) => (
              <>
                <Grid item xs={12} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <ArticleCard img={post.image} name={post.name} key={post._id} id={post._id} class={post.class} writer={post.writer} date={post._createdAt} tags={post.tags} />
                </Grid>
              </>
            ))}
            {props.searchParams?.search && posts.filter((post) => (post.class === props.searchParams?.search)).map((post) => (
              <>
                <Grid item xs={12} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <ArticleCard img={post.image} name={post.name} key={post._id} id={post._id} class={post.class} writer={post.writer} date={post._createdAt} tags={post.tags} />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  )
}