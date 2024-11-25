import * as React from 'react';
import { Container, styled } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Reveal from './Reveal';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LetsConnectPopup from "./LetsConnectPopup";

import  { GradientGitHubIcon, GradientLinkedInIcon}  from './../icons/SocialIcon'; 


const MainHeadSection = styled(`div`)({
    background: '#000',
    'padding': '150px 30px',
    'color': '#fff',
    border: '1px solid #242424;',

    '@media (max-width: 600px)': {
        'padding': '150px 0px',
    },
    
})


const LetsConnet = styled('div')({
    fontSize: '50px',
    display: 'inline-block',
    borderBottom: '1px solid #000',
    cursor: 'pointer',

    '&:hover': {
        borderBottom: '1px solid #fff',
        color: '#b2b2b2'
    }
})

const EmailSection = styled('div')({
    fontSize: '20px',
    marginTop: '30px',
    color: '#b2b2b2'
})


const Heading = styled('div')({
    marginBottom: '20px',
    fontSize: '20px'

})

const SubHeading = styled('div')({
    color: '#b2b2b2',
    marginBottom: '50px',
    fontSize: '18px'
})


const CenterAlign = styled('div')({
    display: 'flex',
    marginTop: '20px'
})

const IconFotter = styled('a')({
    color: '#ffd400',
    'display': 'inlin-block',
    'marginRight': '20px',
    'transition': 'fill 0.3s ease',

    '&:hover svg': {
        fill: '#b2b2b2',
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




function Fotter() {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div>
                <MainHeadSection>
                    <Container maxWidth="xl">
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={7}>
                                    <Reveal>  <LetsConnet className="poppins-medium" onClick={handleClickOpen}>  Let's <br /> Connect </LetsConnet> </Reveal>
                                    <Reveal>  <EmailSection className="poppins-regular"> aniketsinghinform@gmail.com </EmailSection> </Reveal>
                                    <Reveal> <EmailSection className="poppins-regular"> 7011283041 </EmailSection> </Reveal>

                                </Grid>
                                <Grid item xs={12} sm={12} md={5} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Reveal>
                                                <Heading className="poppins-regular"> Skills </Heading>
                                            </Reveal>
                                            <Reveal>
                                                <SubHeading>
                                                    Check out the things I'm good at, frontend and backed skilset and more.
                                                </SubHeading>
                                            </Reveal>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} > </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Reveal>
                                                <Heading className="poppins-regular"> Experience </Heading>
                                            </Reveal>
                                            <Reveal>
                                                <SubHeading>
                                                    Check out the things I'm good at, from development software to design and more.
                                                </SubHeading>
                                            </Reveal>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>

                                            <Reveal>
                                                <Heading className="poppins-regular"> Resume </Heading>
                                            </Reveal>
                                            <Reveal>
                                                <SubHeading>
                                                    See my work history and what I've achieved in a quick and easy resume.
                                                </SubHeading>
                                            </Reveal>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <CenterAlign>
                                        <IconFotter target="_blank" href="https://www.linkedin.com/in/aniketsingh2000/"> <GradientLinkedInIcon style={{ fontSize: '50px' }}></GradientLinkedInIcon> </IconFotter>
                                        <IconFotter target="_blank" href="https://github.com/aniketsingh2000"> <GradientGitHubIcon style={{ fontSize: '50px' }}></GradientGitHubIcon> </IconFotter>
                                        <ResumeButton className='poppins-semibold' target='_blank' href='https://docs.google.com/document/d/1P0OxUd-6MtyXn6jukHY14IroQxMwrRENTjj6tX40t5g/edit?usp=sharing'> View Resume </ResumeButton>
                                    </CenterAlign>
                                </Grid>
                            </Grid>
                        </Box>

                        <LetsConnectPopup isOpen={open} isClose={handleClose}></LetsConnectPopup>


                    </Container>
                </MainHeadSection>

            </div>
        </div>
    )
}

export default Fotter;