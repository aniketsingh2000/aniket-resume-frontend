import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Reveal from './Reveal';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';




import s1img from './../assets/images/projects/supplycopia-1.png';
import s2img from './../assets/images/projects/supplycopia-2.png';
import s3img from './../assets/images/projects/supplycopia-3.png';
import s4img from './../assets/images/projects/supplycopia-4.png';
import s5img from './../assets/images/projects/supplycopia-5.png';

import ism1img from './../assets/images/projects/ism-1.png';
import ism2img from './../assets/images/projects/ism-2.png';
import ism3img from './../assets/images/projects/ism-3.jpg';
import ism4img from './../assets/images/projects/ism-4.png';
import ism5img from './../assets/images/projects/ism-5.png';

import ds1img from './../assets/images/projects/ds-1.png';
import ds2img from './../assets/images/projects/ds-2.png';
import ds3img from './../assets/images/projects/ds-3.png';
import ds4img from './../assets/images/projects/ds-4.png';
import ds5img from './../assets/images/projects/ds-5.png';



import BackGif from './../assets/images/gif/textured-back.gif'


const BackgroundGif = styled('div')({
    background: 'linear-gradient(225deg, rgb(179 226 255 / 30%) 0%, rgb(103 102 253 / 30%) 49%, rgb(149 255 155 / 30%) 100%)',
    borderRadius : '30px'
})

const MainHeadSection = styled('div')({
    'background-image': `url(${BackGif})`,
    color: '#fff',
    borderRadius : '30px'
});

const ShadowElement = styled('div')({
    background: 'linear-gradient(225deg, rgb(179 226 255 / 30%) 0%, rgb(103 102 253 / 30%) 49%, rgb(149 255 155 / 30%) 100%)',
    marginTop: '18vh',
    padding: '70px 100px 150px',
    borderRadius : '30px'
});

const SmallText = styled('div')({
    display: "inline-block",
    color: "#222",
    fontSize: "20px",
    borderBottom: "1px solid #222",
    paddingBottom: '5px',
    marginTop: '-50px',
})


const SingleSection = styled('div')({
    // filter: 'grayscale(1)',
    transition: '.4s ease all',
    marginBottom: '100px',
    '&:hover': {
        // filter: 'grayscale(0)',
        transition: '.4s ease all'
    },
    '&.marginTopExtra': {
        marginTop: '100px',
    },
    '&.noMargin': {
        marginBottom: 0,
    }
});

const SingleImage = styled('img')({
    width: '100%',
    borderRadius: '20px',
    // 'boxShadow' : '0 0px 40px rgb(0 0 0 / 30%)',

    '&.project-logo': {
        background: 'red'
    },

    '&.single-bottom-image' : {
        marginTop : '16px'
    }
});

const ProjectHeading = styled('div')({
    fontSize: '6rem',
    // fontWeight: 'bold',
    color: '#222',
    // textShadow: '0 0px 100px rgb(0 0 0 / 21%)'
});



