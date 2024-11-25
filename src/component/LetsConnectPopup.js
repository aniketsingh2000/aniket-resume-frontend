
import * as React from 'react';
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

import { GradientGitHubIcon, GradientLinkedInIcon } from './../icons/SocialIcon';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CenterAlign = styled('div')({
    display: 'flex',
    marginTop: '30px',
    marginBottom: '10px',
    justifyContent: 'center'
})

const IconFotter = styled('a')({
    color: '#ffd400',
    'display': 'inlin-block',
    'marginRight': '20px',

    '&:hover': {
        color: '#b2b2b2',
    }
})

const ResumeButton = styled('a')({
    padding: '14px 28px',
    background: 'linear-gradient(99deg, #9063F4, #517DED)',
    borderRadius: '40px',
    color: '#fff',
    // marginTop: '50px',
    display: 'inline-block',
    display: 'flex',
    alignItems: 'center',
    height : '30px',

    '&:hover': {
        background: 'linear-gradient(99deg, #994ECC, #3E187A)'
    }

})



const BoldInfo = styled('span')({
    fontWeight: 'bold',
    color: '#000'
})


const CloseIconSpan = styled('span')({
    float: 'right',
    cursor: 'pointer'
})

function LetsConnectPopup(props) {

    const handleClose = () => {
        props.isClose();
    }

    return (
        <Dialog
            open={props.isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Connect with me !"} <CloseIconSpan onClick={handleClose}> <CloseIcon></CloseIcon> </CloseIconSpan> </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    I am a skilled software developer with expertise in End to End Software Development, Web apps, Hybrid Mobile apps, Frontend, Backend and more.
                    Dedicated to delivering top-notch solutions, I thrive on tackling challenges head-on.
                    Let's team up to take your projects to the next level.  Excited to collaborate with you!
                    <br />
                    <br />
                    Reach out to me at : <BoldInfo> aniketsinghinform@gmail.com,  7011283041</BoldInfo>

                    <CenterAlign>
                        <IconFotter target="_blank" href="https://www.linkedin.com/in/aniketsingh2000/"> <GradientLinkedInIcon style={{ fontSize: '50px' }}></GradientLinkedInIcon> </IconFotter>
                        <IconFotter target="_blank" href="https://github.com/aniketsingh2000"> <GradientGitHubIcon style={{ fontSize: '50px' }}></GradientGitHubIcon> </IconFotter>
                        <ResumeButton className='poppins-semibold' target='_blank' href='https://docs.google.com/document/d/1P0OxUd-6MtyXn6jukHY14IroQxMwrRENTjj6tX40t5g/edit?usp=sharing'> View Resume </ResumeButton>
                    </CenterAlign>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )

}


export default LetsConnectPopup;