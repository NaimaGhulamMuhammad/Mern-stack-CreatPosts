import React, {useEffect} from 'react';
import {AppBar, Toolbar, Typography, Button, Grid} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import useStyles from "./styles";
import Posts from "./components/posts/Posts"
import Form from "./components/Form";
import { useDispatch} from "react-redux"
import { getPosts } from "./store/action"

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getPosts())
    }, [dispatch])

    const [open, setOpen] = React.useState(false);
  const close = () => {
    setOpen(false)
  }
  const clickOpen = () => {
    setOpen(true)
  }
    return (
        <Grid container direction="column" >
            <Grid item>
            <AppBar className={classes.appBar} position="static"> 
                <Toolbar>
                    <Typography className={classes.logo}>
                        MERN STACK
                    </Typography>
                    <Button className={classes.barBtn} onClick={clickOpen}
                    > Create<AddIcon />
                    </Button>
                    <Form close={close} open={open} />
                </Toolbar>
            </AppBar>
            </Grid>
            <Grid item container>
                <Posts />
            </Grid>

        </Grid>
    )
}
export default App;