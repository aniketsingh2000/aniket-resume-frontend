import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Reveal from './Reveal';
import NodeJsImg from '../assets/images/nodejs.svg.png';
import Javascript from '../assets/images/JavaScript.png';
import Angular from '../assets/images/angular.svg';
import ReactJs from '../assets/images/ReactJs.webp';
import Ionic from '../assets/images/ionic.png';
import TypeScript from '../assets/images/typescript.webp';
import Reducx from '../assets/images/redux.png';
import ExpressJS from '../assets/images/expressjs.png';
import MongoDb from '../assets/images/mongodb.png';
import AmazoneRedshift from '../assets/images/amazon-redshift.png';
import Html from '../assets/images/html.webp';
import CSS from '../assets/images/css.webp';
import SCSS from '../assets/images/scss.png';
import MaterialUI from '../assets/images/material-ui.png';
import Bootstrap from '../assets/images/bootstrap.png';
import Jquery from '../assets/images/jquery.webp';
import Git from '../assets/images/github.png';
import Jira from '../assets/images/jira.png';
import Postman from '../assets/images/postman.webp';
import Linux from '../assets/images/linux.png';
import VsCode from '../assets/images/vs-code.webp';
import { memo, useState, useEffect, useRef } from 'react';

const Skillsection = memo(function Skillsection() {

    const mainElement = useRef(null);
    const [expandElement, setExpandElement] = useState(1);
    const [scrollStart, SetScrollStart] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollStart) {
                SetScrollStart(true);
            }
            if (mainElement.current) {
                const rect = mainElement.current.getBoundingClientRect();
                if ((window.scrollY - rect.top) < 0 && expandElement < 1.2) {
                    const val = 1 + (((window.scrollY) / 3) * 0.001)
                    setExpandElement(val > 1.2 ? 1.2 : val);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expandElement]);

    const MainHeadBox = styled('div')({
        margin: '10vh auto 0px auto',
        padding: '70px 100px 100px ',
        // background: '#f2f6ff',
        background: 'linear-gradient(225deg, rgb(242 179 255 / 30%) 0%, rgb(253 102 130 / 40%) 49%, rgb(255 223 149 / 30%) 100%)',
        // borderRadius: '30px',
        // transform: `scale(${expandElement})`,
        transition: 'transform 0.5s ease-in-out',
        willChange: 'transform',
        aspectRatio: (16 / 9),
        '@media (max-width: 1024px)': {
            padding: '45px 45px 70px 45px ',
        },

        '@media (max-width: 600px)': {
            padding: '45px 20px 70px 20px ',
        }
    });

    const SkillBox = styled('div')({
        // float: 'right',
        fontSize: '6rem',
        // fontWeight: 'bold',
        color: '#222',
        // textShadow: '0 0px 100px rgb(63 63 63 / 40%)'

        '@media (max-width: 600px)': {
            fontSize: '3rem',
            textAlign: 'center'
        },
    });

    const SmallText = styled('div')({
        // float: "right",
        display: "inline-block",
        color: "#222",
        fontSize: "22px",
        borderBottom: "1px solid #222",
        paddingBottom: '5px',
        marginTop: '-30px',

        '@media (max-width: 600px)': {
            textAlign: 'center',
            margin: '0 auto',
            width: '100%'
        },
    })

    const SingleSkillImag = styled('img')({
        width: '25px',
        // 'filter': 'grayscale(1)',
        borderRadius: '5px',
        'transition': 'all 300ms linear',
    });



    const SingleSkillSpan = styled('span')({
        background: '#fff',
        padding: '10px 25px',
        'borderRadius': '30px',
        'display': 'flex',
        'alignItems': 'center',
        'transition': 'all 300ms linear',
        'position': 'relative',
        // 'boxShadow': '0 0px 100px rgb(114 114 114 / 40%)',

        '&:hover': {
            '& img': {
                // filter: 'grayscale(0)',
                'transition': 'all 300ms linear',
                'scale': '1.2'

            },
        },

        '@media (max-width: 600px)': {
   
            display: 'flex',
            marginBottom : '30px'
        },

    })

    const SkillDefineSection = styled('div')({
        'display': 'flex',
        'marginTop': '100px',
        flexWrap: 'wrap',
        rowGap: '50px',
        columnGap: '2%',

        '@media (max-width: 1024px)': {
            columnGap: '1.5%',
        },
        
        '@media (max-width: 600px)': {
            'display': 'block',
            columnGap: '0%',
        },
    })


    const HoverText = styled('span')({
        fontSize: '16px',
        // position: 'absolute',
        // background: '#000',
        // color: '#fff',
        padding: '8px 12px',
        borderRadius: '5px',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        // opacity: 0,
        // zIndex: 1,
        // left: '80px',
        // bottom: '-15px',
        transition: '.4s ease all',

        '@media (max-width: 600px)': {
            display: 'inline-block',
            textAlign: 'center',
            margin: '0 auto',
            width: '70%',
        }
    })


    const skillArr = [
        { img: Javascript, name: 'Javascript' },
        { img: Angular, name: 'Angular' },
        { img: Ionic, name: 'Ionic Framwork' },
        { img: TypeScript, name: 'Typescript' },
        { img: ReactJs, name: 'React JS' },
        { img: Reducx, name: 'Redux' },
        { img: NodeJsImg, name: 'Node JS' },
        { img: ExpressJS, name: 'Express JS' },
        { img: MongoDb, name: 'Mongo DB' },
        { img: AmazoneRedshift, name: 'Amazone Redshift' },
        { img: Html, name: 'HTML 5' },
        { img: CSS, name: 'CSS 3 - responsive' },
        { img: SCSS, name: 'SCSS ' },
        { img: MaterialUI, name: 'Material UI' },
        { img: Bootstrap, name: 'Bootstrap' },
        { img: Jquery, name: 'Jquery' },
        { img: Git, name: 'Git Version Control' },
        { img: Jira, name: 'Jira Software' },
        { img: Postman, name: 'Postman API Testing' },
        { img: Linux, name: 'Linux' },
        { img: VsCode, name: 'VS code' }
    ]


    const skillBoxContent = <SkillBox className='poppins-regular'>My Skills</SkillBox>;
    const skillSubContent = <SmallText>  as a Creative Developer </SmallText>;

    return (
        <div>
            <Container maxWidth="xl">
                <MainHeadBox ref={mainElement} expandElement={expandElement} style={{ transform: `scale(${expandElement})` }}>

                    {!scrollStart ? <Reveal>{skillBoxContent}</Reveal> : skillBoxContent}

                    <div className='clearBoth'></div>


                    {!scrollStart ? <Reveal>{skillSubContent}</Reveal> : skillSubContent}


                    <div className='clearBoth'></div>

                    <SkillDefineSection>
                        {
                            skillArr.map((item, index) => (
                                <Reveal>
                                    <SingleSkillSpan key={index} >
                                        <SingleSkillImag src={item.img} />
                                        <HoverText className={`hover-text ${((index + 1) % 6) === 0 ? 'new-back-class' : ''}`}> {item.name} </HoverText>
                                    </SingleSkillSpan>
                                </Reveal>
                            ))
                        }
                    </SkillDefineSection>
                </MainHeadBox>
            </Container>
        </div>
    )
}
)

export default Skillsection;