function Projects() {

    const supplycopia = `
    function SupplyCopiaProject(){
       return { 
          "project_name" : "SupplyCopia",

          "domain" : "HealthCare Supplychain.",

          "project_info" : "SupplyCopia is the fully integratedhealthcare platform that integrates data,
                            applications. Using a machine learning-based analytical
                            engine and a user-friendly interface. ",

          "technical_info" : "Frontend - Angular, Rxjs, Typescript, HTML, CSS-Responsive, Bootstrap, Material UI.
                              Backend - NodeJS, ExpressJS, MongoDB, AWS, Amazone-Redshift, ElasticSearch, SQL. 
                              and other libraries.",

          "my_role" : "In this Project I am work as a senior software developer take care of whole 
                       Frontend Development ( UI PSD to HTMl/CSS, API Integration, Component development, 
                       Module based development). and
                       Backend Development  ( Microservices Architecture, Create Rest API's, Cron Jobs setup, Database )"
       }
    }

    const data =  SupplyCopiaProject();

    `;



    const ism = `
    function IsocietyManagerProject(){
       return { 
          "project_name" : "iSocietyManager",

          "domain" : "Facility Management and Visitor Management System.",

          "project_info" : "iSocietyManager is a complete Society Management App with Society Accounting, Vendor, 
                            Inventory, Purchase, Security, Billing, Helpdesk, Amenity Booking, Guard Patrolling, 
                            Boom Barrier Integration, Smart Meter Integration. ",

          "technical_info" : "Frontend - Ionic Framwork, Cordova, android-studio, Javascript, AngularJS, ReactJS, Redux, 
                                         Typescript, HTML, CSS-Responsive, Bootstrap, Material UI.
                              Backend - NodeJS, ExpressJS, MongoDB, SQL, and other libraries.",

          "my_role" : "In this Project I am work as a software developer take care of whole 
                       Hybrid Mobile application developemnt,
                       Frontend Development ( UI PSD to HTMl/CSS, API Integration, Component development, 
                       Module based development). and
                       Backend Development  ( Microservices Architecture, Create Rest API's, Cron Jobs setup, Database)"
       }
    }

    const data =  IsocietyManagerProject();

    `;


    const deviceDisk = `
    function MultipleProjects(){
       return { 
          "project_name" : "DeviceDisk",

          "domain" : "Multiple Domain Sites.",

          "project_info" : "Tmen Security, Travsolve, ATrueCFO",

          "technical_info" : "Frontend - Javascript, HTML, CSS-Responsive, scss,
                              Bootstrap, Material UI, animate-JS. other libraries",

          "my_role" : "In this Project I am work as a Frontend Developer take 
                       care of whole Frontend Development ( UI PSD to HTMl/CSS,
                       API Integration, Responsivness, Cross Browser Optimizatin,
                       SEO of sites.)"
       }
    }

    const data =  MultipleProjects();

    `;


    return (
        <div>
            <div>

            <Container maxWidth="xl">

                <BackgroundGif>
                    <MainHeadSection>

                        <ShadowElement>
                        
                          
                            <ProjectHeading className='poppins-regular '>
                                My Work
                            </ProjectHeading>
                 
                            <div className='clearBoth'></div>
                           <SmallText> as a Creative team player  </SmallText>
                            <div className='clearBoth'>  </div>

                            <div className='clearBoth'></div>
                           

                            <SingleSection className='marginTopExtra'>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <SingleImage src={s3img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={s4img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={s2img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={s1img} />
                                            <SingleImage className='single-bottom-image' src={s5img} />
                                            {/* <SingleImage className='project-logo' src={supplycopiaLogo} /> */}
                                        </Grid>
                                        <Grid item xs={8}>
                                            <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={{ padding: '20px', borderRadius: '20px', marginTop: '0px', marginBottom: '0px' }} >
                                                {supplycopia}
                                            </SyntaxHighlighter>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </SingleSection>




                            <SingleSection>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <SingleImage src={ism1img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={ism2img} />
                                        </Grid>
                                        <Grid className='pos-relative' item xs={4}>
                                            <div className='pos-absolute'>
                                            <SingleImage  src={ism3img} />
                                            <SingleImage className='single-bottom-image' src={ism5img} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={{ padding: '20px', borderRadius: '20px', marginTop: '0px', marginBottom: '0px' }} >
                                                {ism}
                                            </SyntaxHighlighter>
                                        </Grid>
                                        <Grid item xs={4}>

                                        </Grid>
                                        <Grid item xs={8}>
                                            <SingleImage src={ism4img} />
                                            {/* <SingleImage className='project-logo' src={supplycopiaLogo} /> */}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </SingleSection>


                            <SingleSection className='noMargin'>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <SingleImage src={ds4img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={ds1img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={ds2img} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SingleImage src={ds3img} />
                                            <SingleImage className='single-bottom-image' src={ds5img} />
                                            {/* <SingleImage className='project-logo' src={supplycopiaLogo} /> */}
                                        </Grid>
                                        <Grid item xs={8}>
                                            <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={{ padding: '20px', borderRadius: '20px', marginTop: '0px', marginBottom: '0px' }} >
                                                {deviceDisk}
                                            </SyntaxHighlighter>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </SingleSection>

                        </ShadowElement>
                    </MainHeadSection>
                </BackgroundGif>

                </Container>


            </div>
        </div>
    )
}

export default Projects;