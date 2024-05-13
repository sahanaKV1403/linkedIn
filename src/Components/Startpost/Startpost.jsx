import React, { useRef, useState } from 'react'
import Card from '@mui/material/Card';
import { purple, orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TextField from '@mui/material/TextField';
import myphoto from "./myphoto.jpg";
import { useStyles } from './StartpostStyles';

const Startpost = () => {
    const classes = useStyles();
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 14,
        },
    }));

    const Post = styled(Button)(() => ({
        borderRadius: "50px",
        border: "2px solid lightgrey",
        color: "darkgrey",
        fontWeight: "bold",
        fontSize: "17px",
        textTransform: 'none',
        width: "450px",
        margin: "10px 0px",
        padding: "5px 15px",
        justifyContent: 'start',
        '&:hover': {
            backgroundColor: "lightgrey"
        }
    }));

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const imageInputRef = useRef(null);
    const videoInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };
    const handleImageUpload = () => {
        imageInputRef.current.click();
    };
    const handleVideoUpload = () => {
        videoInputRef.current.click();
    };


    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedFile(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const removeSelectedFile = () => {
        setSelectedFile(null);
    };


    return (
        <Card className={classes.startpost_card}>
            <Avatar sx={{ margin: "10px 20px" }} src={myphoto}></Avatar>
            <Post onClick={handleClickOpen}>Start a post</Post>
            {/* modal */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle className={classes.dialog_title}>
                    <Avatar className={classes.dialog_avatar} src={myphoto}></Avatar>
                    <div>
                        <Typography><b>Sahana K V</b></Typography>
                        <Typography>Post to anyone</Typography>
                    </div>
                </DialogTitle>

                {/* cross mark */}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    className={classes.close}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers sx={{ width: 500, height: 600 }}    >
                    {selectedFile &&
                        (selectedFile.includes("data:image/jpeg;base64") ?
                            <img src={selectedFile} alt="Selected" style={{ width: '100%', height: "300px" }} />
                            :
                            (selectedFile.includes("data:video/mp4;base64") ?
                                <video controls style={{ width: '100%', height: "300px" }}>
                                    <source src={selectedFile} type="video/mp4" />
                                </video>
                                :
                                (selectedFile.includes("data:application/pdf;base64") ?
                                    <embed src={selectedFile + "#page=1"} type="application/pdf" width="100%" height="300px" />
                                    :
                                    null
                                )
                            )
                        )

                    }
                    {selectedFile &&
                        <Button onClick={removeSelectedFile} color="error" variant="contained" sx={{ float: 'right' }}>Remove</Button>
                    }
                    <TextField
                        multiline
                        rows={15}
                        placeholder='What do you want to talk about?'
                        className={classes.textfield}
                    />
                </DialogContent>

                <DialogActions sx={{ justifyContent: "flex-start" }}>
                    <LightTooltip title="Add a photo" placement="top">
                        <input type="file" style={{ display: 'none' }} accept=".jpg, .png, .gif" ref={imageInputRef} onChange={handleFileChange} />
                        <Avatar
                            className={classes.add_avatar}
                            onClick={handleImageUpload}
                        >
                            <ImageOutlinedIcon className={classes.add_icons} />
                        </Avatar>
                    </LightTooltip>

                    <LightTooltip title="Add a video" placement="top">
                        <input type="file" style={{ display: 'none' }} accept=".mp4" ref={videoInputRef} onChange={handleFileChange} />
                        <Avatar
                            className={classes.add_avatar}
                            onClick={handleVideoUpload}
                        >
                            <VideocamOutlinedIcon className={classes.add_icons} />

                        </Avatar>
                    </LightTooltip>
                    <LightTooltip title="Add a file" placement="top">
                        <input type="file" style={{ display: 'none' }} accept=".pdf" ref={fileInputRef} onChange={handleFileChange} />
                        <Avatar
                            className={classes.add_avatar}
                            onClick={handleFileUpload}
                        >
                            <AttachFileIcon className={classes.add_icons} />
                        </Avatar>
                    </LightTooltip>
                    <Button variant="contained" style={{ marginLeft: "180px", borderRadius: "10px", padding: "10px 20px" }}><b>POST</b></Button>


                </DialogActions>

            </BootstrapDialog>


            <ImageOutlinedIcon color='primary' sx={{ marginLeft: 6, fontSize: "30px" }} />
            <Typography variant="body2" className={classes.icon_labels} >
                <b>Photo</b>
            </Typography>
            <VideocamOutlinedIcon color='success' sx={{ fontSize: "40px" }} />
            <Typography variant="body2"  className={classes.icon_labels}>
                <b>Video</b>
            </Typography>
            <CasesOutlinedIcon sx={{ color: purple[600], fontSize: "30px" }} />
            <Typography variant="body2" className={classes.icon_labels}>
                <b>Job</b>
            </Typography>
            <InsertDriveFileOutlinedIcon sx={{ color: orange[600], fontSize: "30px" }} />
            <Typography variant="body2" className={classes.icon_labels} >
                <b>Write article</b>
            </Typography>

        </Card>

    )
}

export default Startpost



