import { styled, keyframes } from '@mui/system';
import Container from '@mui/material/Container';
import { color, transform } from 'framer-motion';
import 'animate.css';
import Reveal from './Reveal';

function Experience() {

    const MainHeadBox = styled('div')({
        marginTop: '18vh',
        marginBottom: '18vh',
        '@media (max-width: 600px)': {
            marginTop: '40vh',
       },
    });

    const ExperienceBox = styled('div')({
        fontSize: '6rem',
        color: '#222',

        '@media (max-width: 600px)': {
            fontSize: '3rem',
            textAlign : 'center'
        },
    });

    const SmallText = styled('div')({
        // float: "right",
        display: "inline-block",
        color: "#222",
        fontSize: "22px",
        borderBottom: "1px solid #222",
        paddingBottom: '5px',
        marginTop: '-50px',

        '@media (max-width: 600px)': {
            textAlign : 'center',
            margin : '0 auto',
            width : '100%'
        },
    })

    const ExperienceSection = styled('div')({
        marginTop: '10vh'
    });

    const flipInX = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
  }
`;


    const ExperienceSingleBox = styled('div')({
        color: '#808080',
        padding: '40px 0px',
        'borderBottom': '1px solid #808080',
        'transition': 'all 300ms ease-in-out',
        '&:hover': {
            color: '#000'
        },

        '&:hover.ani-flipInX': {
            animation: `${flipInX} 1s linear forwards`,
        }
    });


    const ExperienceFrom = styled('span')({
        float: 'right',
        fontSize: '18px',
        whiteSpace: 'nowrap',


        '@media (max-width: 600px)': {
            float: 'none',
            textAlign: 'left',
            fontSize: '15px',
        },
    });

    const ExperienceDesgination = styled('span')({
        fontSize: '45px',

        '@media (max-width: 1024px)': {
            fontSize: '2rem',
        },

        '@media (max-width: 600px)': {
            fontSize: '1.5rem',
        },
    });


    const ExperienceCompany = styled('span')({
        fontSize: '18px',


        '@media (max-width: 600px)': {
            fontSize: '15px',
        },
    });

    const ExperienceLocation = styled('div')({
        // float: 'right',
        fontSize: '18px',
        float: 'right',
        width: '100%',

        '@media (max-width: 600px)': {
            fontSize: '15px',
        },

    });

    const ExperienceRightSection = styled('div')({
        float: 'right',
        textAlign: 'right',

        '@media (max-width: 600px)': {
            float: 'none',
            textAlign: 'left',
        },
    });

    const ExperienceMainTopBox = styled('span')({
        'display': 'flex',
        'justifyContent': 'space-between',
        'alignItems': 'center',

        '@media (max-width: 600px)': {
            display : 'block'
        },
    })

    const expeirenceArr = [
        { 'desgination': 'Senior Software Developer', 'company': 'Algoscale Technologies Private Limited', 'fromTo': 'Febraury 2022 - Present', 'location': 'Noida - UP' },
        { 'desgination': 'Software Developer', 'company': 'Factech Automation Solutions Private Limited', 'fromTo': 'Febraury 2020 - Febraury 2022', 'location': 'Noida - UP' },
        { 'desgination': 'Frontend Developer - Internship', 'company': 'DeviceDisk', 'fromTo': 'August 2019 - December 2019', 'location': 'Delhi' },
    ]

    return (
        <div>
            <Container maxWidth="xl" >
                <MainHeadBox>
                    <Reveal>
                        <ExperienceBox className='poppins-regular'>
                            Experience
                        </ExperienceBox>
                    </Reveal>
                    <div className='clearBoth'>  </div>
                    <Reveal>
                        <SmallText> as an Accomplished Developer </SmallText>
                    </Reveal>
                    <div className='clearBoth'>  </div>
                    <div>
                        <ExperienceSection>
                            {
                                expeirenceArr.map((item, index) => (<ExperienceSingleBox key={index} className='poppins-regular'>
                                    <ExperienceMainTopBox >
                                        <Reveal> <ExperienceDesgination className=' ani-flipInX' >{item.desgination} </ExperienceDesgination> </Reveal>
                                        <ExperienceRightSection>
                                            <Reveal> <ExperienceFrom>{item.fromTo}</ExperienceFrom>  </Reveal>
                                            <Reveal><ExperienceLocation>{item.location}</ExperienceLocation> </Reveal>
                                        </ExperienceRightSection>
                                    </ExperienceMainTopBox>
                                    <div>
                                        <Reveal> <ExperienceCompany>{item.company} </ExperienceCompany> </Reveal>
                                    </div>
                                </ExperienceSingleBox>))
                            }
                        </ExperienceSection>
                    </div>
                </MainHeadBox>
            </Container>

        </div>
    )
}

export default Experience