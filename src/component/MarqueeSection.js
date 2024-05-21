import Marquee from "react-fast-marquee";
import { styled } from '@mui/system';

import backGrdient1 from './../assets/images/background/bacground-gradient-1.webp';



function MarqueeSection({ dataSource }) {

    let mainHeadBox = {};

    if (dataSource.headCleass != 'bacground-fixed') {
        mainHeadBox = {
            'padding': '60px 0px ',
            'background': `url("${backGrdient1}")`,
            'color': '#fff',
            'backgroundAttachment': 'fixed',
            'backgroundSize': '100% 100%',
            'position': 'relative',
            marginTop: '20vh',
        }
    }


    const MainHeadBox = styled('div')({
        // marginTop: '10vh',
        // padding: '40px 0px',
        color : dataSource.color === 'light' ? '#bbc4d2' : '#222',
        ...mainHeadBox
    });

    const SinglePoint = styled('span')({
        marginRight: '10rem',
        fontSize: '10rem',

        '@media (max-width: 600px)': {
            marginRight: '3rem',
             fontSize: '3rem',
        },
    });

    return (
        <div>
            <MainHeadBox>
                <Marquee direction={dataSource.direction} speed={dataSource.speed}>

                    {dataSource.data.map(arr => (
                        <SinglePoint key={arr} className="poppins-regular">{arr}</SinglePoint>
                    ))}
                    {/* <SinglePoint className="poppins-extrabold">frontend.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">backend.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">responsiveness.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">accessibility.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">APIintegration.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">codeoptimization.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">performance.</SinglePoint>
                    <SinglePoint className="poppins-extrabold">interactive.</SinglePoint> */}
                </Marquee>
            </MainHeadBox>
        </div>
    )
}


export default MarqueeSection;


// linear-gradient(225deg, #ffc63f 0%, #fd3358 49%, #bc35d8 100%)

// radial-gradient(circle 800px at 90% 20%, #fff 0%, rgba(255,255,255,0) 100%)

// radial-gradient(circle 560px at 90% 20%, #fff 0%, rgba(255,255,255,0) 100%)