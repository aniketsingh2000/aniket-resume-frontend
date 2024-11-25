import React, { useState, memo } from 'react';
import { useTimeElapsed } from './../hooks/timeElapsed';
import styled from '@emotion/styled';
import Reveal from './Reveal';


const ParentDiv = styled('div')({
    position: 'absolute',
    zIndex: '2',
    width: 'auto',
    height: 'auto',
    top: 'calc(35vh - 180px)',
    left: '60vw',

    '@media (max-width: 600px)': {
        position: 'static',
    },
})

const SubParentDiv = styled('div')({
    position: 'relative',
    // width: '100vw',
    // height: '100vh'
})

const YearDiv = styled('div')({
    // position: 'absolute',
    zIndex: '2',
    top: '16vh',
    left: '60vw',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',




    '& span.pinlabel': {
        fontSize: '60px',
        display: 'block',
        textAlign: 'center'
    },

    '& span.pintext': {
        fontSize: '13px',
        display: 'block',
        textAlign: 'center'
    },

    '@media (min-width: 1600px)': {
        // minWidth: '140px',
        // minHeight: '140px',

        '& span.pinlabel': {
            fontSize: '65px'
        },
    },

    '@media (max-width: 600px)': {
        margin: '20px auto',
    },
})


const DaysDiv = styled('div')({
    // position: 'absolute',
    zIndex: '2',
    top: '28vh',
    left: ' 70vw',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '150px',
    marginTop: '-10px',


    '& span.pinlabel': {
        fontSize: '50px',
        display: 'block',
        textAlign: 'center'
    },

    '& span.pintext': {
        fontSize: '13px',
        display: 'block',
        textAlign: 'center'
    },



    '@media (min-width: 1600px)': {
        // minWidth: '140px',
        // minHeight: '140px',

        '& span.pinlabel': {
            fontSize: '55px'
        },
    },

    '@media (max-width: 600px)': {
        margin: '20px auto'
    },
})


const HourDiv = styled('div')({
    // position: 'absolute',
    zIndex: '2',
    top: '40vh',
    left: '80vw',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '300px',
    marginTop: '-12px',


    '& span.pinlabel': {
        fontSize: '40px',
        display: 'block',
        textAlign: 'center'
    },

    '& span.pintext': {
        fontSize: '13px',
        display: 'block',
        textAlign: 'center'
    },



    '@media (min-width: 1600px)': {
        // minWidth: '140px',
        // minHeight: '140px',

        '& span.pinlabel': {
            fontSize: '45px'
        },
    },

    '@media (max-width: 600px)': {
        margin: '20px auto'
    },
})


const MinutesDiv = styled('div')({
    // position: 'absolute',
    zIndex: '2',
    top: '53vh',
    left: '70vw',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '150px',
    marginTop: '-14px',


    '& span.pinlabel': {
        fontSize: '30px',
        display: 'block',
        textAlign: 'center'
    },

    '& span.pintext': {
        fontSize: '13px',
        display: 'block',
        textAlign: 'center'
    },



    '@media (min-width: 1600px)': {
        // minWidth: '140px',
        // minHeight: '140px',

        '& span.pinlabel': {
            fontSize: '35px'
        },
    },

    '@media (max-width: 600px)': {
        margin: '20px auto'
    },
})

const SecondsDiv = styled('div')({
    // position: 'absolute',
    zIndex: '2',
    top: '63vh',
    left: ' 60vw',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-16px',


    '& span.pinlabel': {
        fontSize: '20px',
        display: 'block',
        textAlign: 'center'
    },

    '& span.pintext': {
        fontSize: '13px',
        display: 'block',
        textAlign: 'center'
    },


    '@media (min-width: 1600px)': {
        // minWidth: '140px',
        // minHeight: '140px',

        '& span.pinlabel': {
            fontSize: '25px'
        },
    },

    '@media (max-width: 600px)': {
        margin: '20px auto'
    },
})



const TimeElapComp = memo(() => {



    const timEllapse = useTimeElapsed(new Date('2020-02-02'))
    return <div>
        <ParentDiv >
            <SubParentDiv>
                <Reveal>
                    <YearDiv>
                        <div>
                            <span className='pinlabel'> {timEllapse.years} </span>
                            <span className='pintext'>Years</span>
                        </div>
                    </YearDiv>
                </Reveal>
                <Reveal>
                    <DaysDiv>
                        <div>
                            <span className='pinlabel'> {timEllapse.days} </span>
                            <span className='pintext'>Days</span>
                        </div>
                    </DaysDiv>
                </Reveal>
                <Reveal>
                    <HourDiv>
                        <div>
                            <span className='pinlabel'> {timEllapse.hours} </span>
                            <span className='pintext'>Hours</span>
                        </div>
                    </HourDiv>
                </Reveal>
                <Reveal>
                    <MinutesDiv>
                        <div>
                            <span className='pinlabel'> {timEllapse.minutes} </span>
                            <span className='pintext'>Minutes</span>
                        </div>
                    </MinutesDiv>
                </Reveal>
                <Reveal>
                    <SecondsDiv>
                        <div>
                            <span className='pinlabel'> {timEllapse.seconds} </span>
                            <span className='pintext'>Seconds </span>
                        </div>
                    </SecondsDiv>
                </Reveal>
            </SubParentDiv>

        </ParentDiv>
    </div>;
});


export default TimeElapComp;