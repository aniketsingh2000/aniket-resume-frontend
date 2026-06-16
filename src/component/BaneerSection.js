
import React from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Reveal from './Reveal';
import { ReactTyped } from "react-typed";
import { useTimeElapsed } from './../hooks/timeElapsed';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


// ═══════════════════════════════════════════
// STYLED COMPONENTS
// ═══════════════════════════════════════════

const HeroWrapper = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
});

const HeroGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    alignItems: 'center',
    gap: '60px',
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr',
        gap: '40px',
    },
});

const HeroLeft = styled('div')({
    paddingTop: '80px',
    '@media (max-width: 900px)': {
        paddingTop: '120px',
    },
    '@media (max-width: 600px)': {
        paddingTop: '100px',
    },
});

const Greeting = styled('div')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    background: '#fff',
    padding: '10px 20px',
    borderRadius: '40px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
        padding: '8px 16px',
        marginBottom: '20px',
    },
});

const WaveEmoji = styled('span')({
    fontSize: '28px',
    display: 'inline-block',
    animation: 'wave 2.5s infinite',
    transformOrigin: '70% 70%',
    '@keyframes wave': {
        '0%': { transform: 'rotate(0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(14deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(10deg)' },
        '60%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(0deg)' },
    },
    '@media (max-width: 600px)': {
        fontSize: '22px',
    },
});

const GreetingText = styled('span')({
    fontSize: '15px',
    color: '#555',
    '@media (max-width: 600px)': {
        fontSize: '13px',
    },
});

const HeroHeading = styled('h1')({
    fontSize: '4.5rem',
    color: '#0e0b2f',
    lineHeight: 1.1,
    letterSpacing: '-2px',
    margin: '0 0 10px 0',
    '@media (max-width: 1200px)': {
        fontSize: '3.5rem',
    },
    '@media (max-width: 900px)': {
        fontSize: '3rem',
    },
    '@media (max-width: 600px)': {
        fontSize: '2.2rem',
        letterSpacing: '-1px',
    },
});

const TypedLine = styled('div')({
    fontSize: '4.5rem',
    lineHeight: 1.1,
    letterSpacing: '-2px',
    marginBottom: '24px',
    minHeight: '80px',
    '@media (max-width: 1200px)': {
        fontSize: '3.5rem',
        minHeight: '65px',
    },
    '@media (max-width: 900px)': {
        fontSize: '3rem',
        minHeight: '55px',
    },
    '@media (max-width: 600px)': {
        fontSize: '2.2rem',
        letterSpacing: '-1px',
        minHeight: '45px',
    },
});

const TypedInput = styled('input')({
    border: 'none',
    background: 'none',
    fontSize: 'inherit',
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    '&::placeholder': {
        backgroundImage: 'linear-gradient(99deg, #9063F4, #517DED)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 600,
    },
});

const SubHeading = styled('p')({
    fontSize: '18px',
    color: '#555',
    lineHeight: 1.7,
    maxWidth: '500px',
    margin: '0 0 36px 0',
    '@media (max-width: 600px)': {
        fontSize: '15px',
        margin: '0 0 28px 0',
    },
});

const CTARow = styled('div')({
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
});

const PrimaryBtn = styled('a')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 30px',
    background: 'linear-gradient(135deg, #9063F4, #517DED)',
    color: '#fff',
    borderRadius: '40px',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(144,99,244,0.25)',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 35px rgba(144,99,244,0.35)',
    },
    '@media (max-width: 600px)': {
        padding: '12px 24px',
        fontSize: '14px',
    },
});

const SecondaryBtn = styled('a')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 30px',
    background: 'transparent',
    color: '#0e0b2f',
    borderRadius: '40px',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    border: '1px solid #ddd',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        borderColor: '#9063F4',
        color: '#9063F4',
    },
    '@media (max-width: 600px)': {
        padding: '12px 24px',
        fontSize: '14px',
    },
});

// --- Right side: Experience counter ---
const HeroRight = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 900px)': {
        justifyContent: 'flex-start',
        paddingBottom: '60px',
    },
});

const StatsGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr 1fr',
        gap: '14px',
    },
});

const StatCard = styled('div')({
    background: '#fff',
    borderRadius: '20px',
    padding: '28px 24px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    border: '1px solid #f0f0f0',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.08)',
    },
    '&:nth-of-type(2)': {
        marginTop: '30px',
    },
    '&:nth-of-type(3)': {
        marginTop: '-15px',
    },
    '@media (max-width: 600px)': {
        padding: '20px 16px',
        borderRadius: '16px',
        '&:nth-of-type(2)': {
            marginTop: '20px',
        },
        '&:nth-of-type(3)': {
            marginTop: '-10px',
        },
    },
});

