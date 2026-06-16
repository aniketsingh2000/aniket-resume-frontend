import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LetsConnectPopup from "./LetsConnectPopup";
import Reveal from './Reveal';


const StyledAppBar = styled(AppBar)(({ isscrolled }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'background-color 0.3s, transform 0.3s',
    transform: isscrolled ? 'translateY(-100%)' : 'none',
}));

const Logo = styled('div')({
    marginRight: '16px',
    color: 'black',
    fontSize: '30px',
    display: 'flex',
    alignItems: 'center'
});

const NavItems = styled('ul')({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    color: 'black',

    '@media (max-width: 768px)': {
        display: 'none',
    },
});

const NavItem = styled('li')({
});

const StyledLink = styled('a')({
    position: 'relative',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.3s',
    paddingBottom: '5px',
    fontSize: '18px',
    color: 'black',
    marginLeft: '50px',

    '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '0%',
        borderBottom: '1px solid black',
        transition: 'width 0.3s ease-out',
    },
    '&:hover:before': {
        width: '100%',
    },
});

const CodeElement = styled('span')({
    background: '#000',
    height: '35px',
    width: '35px',
    display: 'inline-block',
    borderRadius: '50%',
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const HamburgerBtn = styled('button')({
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    color: '#000',
    zIndex: 1100,
    '@media (max-width: 768px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const MobileNav = styled('div')(({ open }) => ({
    position: 'fixed',
    top: 0,
    right: 0,
    width: '280px',
    height: '100vh',
    background: '#fff',
    boxShadow: open ? '-4px 0 30px rgba(0,0,0,0.1)' : 'none',
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease',
    zIndex: 1050,
    display: 'flex',
    flexDirection: 'column',
    padding: '100px 30px 40px',
    gap: '0',
}));

const MobileOverlay = styled('div')(({ open }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
    zIndex: 1040,
}));

const MobileNavLink = styled('a')({
    textDecoration: 'none',
    color: '#0e0b2f',
    fontSize: '18px',
    padding: '16px 0',
    borderBottom: '1px solid #f0f0f0',
    transition: 'color 0.2s ease',
    '&:hover': {
        color: '#9063F4',
    },
});


function Header() {
    const [isscrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrolled(currentScrollPos > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Lock body scroll when mobile nav is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setMobileOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <StyledAppBar position="fixed" isscrolled={isscrolled}>
                <Container maxWidth="xl" >
                    <Toolbar >
                        <Reveal>
                        <Logo className='poppins-semibold'>
                            <CodeElement>  <CodeIcon className='white-icon-small'></CodeIcon> </CodeElement>  Aniket
                        </Logo>
                        </Reveal>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <NavItems>
                            <Reveal><NavItem><StyledLink className='poppins-medium' target="_blank" href="https://www.linkedin.com/in/aniketsingh2000/">Go To Linkedin</StyledLink></NavItem></Reveal>
                            <Reveal><NavItem><StyledLink className='poppins-medium' target='_blank' href="https://github.com/aniketsingh2000">Go To Github</StyledLink></NavItem></Reveal>
                            <Reveal><NavItem><StyledLink className='poppins-medium' href="#" onClick={handleClickOpen}>Let's Contact</StyledLink></NavItem></Reveal>
                        </NavItems>

                        <HamburgerBtn onClick={() => setMobileOpen(!mobileOpen)}>
                            {mobileOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                        </HamburgerBtn>
                    </Toolbar>
                </Container>

                <LetsConnectPopup isOpen={open} isClose={handleClose}></LetsConnectPopup>

            </StyledAppBar>

            {/* Mobile Navigation */}
            <MobileOverlay open={mobileOpen} onClick={() => setMobileOpen(false)} />
            <MobileNav open={mobileOpen}>
                <MobileNavLink className='poppins-medium' target="_blank" href="https://www.linkedin.com/in/aniketsingh2000/">LinkedIn</MobileNavLink>
                <MobileNavLink className='poppins-medium' target="_blank" href="https://github.com/aniketsingh2000">GitHub</MobileNavLink>
                <MobileNavLink className='poppins-medium' href="#" onClick={handleClickOpen}>Let's Contact</MobileNavLink>
            </MobileNav>
        </div>
    );
}

export default Header;
