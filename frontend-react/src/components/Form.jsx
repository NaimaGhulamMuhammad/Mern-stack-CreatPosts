import React, {useState} from 'react';
import { TextField, Button, Dialog, DialogContent, Grid, IconButton, DialogTitle } from "@material-ui/core"
import FileBase from "react-file-base64"
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from "react-redux"
import useStyles from "../styles/formStyle"

import {createPost} from "../store/action"
const Form = (props) => {

const [postData, setData] = useState({
  title:'', description:'', uName:'', tags:'', image:''
})

const dispatch = useDispatch()

const submit = (e) => {
  e.preventDefault();
  console.log(postData)
  dispatch(createPost(postData))
}

const classes = useStyles()
const {close, open} = props
  return (
    <Grid>
      <Dialog open={open} onClose={close} className={classes.size} >
        <DialogTitle id="form-dialog-title" className={`${classes.color} ${classes.bgcolor}`}>Create a Memory
          <IconButton style={{float:"right", color:"white"}} onClick={close}>
          <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={submit}>
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            type="text"
            value={postData.title}
            onChange={(e) => setData({...postData, title:e.target.value})}
            fullWidth
            label="Title"            
          />
          <TextField
            margin="dense"
            variant="outlined"
            type="textarea"
            fullWidth
            label="Description"
            value={postData.description}
            onChange={(e) => setData({...postData, description:e.target.value})}
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            variant="outlined"
            type="text"
            fullWidth
            label="User Name"
            value={postData.uName}
            onChange={(e) => setData({...postData, uName:e.target.value})}
          />
          <TextField
            margin="dense"
            variant="outlined"
            type="text"
            fullWidth
            label="Tags"
            value={postData.tags}
            onChange={(e) => setData({...postData, tags:e.target.value})}
          />
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={(base64) => setData({...postData, image:base64})}
            />
          </div>
          <Button  className={`${classes.bgcolor} ${classes.color} ${classes.hover}`} fullWidth type="submit">
            Create
          </Button>
          
        </form>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

export default Form


