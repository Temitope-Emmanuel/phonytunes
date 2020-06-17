import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDropzone} from 'react-dropzone' 
import axios from 'axios'
import {Dialog,Box,DialogContent,TextField,DialogActions} from '@material-ui/core';
import { blue,red } from '@material-ui/core/colors';
import {CloudinaryContext,Image} from "cloudinary-react"
// import config from  "../../lib/config"
import BurstModeIcon from '@material-ui/icons/BurstMode';

const useStyles = makeStyles(theme => ({
    root:{},
    fileContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignitems:"center",
        justifyContent:"center",
    }
}))


const SimpleDialogDemo =  function({open,handleToggle}) {
    const [file,setFile] = React.useState(null)
    const [name,setName] = React.useState("")
    const handleDrop = async (file) => {
        setFile(file[0])
        console.log(file)
    }

    const {isDragAccept,getRootProps,getInputProps,acceptedFiles} = useDropzone({
        accept:'image/jpeg,image/png',
        onDrop:handleDrop
    })

    const classes = useStyles()

    const handleChange = (e) => {
        console.log(e)
    }
    const handleSubmit = async () => {
        const payload = {name,file}

        const formData = new FormData();
        formData.append('file',file)
        formData.append('upload_preset',process.env.CLOUDINARY_PRESET)

        console.log(formData)

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_URL}/image/upload`
            ,formData
        )
    }
    
    return (
        <Dialog onClose={handleToggle} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">Create A New Transaction</DialogTitle>
          <DialogContent style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"space-between"
          }}>
              <Box {...getRootProps({className:classes.infoContainer})}>
                  <input {...getInputProps()} />
                  {!(acceptedFiles.length > 0) ? 
                  <p>Drag 'n' drop some files here, or click to select files</p>
                  :
                  <p>A file image as been selected</p>
                  }
                  <em>(Only *.jpeg and *.png images will be accepted)</em>
              </Box>
              <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                defaultValue="Input Any comment You would like us to know"
                variant="outlined"
                style={{
                    margin:"1em .5em"
                }}
            />
          </DialogContent>
          <DialogActions>
              <Button style={{
                  backgroundColor:red[100],
                  color:red[900],
                  padding:'.5em 1.5em'
              }}>Cancel</Button>
              <Button style={{
                  backgroundColor:blue[100],
                  color:blue[900],
                  padding:'.5em 1em'
              }}>Submit</Button>
          </DialogActions>
        </Dialog>
      );
}

SimpleDialogDemo.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default SimpleDialogDemo
  