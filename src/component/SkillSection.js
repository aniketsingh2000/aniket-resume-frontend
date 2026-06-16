import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Reveal from './Reveal';
import { memo } from 'react';
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


// ═══════════════════════════════════════════
// STYLED COMPONENTS
// ═══════════════════════════════════════════

const SectionWrapper = styled('div')({
    padding: '100px 0 80px',
    margin: '10vh auto 0px auto',
    fontFamily: '"Poppins", sans-serif',
    '@media (max-width: 600px)': {
        padding: '60px 0 50px',
        margin: '5vh auto 0px auto',
    },
});

const GradientBox = styled('div')({
    background: 'linear-gradient(225deg, rgba(242, 179, 255, 0.3) 0%, rgba(253, 102, 130, 0.4) 49%, rgba(255, 223, 149, 0.3) 100%)',
    borderRadius: '24px',
    padding: '60px 40px',
    '@media (max-width: 600px)': {
        borderRadius: '16px',
        padding: '40px 16px',
    },
});

const TitlePill = styled('div')({
    margin: '0 auto 0',
    padding: '16px 50px',
    border: '1.5px solid #1472ff',
    borderRadius: '8px',
    fontSize: '18px',
    // letterSpacing: '4px',
    textTransform: 'uppercase',
    color: '#1f2937',
    textAlign: 'center',
    width: 'fit-content',
    '@media (max-width: 600px)': {
        fontSize: '14px',
        padding: '12px 30px',
        // letterSpacing: '3px',
    },
});

// Tree structure
const TreeContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const VerticalLine = styled('div')(({ height }) => ({
    width: '1.5px',
    height: height || '50px',
    background: '#1472ff',
    '@media (max-width: 600px)': {
        height: height ? `calc(${height} * 0.6)` : '30px',
    },
}));

// Top row: Frontend + Backend
const TopBranch = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '25%',
        right: '25%',
        height: '1.5px',
        background: '#1472ff',
    },
    '@media (max-width: 900px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '&::before': {
            display: 'none',
        },
    },
});

// Bottom row: Database, Tools, AI
const BottomBranch = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '16%',
        right: '16%',
        height: '1.5px',
        background: '#1472ff',
    },
    '@media (max-width: 900px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '&::before': {
            display: 'none',
        },
    },
});

const BranchBox = styled('div')(({ maxW }) => ({
    border: '1.5px solid #1472ff',
    borderRadius: '10px',
    padding: '28px',
    margin: '40px 16px 0',
    position: 'relative',
    flex: 1,
    maxWidth: maxW || '460px',
    background: 'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(4px)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '1.5px',
        height: '40px',
        background: '#1472ff',
        transform: 'translateX(-50%) translateY(-100%)',
    },
    '@media (max-width: 900px)': {
        margin: '40px 0 0',
        maxWidth: '100%',
        '&::before': {
            height: '40px',
        },
    },
    '@media (max-width: 600px)': {
        padding: '20px 16px',
    },
}));

const BoxLabel = styled('div')(({ color }) => ({
    fontSize: '11px',
    textTransform: 'uppercase',
    // letterSpacing: '2.5px',
    color: color || '#0d9488',
    marginBottom: '18px',
    textAlign: 'center',
    fontWeight: 600,
    '@media (max-width: 600px)': {
        fontSize: '10px',
        marginBottom: '14px',
    },
}));

const SkillPillsWrap = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
        gap: '8px',
    },
});

const SkillPill = styled('span')(({ color }) => ({
    padding: '8px 18px',
    borderRadius: '20px',
    border: `1.5px solid ${color || '#2a5c4a'}`,
    color: color || '#4aeabc',
    fontSize: '12px',
    // letterSpacing: '0.8px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
    cursor: 'default',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    '&:hover': {
        background: `${color || '#4aeabc'}18`,
        transform: 'translateY(-2px)',
        boxShadow: `0 4px 20px ${color || '#4aeabc'}25`,
    },
    '@media (max-width: 600px)': {
        padding: '6px 12px',
        fontSize: '10px',
        gap: '5px',
    },
}));

const PillIcon = styled('img')({
    width: '16px',
    height: '16px',
    objectFit: 'contain',
    borderRadius: '3px',
    '@media (max-width: 600px)': {
        width: '13px',
        height: '13px',
    },
});


// ═══════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════

