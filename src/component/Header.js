import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import CodeIcon from '@mui/icons-material/Code';
import LetsConnectPopup from "./LetsConnectPopup";
import Reveal from './Reveal';


const StyledAppBar = styled(AppBar)(({ isscrolled }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'background-color 0.3s, transform 0.3s',
    transform: isscrolled ? 'translateY(-100%)' : 'none',
}));

const Logo = styled('div')({
    marginRight: '16px', // Adjust margin as needed
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

    '@media (max-width: 600px)': {
        display: 'none',
      },
});

const NavItem = styled('li')({ // Adjust margin as needed
});

const StyledLink = styled('a')({
    // Styles for a
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
        borderBottom: '1px solid black', // Adjust border-bottom style as needed
        transition: 'width 0.3s ease-out', // Adjust animation timing as needed
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
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
})


function Header() {
    const [isscrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrolled(currentScrollPos > 100); // Change 50 to the desired scroll threshold
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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
                            <CodeElement >  <CodeIcon className='white-icon-small'></CodeIcon> </CodeElement>  Aniket
                        </Logo>
                        </Reveal>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <NavItems>
                            <Reveal><NavItem><StyledLink className='poppins-medium' target="_blank" href="https://www.linkedin.com/in/aniketsingh2000/">Go To Linkedin</StyledLink></NavItem></Reveal>
                            <Reveal><NavItem><StyledLink className='poppins-medium' target='_blank' href="https://github.com/aniketsingh2000">Go To Github</StyledLink></NavItem></Reveal>
                            <Reveal><NavItem><StyledLink className='poppins-medium' href="#" onClick={handleClickOpen}>Let's Contact</StyledLink></NavItem></Reveal>
                        </NavItems>
                    </Toolbar>
                </Container>

                <LetsConnectPopup isOpen={open} isClose={handleClose}></LetsConnectPopup>

            </StyledAppBar>
        </div>
    );
}

export default Header;
