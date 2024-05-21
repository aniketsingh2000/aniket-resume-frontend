
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import 'animate.css';
import Reveal from './Reveal';
import { ReactTyped } from "react-typed";

import { motion, useViewportScroll, useTransform } from "framer-motion";

function Baneer() {

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
    marginTop: 'calc(35vh - 100px)',
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


  return (

    <div>
      <Container maxWidth="xl" >
        <MainBox>
          <MainHedaing className='poppins-semibold'>

            <Reveal>
              <div> I'm  Aniket Singh  </div>
            </Reveal>
            <Reveal>
              <div> A Creative
                <TypedSection>
                  [
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
                  ]
                </TypedSection>
              </div>
            </Reveal>
            <Reveal>
              <div className='small-in-size poppins-light'> Building tomorrow's tech with skill's and passion. </div>
            </Reveal>
            {/* <ReactTyped strings={[` 
              <div> I'm  Aniket Singh  </div> <div> A Creative Software Developer </div> <div class='small-in-size'> Building tomorrow's tech with skill and passion.</div>`]} typeSpeed={40} /> */}
          </MainHedaing>
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
  )
}

export default Baneer;
