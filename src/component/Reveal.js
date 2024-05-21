import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "auto" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const [animationDone, setAnimationDone] = useState(false);
    

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls, !animationDone]);

    return (
        <div 
            ref={ref} 
            style={{ 
                position: "relative", 
                width : animationDone ? '' : width, 
                overflow: animationDone ? "visible" : "hidden" 
            }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                onAnimationComplete={() => setAnimationDone(true)}
            >
                {children}
            </motion.div>
            {/* <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#ffd400",
                    zIndex: 20,
                }}
                onAnimationComplete={() => setAnimationDone(true)}
            /> */}
        </div>
    );
};

export default Reveal;
