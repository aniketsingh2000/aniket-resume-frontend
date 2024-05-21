import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Reveal from './Reveal';

import { useState, useRef } from "react";
import { motion, transform, useInView } from "framer-motion";



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
import { overlay } from 'three/examples/jsm/nodes/Nodes.js';
import { Hidden } from '@mui/material';

const BackgroundGif = styled('div')({
    // background: 'linear-gradient(225deg, rgb(179 226 255 / 30%) 0%, rgb(103 102 253 / 30%) 49%, rgb(149 255 155 / 30%) 100%)',
    // borderRadius : '30px'
})

const MainHeadSection = styled('div')({
    // 'background-image': `url(${BackGif})`,
    // color: '#fff',
    // borderRadius : '30px'
});

const ShadowElement = styled('div')({
    // background: 'linear-gradient(225deg, rgb(179 226 255 / 30%) 0%, rgb(103 102 253 / 30%) 49%, rgb(149 255 155 / 30%) 100%)',
    marginTop: '18vh',
    marginBottom: '18vh',
    // padding: '70px 100px 150px',
    borderRadius: '30px'
});

const SmallText = styled('div')({
    display: "inline-block",
    color: "#222",
    fontSize: "20px",
    borderBottom: "1px solid #222",
    paddingBottom: '5px',
    marginTop: '-50px',

    '@media (max-width: 600px)': {
        textAlign : 'center',
        margin : '0 auto',
        width : '100%'
    },
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
    // borderRadius: '20px',
    // 'boxShadow': '0px 0px 30px 0px rgb(187 196 210 / 30%)',

    '&.single-bottom-image': {
        marginTop: '16px'
    },

    '&.app-view': {
        maxWidth: '90%',
        maxHeight: '90%',
        width: 'auto',
        height: 'auto',
        display: 'block',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        '@media (max-width: 1024px)': {
            maxWidth: '80%',
            maxHeight: '80%',
        },

        '@media (max-width: 600px)': {
            maxWidth: '90%',
            maxHeight: '90%',
        },
    }
});

const ProjectHeading = styled('div')({
    fontSize: '6rem',
    // fontWeight: 'bold',
    color: '#222',
    // textShadow: '0 0px 100px rgb(0 0 0 / 21%)'


    '@media (max-width: 600px)': {
        fontSize: '3rem',
        textAlign : 'center'
    },
});



const ProjectUl = styled('ul')({
    padding: '0px',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
})


const ProjectList = styled('li')({

    float: 'left',
    listStyle: 'none',
    padding: '50px  0px',
    '&.half-section': {
        width: 'calc(50% - 50px)',

    },

    '&.code-section' : {
        minWidth : '100%',
        maxWidth : '100%',
        overflow : 'hidden'
    },

    '&.top-extra-padding': {
        paddingTop: '160px'
    },

    '& .app-view': {
        display: 'block',
        height: 'calc(50vw - 300px)',

        '@media (max-width: 768px)': {
         height: 'calc(50vw - 100px)',
        },

        '@media (max-width: 600px)': {
            height: 'calc(100vw - 100px)',
        },

    },

    '& .back-light-blue': {
        background: '#CDECFF',
    },

    '& .back-light-yellow': {
        background: '#fff0b4'
    },

    '& .back-light-green': {
        background: '#c2fdc4'
    },

    '& .back-light-pink': {
        background: '#fac6d2'
    },

    '& .back-dark-blue': {
        background: '#334b92',
    },

    '& .back-dark-yellow': {
        background: '#ffd400'
    },

    '& .back-dark-green': {
        background: '#027b71'
    },

    '& .back-dark-pink': {
        background: '#db7c83'
    },

    '&:hover .hover-img-box' : {
        transform : 'scale(1.03)',
        transition : 'all 200ms ease-in'
    },



    '@media (max-width: 600px)': {
        '&.half-section': {
            width: '100%',
        },

        '&.top-extra-padding': {
            paddingTop: '50px'
        },
    },


})