const Skillsection = memo(function Skillsection() {

    const green = '#0d9488';
    const blue = '#6366f1';
    const purple = '#0284c7';
    const orange = '#d97706';
    const pink = '#c026d3';

    return (
        <SectionWrapper>
            <Container maxWidth="xl">
                <GradientBox>
                <TreeContainer>
                    <Reveal>
                        <TitlePill className='poppins-semibold'>My Skills</TitlePill>
                    </Reveal>

                    <VerticalLine height="50px" />

                    {/* ═══ TOP ROW: Frontend + Backend ═══ */}
                    <TopBranch>
                        <Reveal>
                            <BranchBox>
                                <BoxLabel color={green} className='poppins-semibold'>Frontend & UI</BoxLabel>
                                <SkillPillsWrap>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Javascript} alt="" />JavaScript</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={TypeScript} alt="" />TypeScript</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={ReactJs} alt="" />React</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Angular} alt="" />Angular</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'>Next.js</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Reducx} alt="" />Redux</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'>RxJS</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Ionic} alt="" />Ionic</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Html} alt="" />HTML5</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={CSS} alt="" />CSS3</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={SCSS} alt="" />SCSS</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={MaterialUI} alt="" />Material UI</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Bootstrap} alt="" />Bootstrap</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'><PillIcon src={Jquery} alt="" />jQuery</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'>Tailwind CSS</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'>React Native</SkillPill>
                                    <SkillPill color={green} className='poppins-medium'>Framer Motion</SkillPill>
                                </SkillPillsWrap>
                            </BranchBox>
                        </Reveal>

                        <Reveal>
                            <BranchBox>
                                <BoxLabel color={blue} className='poppins-semibold'>Backend & APIs</BoxLabel>
                                <SkillPillsWrap>
                                    <SkillPill color={blue} className='poppins-medium'><PillIcon src={NodeJsImg} alt="" />Node.js</SkillPill>
                                    <SkillPill color={blue} className='poppins-medium'><PillIcon src={ExpressJS} alt="" />Express.js</SkillPill>
                                    <SkillPill color={blue} className='poppins-medium'>REST APIs</SkillPill>
                                    <SkillPill color={blue} className='poppins-medium'>GraphQL</SkillPill>
                                    <SkillPill color={blue} className='poppins-medium'>WebSockets</SkillPill>
                                    <SkillPill color={blue} className='poppins-medium'>Microservices</SkillPill>
                                </SkillPillsWrap>
                            </BranchBox>
                        </Reveal>
                    </TopBranch>

                    <VerticalLine height="60px" />

                    {/* ═══ BOTTOM ROW: Database, Tools, AI ═══ */}
                    <BottomBranch>
                        <Reveal>
                            <BranchBox maxW="350px">
                                <BoxLabel color={orange} className='poppins-semibold'>Database & Cloud</BoxLabel>
                                <SkillPillsWrap>
                                    <SkillPill color={orange} className='poppins-medium'><PillIcon src={MongoDb} alt="" />MongoDB</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>PostgreSQL</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>Redis</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'><PillIcon src={AmazoneRedshift} alt="" />Amazon Redshift</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>ElasticSearch</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>AWS</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>CloudFront</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>Docker</SkillPill>
                                    <SkillPill color={orange} className='poppins-medium'>CI/CD</SkillPill>
                                </SkillPillsWrap>
                            </BranchBox>
                        </Reveal>

                        <Reveal>
                            <BranchBox maxW="350px">
                                <BoxLabel color={purple} className='poppins-semibold'>Tools & Workflow</BoxLabel>
                                <SkillPillsWrap>
                                    <SkillPill color={purple} className='poppins-medium'><PillIcon src={Git} alt="" />Git</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'><PillIcon src={Git} alt="" />GitHub</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'><PillIcon src={Jira} alt="" />Jira</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'><PillIcon src={Postman} alt="" />Postman</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'><PillIcon src={Linux} alt="" />Linux</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'><PillIcon src={VsCode} alt="" />VS Code</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'>Figma</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'>Webpack</SkillPill>
                                    <SkillPill color={purple} className='poppins-medium'>Agile/Scrum</SkillPill>
                                </SkillPillsWrap>
                            </BranchBox>
                        </Reveal>

                        <Reveal>
                            <BranchBox maxW="350px">
                                <BoxLabel color={pink} className='poppins-semibold'>AI-Assisted Dev</BoxLabel>
                                <SkillPillsWrap>
                                    <SkillPill color={pink} className='poppins-medium'>GitHub Copilot</SkillPill>
                                    <SkillPill color={pink} className='poppins-medium'>Claude Code</SkillPill>
                                    <SkillPill color={pink} className='poppins-medium'>ChatGPT</SkillPill>
                                    <SkillPill color={pink} className='poppins-medium'>Gemini AI</SkillPill>
                                    <SkillPill color={pink} className='poppins-medium'>MCP</SkillPill>
                                    <SkillPill color={pink} className='poppins-medium'>Prompt Engineering</SkillPill>
                                </SkillPillsWrap>
                            </BranchBox>
                        </Reveal>
                    </BottomBranch>
                </TreeContainer>
                </GradientBox>
            </Container>
        </SectionWrapper>
    );
});

export default Skillsection;
