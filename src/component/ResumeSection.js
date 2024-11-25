import { styled } from '@mui/system';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import c1img from './../assets/images/background/elip-back-1.svg';
import c2img from './../assets/images/background/elip-back-2.svg';
import c3img from './../assets/images/background/elip-back-3.svg';
import BackGif from './../assets/images/gif/textured-back.gif'
import MyProfileImg from './../assets/images/mypic/profile.png';
import { useState, useEffect, useRef } from 'react';

function ResumeSection() {


    const leftElement = useRef(null);
    const [expandElementLeft, setExpandElement] = useState(1);

    useEffect(() => {
        const handleScroll = () => {

            if (leftElement.current) {
                let rect = leftElement.current.getBoundingClientRect();
                if ((rect.top - 500) < 0 && expandElementLeft < 10) {
                    if (expandElementLeft === 1) { 
                        const intervalId = setInterval(() => {
                            setExpandElement(prevExpandElement => {
                                const newVal = prevExpandElement + 0.10;
                                if (newVal > 10) {
                                    clearInterval(intervalId)
                                }
                                return newVal > 10 ? 10 : newVal;
                            });
                        }, 100);
                    }
                } else if ((rect.bottom) > 1400 && expandElementLeft === 10) {
                    if (expandElementLeft === 10) {
                        const intervalId = setInterval(() => {
                            setExpandElement(prevExpandElement => {
                                const newVal = prevExpandElement - 0.10;
                                if (newVal < 1) {
                                    clearInterval(intervalId)
                                }
                                return newVal < 1 ? 1 : newVal;
                            });
                        }, 100);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expandElementLeft]);




    const MainHeadSection = styled(`div`)({
        marginTop: '10vh',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
    })


    const BackSection = styled(`div`)({
        'background-image': `url(${BackGif})`,
        // height: '70vh'
    })


    const ShadowSection = styled(`div`)({
        'background': `rgb(0 0 0 / 90%)`,
        height: '120vh',

        '@media (max-width: 1024px)': {
            height: '140vh',
        },

        '@media (max-width: 768px)': {
            height: 'calc(70vh + 300px)',
        },

    })



    const CircleOneImg = styled(`img`)({
        position: 'absolute',
        top: '0px',
        width: '100%'
    })

    const CircleTwoImg = styled(`img`)({
        position: 'absolute',
        width: '40vw',
        left: '-18vw',
        top: '-18vh',

        '@media (max-width: 600px)': {
            top: '-7vh',
        },
    })


    const CircleThreeImg = styled(`img`)({
        position: 'absolute',
        right: '-7vw',
        top: '0px',
        width: '35vw'
    })

    const CreativeSection = styled(`div`)({
        position: 'absolute',
        left: '0px',
        right: '0px',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '120vh',

        '@media (max-width: 1024px)': {
            height: '140vh',
        },

        '@media (max-width: 768px)': {
            height: 'calc(70vh + 300px)',
        },

    })


    const CreativeParent = styled('div')({
        'display': 'flex',

        '@media (max-width: 600px)': {
            zoom : '80%'
        },
    })


    const CreativeLeftSection = styled(`div`)({
        'background': '#fff',
        'width': '300px',
        'borderRadius': '10px',
        'padding': '20px',
        'textAlign': 'left',
        // 'transform': 'rotate(-10deg)',
        'position': 'relative',
        zIndex: '1',
        transition: 'transform 200ms ease',

        '@media (max-width: 768px)': {
            left: '15%',
            height : 'calc(32vh + 100px)',
            overflow : 'hidden'
        },

    })

    const HeadingRow = styled(`div`)({
        'color': '#d80e0e',
        fontSize: '18px'
    })

    const SubHeadingRow = styled(`div`)({
        'color': '#000',
        fontSize: '16px',

        '&.topMargin': {
            marginTop: '20px'
        }
    })

    const Para = styled('div')({
        fontSize: '15px',
        marginTop: '20px'
    })

    const Divider = styled('div')({
        background: 'linear-gradient(0deg, white, #fdfdfd7d)',
        height: '50px',
        marginTop: '-50px',
        position: 'relative',
        borderBottom: '1px solid #efefef',
    })


    const CreativeRightSection = styled('div')({
        // transform: 'rotate(10deg)',
        transition: 'transform 200ms ease',

        '@media (max-width: 768px)': {
            position : 'relative',
            right: '15%',
            height : 'calc(32vh + 150px)',
            overflow : 'hidden',
            borderRadius : '10px'
        },
    })


    const ResumeButton = styled('a')({
        padding: '14px 28px',
        background: 'linear-gradient(99deg, #9063F4, #517DED)',
        borderRadius: '40px',
        color: '#fff',
        marginTop: '50px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',

        '&:hover': {
            background: 'linear-gradient(99deg, #994ECC, #3E187A)'
        }

    })


    const MyProfileBox = styled('div')({
        position: 'absolute',
        right: 'calc(50% - 50px)',
        top: '20vh',
        width: '110px',
        zIndex: '2',
        height: '100px',
        border: '1px solid #c7c7c796',
        borderRadius: '50%',
        background: '#fffcd49c',
        overflow: 'hidden',
        transition: 'transform 200ms ease',

        '@media (max-width: 768px)': {
            top: 'calc(10% + 30px)',
        },


    })

    const MyProfile = styled(`img`)({
        width: '100%',
        filter: 'brightness(1.2)'
    })


    const codeString = `function selectionSort(arr) {

 const n = arr.length;
 
for (let i = 0; i < n - 1; i++) {

let minIndex = i;

 for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minIndex]) {
       minIndex = j;
    }
   }
   if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
   }

 }

 return arr;
}
const array = [64, 25, 12, 22];
let result = selectionSort(array);
console.log(result);
                       `

    return (
        <div>
            <div ref={leftElement}>
                <MainHeadSection>

                    <BackSection>
                        <ShadowSection>
                            <CircleOneImg src={c1img}></CircleOneImg>
                            <CircleTwoImg src={c2img}></CircleTwoImg>
                            <CircleThreeImg src={c3img}></CircleThreeImg>

                            <CreativeSection>
                                <div >
                                    <CreativeParent>
                                        <MyProfileBox style={{ transform: `translate3d(0px, ${100 / (expandElementLeft / 2)}px, 0px)` }}> <MyProfile src={MyProfileImg} />  </MyProfileBox>
                                        <CreativeLeftSection className='cretive-left' style={{ transform: `rotate(-${expandElementLeft}deg)` }}>
                                            <HeadingRow className='poppins-semibold'> Aniket Singh </HeadingRow>
                                            <SubHeadingRow className='poppins-semibold'> Senior Software Developer </SubHeadingRow>
                                            <Para className='poppins-regular'> I am Aniket Singh, a senior software developer with over 4.6 years of professional experience. Successfully building products, websites, web apps, hybrid mobile apps. I pay attention to small details, enjoy technical problems, and work well in teams. I like learning new technologies and always aim to improve my skills. </Para>
                                            <Divider></Divider>
                                            <Para> aniketsinghinform@gmail.com </Para>
                                            <Para> 7011283041 </Para>
                                            <Para>  </Para>
                                            <SubHeadingRow className='poppins-semibold topMargin'> Work Experience </SubHeadingRow>
                                            <Para className='poppins-regular'>
                                                Senior Software Developer | Algoscale Technologies Private Limited <br /> <br />
                                                Software Developer | Factech Automation Solutions Private Limited
                                            </Para>
                                            <Divider></Divider>
                                        </CreativeLeftSection>

                                        <CreativeRightSection style={{ transform: `rotate(${expandElementLeft}deg)` }}>

                                            <SyntaxHighlighter language="javascript" wrapLongLines="true" style={a11yDark} customStyle={{ padding: '20px', borderRadius: '20px', marginTop: '0px', marginBottom: '0px', maxWidth: '300px', textAlign: 'left', fontSize: '14px' }} >
                                                {codeString}
                                            </SyntaxHighlighter>

                                        </CreativeRightSection>

                                    </CreativeParent>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <ResumeButton className='poppins-semibold' target='_blank' href='https://docs.google.com/document/d/1P0OxUd-6MtyXn6jukHY14IroQxMwrRENTjj6tX40t5g/edit?usp=sharing'> View Resume </ResumeButton>
                                    </div>
                                </div>
                            </CreativeSection>
                        </ShadowSection>
                    </BackSection>


                </MainHeadSection>
            </div>
        </div>
    )

}

export default ResumeSection;




// window.onscroll = function() {
//     var dv = document.getElementById('i-video');
//     var v = document.getElementById('video-frame');
//     if ((window.scrollY < (dv.offsetTop + dv.offsetHeight)) && ((window.scrollY + window.outerHeight) > dv.offsetTop)) {
//         if (v.src=='' || v.src==location.href) {
//             v.src='https://www.youtube.com/embed/s7K_VGzFCiw?autoplay=1&mute=1';
//         }
//     } else {
//         v.src='';
//     }
//    }