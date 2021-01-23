import React from 'react';
import {Grid, CircularProgress} from "@material-ui/core"
import { useSelector} from "react-redux"
import SinglePost from "./singlePost"

const Posts = () => {

    const posts = useSelector(state => state.posts)
    console.log(posts)
    return (
        <>
        { posts.length? <CircularProgress  /> :
            posts.map((posts) => {
                <Grid key={posts.title} item>
                <SinglePost posts={posts}/>
                </Grid>
            })
        }
        </>
    )
}

export default Posts
