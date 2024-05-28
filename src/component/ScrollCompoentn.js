import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, styled } from "@mui/material";


const string = `Crafting Solutions with 4+ Years of Expertise in Software Development, Driving Innovation, Excellence in Problem-Solving, and Delivering Cutting-Edge Technology for Tomorrow's Challenges.`;
const ScrollComp = () => {
   
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [offset, setOffset] = useState(0);

    // Measure the width of the container after it mounts
    useEffect(() => {
        const calculateDimensions = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const screenWidth = window.innerWidth;
                const offset = (screenWidth - containerWidth) / 2;
                setContainerWidth(containerWidth);
                setOffset(offset);
            }
        };

        calculateDimensions();

        // Update dimensions if the window is resized
        window.addEventListener("resize", calculateDimensions);
        return () => {
            window.removeEventListener("resize", calculateDimensions);
        };
    }, [offset, containerWidth]);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let sections = gsap.utils.toArray(".panel");

            // Define the string and calculate its width

            const fontSize = 6 * 16; // 5rem * 16px (base font size) = 80px
            const stringWidth = string.length * fontSize;

            // Create the ScrollTrigger animation
            gsap.to(sections, {
                xPercent: -100 * (sections.length * 5),
                ease: "none",
                scrollTrigger: {
                    trigger: ".intro_slide",
                    pin: true,
                    scrub: 0.5,
                    snap: {
                        snapTo: 5 / (sections.length - 1),
                        duration: 0.05,
                    },
                    // Set the end point based on the string width
                    end: `+=${stringWidth}px`,
                }
            });
        });
        return () => ctx.revert();
    }, []);



    const Heading = styled('div')({
        marginBottom: '20px',
        fontSize: '7rem',
        whiteSpace: 'nowrap'

    })

    return (
        <div className="flex flex-nowrwap overflow-x-auto intro_slide">
            {/* <div className="panel">
                <Heading> Crafting Solutions with 4+ Years of Expertise in Software Development, Driving Innovation, Excellence in Problem-Solving, and Delivering Cutting-Edge Technology for Tomorrow's Challenges." </Heading>
            </div> */}

            <Container ref={containerRef} maxWidth="xl"> </Container>

            <div style={{paddingLeft : `${offset}px`, paddingTop : `${offset*2}px`, paddingBottom : `${offset}px`}} className="flex flex-nowrwap overflow-x-auto intro_slide">
                <section>
                    <div className=" flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/1)] bg-no-repeat bg-cover panel">
                        <div className="">
                            <div className="">
                                <Heading>  {string} </Heading>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ScrollComp;