const StatNumber = styled('div')({
    fontSize: '42px',
    color: '#0e0b2f',
    lineHeight: 1,
    marginBottom: '6px',
    '@media (max-width: 600px)': {
        fontSize: '32px',
    },
});

const StatLabel = styled('div')({
    fontSize: '13px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    '@media (max-width: 600px)': {
        fontSize: '11px',
    },
});

const ScrollIndicator = styled('div')({
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    color: '#aaa',
    fontSize: '12px',
    letterSpacing: '2px',
    '@media (max-width: 600px)': {
        display: 'none',
    },
});

const ScrollLine = styled('div')({
    width: '1px',
    height: '40px',
    background: 'linear-gradient(to bottom, #ccc, transparent)',
    animation: 'scrollPulse 2s infinite',
    '@keyframes scrollPulse': {
        '0%, 100%': { opacity: 1, transform: 'scaleY(1)' },
        '50%': { opacity: 0.5, transform: 'scaleY(0.6)' },
    },
});


// ═══════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════

function Baneer() {

    const timeElapsed = useTimeElapsed(new Date('2020-02-02'));

    return (
        <div>
            <HeroWrapper className='background_one'>
                <Container maxWidth="xl">
                    <HeroGrid>
                        <HeroLeft>
                            <Reveal>
                                <Greeting>
                                    <WaveEmoji>👋</WaveEmoji>
                                    <GreetingText className='poppins-medium'>Hello, I'm Aniket Singh</GreetingText>
                                </Greeting>
                            </Reveal>

                            <Reveal>
                                <HeroHeading className='poppins-bold'>
                                    A Creative
                                </HeroHeading>
                            </Reveal>

                            <Reveal>
                                <TypedLine className='poppins-bold'>
                                    <ReactTyped
                                        strings={[
                                            "Software Developer",
                                            "Full-Stack Engineer",
                                            "Problem Solver",
                                        ]}
                                        typeSpeed={50}
                                        backSpeed={40}
                                        attr="placeholder"
                                        loop
                                    >
                                        <TypedInput type="text" readOnly />
                                    </ReactTyped>
                                </TypedLine>
                            </Reveal>

                            <Reveal>
                                <SubHeading className='poppins-regular'>
                                    Building scalable products and delivering enterprise solutions for global clients. Passionate about clean code, performance, and user experience.
                                </SubHeading>
                            </Reveal>

                            <Reveal>
                                <CTARow>
                                    <PrimaryBtn className='poppins-medium' href="#projects" onClick={(e) => { e.preventDefault(); const el = document.getElementById('projects'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }}>
                                        View My Work <ArrowOutwardIcon style={{ fontSize: 16 }} />
                                    </PrimaryBtn>
                                    <SecondaryBtn className='poppins-medium' href="https://docs.google.com/document/d/1P0OxUd-6MtyXn6jukHY14IroQxMwrRENTjj6tX40t5g/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        Download Resume
                                    </SecondaryBtn>
                                </CTARow>
                            </Reveal>
                        </HeroLeft>

                        <HeroRight>
                            <Reveal>
                                <StatsGrid>
                                    <StatCard>
                                        <StatNumber className='poppins-bold'>{timeElapsed.years}+</StatNumber>
                                        <StatLabel className='poppins-medium'>Years of Experience in Multiple Tech Domains</StatLabel>
                                    </StatCard>
                                    <StatCard>
                                        <StatNumber className='poppins-bold'>500K+</StatNumber>
                                        <StatLabel className='poppins-medium'>Users Impacted</StatLabel>
                                    </StatCard>
                                    <StatCard>
                                        <StatNumber className='poppins-bold'>10+</StatNumber>
                                        <StatLabel className='poppins-medium'>Products Built</StatLabel>
                                    </StatCard>
                                    <StatCard>
                                        <StatNumber className='poppins-bold'>5+</StatNumber>
                                        <StatLabel className='poppins-medium'>Countries Served</StatLabel>
                                    </StatCard>
                                </StatsGrid>
                            </Reveal>
                        </HeroRight>
                    </HeroGrid>
                </Container>

                <ScrollIndicator>
                    <span className='poppins-medium'>SCROLL</span>
                    <ScrollLine />
                </ScrollIndicator>
            </HeroWrapper>
        </div>
    );
}

export default Baneer;
