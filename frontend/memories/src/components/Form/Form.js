import React , {useState} from 'react'
import useStyles from './styles'
import {TextField , Button , Typography , Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'
function Form() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [postData , setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault() ; 

    dispatch(createPost(postData))
  }

  const clear = () => {}

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField name="creator" variant='outlined' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData , creator : e.target.value})} />
        <TextField name="title" variant='outlined' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData , title : e.target.value})} />
        <TextField name="message" variant='outlined' fullWidth value={postData.message} onChange={(e)=> setPostData({...postData , message : e.target.value})} />
        <TextField name="tags" variant='outlined' fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData , tags : e.target.value})} />

        <div className={classes.fileInput}>
          <FileBase
          type="file"
          multiple={false}
          
          />
        </div>
        <Button className={classes.buttonSubmit} variant='container'color='primary'size = 'large'type='submit' fullWidth>Submit</Button>
        <Button variant='contained'color='secondary'size = 'small' onClick = {clear} fullWidth>clear</Button>
      </form>
    </Paper>
  )
}

export default Form