const SingleProjectHeading = styled('div')({
    fontSize: '26px',
    textTransform: 'capitalize',
    color: '#222',
    margin: '10px 0px 5px 0px',

    '@media (max-width: 600px)': {
        fontSize: '20px',
        margin: '20px 0px 5px 0px',
    },

})

const SingleProjectDescription = styled('div')({
    fontSize: '14px',
    color: '#222',
})


function ProjectsTwo() {


    // const handleSetView = (ind) => {
    //     if(!isInView[ind]){}
    //    let obj = {};
    //    obj[ind] = true;
    //    setIsInView({...isInView,...obj})
    // }

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

          "technical_info" : "Frontend - Javascript, HTML, CSS-Responsive, scss, Bootstrap, Material UI, animate-JS. other libraries",

          "my_role" : "In this Project I am work as a Frontend Developer take care of whole Frontend Development ( UI PSD to HTMl/CSS,
                       API Integration, Responsivness, Cross Browser Optimizatin, SEO of sites.)"
       }
    }

    const data =  MultipleProjects();

    `;



    const projectsArr = [
        { type: 'image', value: s3img, class: 'half-section', description: 'This module shows the report dynamically so that each user can create his or her own query in accordance with the report requirements.', heading: 'analytics module', adjust_image_class: 'app-view back-dark-blue' },
        { type: 'image', value: s2img, class: 'half-section top-extra-padding', description: 'The ACM maintains the relationship between admins and members, where the admin will activate the member and expire the member policy on a timely basis. ', heading: 'Advance contract management', adjust_image_class: 'app-view back-dark-pink' },
        { type: 'image', value: s4img, class: 'half-section', description: 'It maintains pref-card skus, generates cases by using equipment biils and maintains the history of particular preference cards.', heading: 'Preference Card module', adjust_image_class: 'app-view back-light-yellow' },
        { type: 'image', value: s1img, class: 'half-section top-extra-padding', description: 'The purpose of Manage Contract is to help users maintain a contract policy between the hospital and its members.', heading: 'Manage Contracts', adjust_image_class: 'app-view back-light-green' },
        { type: 'code', value: supplycopia, class: 'one-third-section code-section', description: '', heading: '' },

        { type: 'image', value: ism1img, class: 'half-section', description: 'The dashboard allows each user to add different types of chart components according to a module basis. They can also create multiple dashboards according to the needs on a daily basis by dragging and dropping components.', heading: 'Dashboard', adjust_image_class: 'app-view back-dark-yellow' },
        { type: 'image', value: ism4img, class: 'half-section top-extra-padding', description: "Make your Real Estate - building and property smart. Take informed decisions about your facilities operation, maintenance, finance, helpdesk, employees on top of real time data", heading: 'Facility management system', adjust_image_class: 'app-view back-dark-green' },
        { type: 'image', value: ism2img, class: 'half-section', description: 'The bill generated for residents and tenants keeps track of meter and fuel consumption and organizes and prints the whole society\'s residents\' bill at the same time. ', heading: 'Society bill generate', adjust_image_class: 'app-view back-light-pink' },
        { type: 'image', value: ism3img, class: 'half-section top-extra-padding', description: 'iSocietyManager is a complete Society Management App with Society Accounting, Vendor, Inventory, Purchase, Security, Billing, Helpdesk, Amenity Booking, Guard Patrolling, Boom Barrier Integration, Smart Meter Integration.', heading: 'Resident and tenant app', adjust_image_class: 'app-view back-light-blue' },
        { type: 'code', value: ism, class: 'one-third-section code-section', description: '', heading: '' },

        { type: 'image', value: ds1img, class: 'half-section', description: 'ATrueCfO is a Finance & Business Advisor organisation that run in highly professional manner whilst ensuring “Excellence in Execution” and at the same time delivering superior value to the clients. Focus here is to have seamless experience for the clients in most transparent and ethical manner.', heading: 'AtrueCFO', adjust_image_class: 'app-view back-light-yellow' },
        { type: 'image', value: ds2img, class: 'half-section top-extra-padding', description: 'Travsolve-Best Travel Technology Consultants.One stop solution for Travel Domain providing Travel Technology Consultancy, Training & Travel Services for Travel agents & Corporates.', heading: 'travsolve', adjust_image_class: 'app-view back-light-blue' },
        { type: 'image', value: ds3img, class: 'half-section', description: 'Tmen offers solutions for all your IT needs such as Entire Network, Wi-Fi, Mailing Solution & Infrastructure , Internet Leased Lines & MPLS, Server & Link Load Balancing, Gateway Security (Firewall & UTM Appliance), Switching, Routing, SSL VPN, Bandwidth Management, Web Application Firewall, Network Access Control, SIEM/Log Management, Secured Print Solutions, Backup & DR, Replication, Storage, FMS, WAN Optimization, VC, etc.', heading: 'Tmen systems', adjust_image_class: 'app-view back-dark-blue' },
        { type: 'image', value: ds4img, class: 'half-section top-extra-padding', description: 'Tmen Systems is system integrator and taking care of end to end IT infrastructure, we create solution as per the need of the organization instead of product pitching.', heading: 'Tmen systems', adjust_image_class: 'app-view back-dark-green' },
        { type: 'code', value: deviceDisk, class: 'one-third-section code-section', description: '', heading: '' },
    ]


    return (
        <div>
            <div>

                <Container maxWidth="xl">

                    <BackgroundGif>
                        <MainHeadSection>

                            <ShadowElement>


                                <Reveal>
                                    <ProjectHeading className='poppins-regular'>
                                        My Work
                                    </ProjectHeading>
                                </Reveal>

                                <div className='clearBoth'></div>
                                <Reveal>
                                    <SmallText> as a Creative team player  </SmallText>
                                </Reveal>

                                <ProjectUl>
                                    {
                                        projectsArr.map((item,index) => (
                                            <ProjectList key={index} className={item.class}>
                                                {item.type === 'image' ?
                                                        <SectionImg>
                                                        <div style={{ position: 'relative' }}>
                                                            <div className={item.adjust_image_class ? item.adjust_image_class + ' hover-img-box' : ' hover-img-box'}>
                                                            {/* <Image classAdded={item.adjust_image_class} id={item.value} /> */}
                                                                <SingleImage className={item.adjust_image_class ? item.adjust_image_class : ''} src={item.value} />
                                                            </div>
                                                        </div>
                                                        </SectionImg>
                                                    :
                                                    <Reveal>
                                                        <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={{ padding: '20px', marginTop: '0px', marginBottom: '0px', minWidth: '70%', maxWidth:'100%' }} >
                                                            {item.value}
                                                        </SyntaxHighlighter>
                                                    </Reveal>}
                                                {item.heading ? <SingleProjectHeading className='poppins-medium'>{item.heading}</SingleProjectHeading> : ''}
                                                {item.description ? <SingleProjectDescription className='poppins-regular'>{item.description}</SingleProjectDescription> : ''}
                                            </ProjectList>

                                        ))
                                    }
                                </ProjectUl>
                                <div className='clearBoth'></div>

                            </ShadowElement>
                        </MainHeadSection>
                    </BackgroundGif>

                </Container>


            </div>
        </div>
    )
}



function SectionImg({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </section>
    );
  }



// function Image({ id, classAdded }) {


// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

//     const [isLoaded, setIsLoaded] = useState(false);
//     const [isInView, setIsInView] = useState(false);
  
//     return (
//       <section>
//         <motion.div
//           initial={false}
//           animate={
//             isLoaded && isInView
//               ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
//               : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
//           }
//           transition={{ duration: 1, delay: 1 }}
//           viewport={{ once: true }}
//           onViewportEnter={() => setIsInView(true)}
//         >
//           <SingleImage className={classAdded ? classAdded : ''} src={`${id}`} alt="" onLoad={() => setIsLoaded(true)} />
//         </motion.div>
//      </section>
//     );
//   }

export default ProjectsTwo;