
import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import 'animate.css';
import Reveal from './Reveal';
import { ReactTyped } from "react-typed";
import  TimeElapComp  from './TimeComponent'


function Baneer () {

  const MainHedaing = styled('div')({
    marginRight: '16px',
    color: '#0e0b2f',
    fontSize: '50px',

    '& .small-in-size': {
      marginTop: '20px',
      fontSize: '32px'
    },

    '@media (max-width: 600px)': {
      fontSize: '27px',

      '& .small-in-size': {
        fontSize: '20px'
      },

    },
    
  });

  const MainBox = styled('div')({
    paddingTop: 'calc(35vh - 50px)',
    paddingBottom: '25vh',
  });


  const TypedSection = styled('div')({
    marginLeft: '10px',
    display: 'inline-block',

    '@media (max-width: 875px)': {
      marginLeft: '0px',
    },
  })


  const MainInput = styled('input')({
    border: 'none', 
    background: 'none', 
    fontSize: '50px', 
    width: '500px',

    '@media (max-width: 600px)': {
      fontSize: '27px',
      width: '270px',
    },
  })

  const CoolectDivOne = styled('div')({
    'display': 'inline-block',
    // 'background': '#fff',
    'white-space': 'nowrap',
    'max-width:' : '108%',
    'border-radius':' 15px',
    'box-shadow': '0 0 20px rgba(0, 0, 0, .1)',
    'flex-direction': 'row',
    'padding': '1rem 2rem',
    'width': 'auto',
  })

  const EmojiDiv = styled('div')({
      fontSize : '50px',
      float : 'left',
      marginRight : '20px'
  })

  const HelloDiv = styled('div')({
    fontSize:'13px'
  })

  const NameDiv =  styled('div')({
    // float : 'left',
    fontSize : '40px',
    marginLeft : '70px'
    
  })
  return (

    <div>
      <div className='background_one'>
      <Container maxWidth="xl" >
        <MainBox>
          <MainHedaing className='poppins-semibold'>

            <Reveal>
              <CoolectDivOne> <EmojiDiv className=''> 👋 </EmojiDiv>  <HelloDiv>  Hello, I am </HelloDiv> <NameDiv> Aniket </NameDiv>  </CoolectDivOne>
            </Reveal>
            <Reveal>
              <div> A Creative
                <TypedSection>
                  {'{'}
                  <ReactTyped
                    strings={[
                      "Software Developer ",
                      "Frontend Developer",
                      "Backend Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                  >
                    <MainInput className='black-placeholder' type="text" />
                  </ReactTyped>
                  {'}'}
                </TypedSection>
              </div>
            </Reveal>
            <Reveal>
              <div className='small-in-size poppins-light'> Building tomorrow's tech with skill's and passion  </div>
            </Reveal>
            {/* <ReactTyped strings={[` 
              <div> I'm  Aniket Singh  </div> <div> A Creative Software Developer </div> <div class='small-in-size'> Building tomorrow's tech with skill and passion.</div>`]} typeSpeed={40} /> */}
          </MainHedaing>
          <TimeElapComp></TimeElapComp>
        </MainBox>



        {/* <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div> */}
      </Container>
      </div>
    </div>
  )
}

export default Baneer;
