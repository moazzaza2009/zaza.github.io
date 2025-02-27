import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Super_page = () => {
    const navigate = useNavigate();
    const stagccRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // X-axis scrolling effect for images
    const xValue = useTransform(scrollYProgress, [0, 0.6], [450, -200]);
    const xxValue = useTransform(scrollYProgress, [0, 0.6], [-450, 200]);

    // Smooth scrolling
    const smoothX = useSpring(xValue, { stiffness: 50, damping: 20 });
    const smoothXX = useSpring(xxValue, { stiffness: 50, damping: 20 });

    // Pinned section effect
    const { scrollYProgress: stagccProgress } = useScroll({
        target: stagccRef,
        offset: ["center end", "end start"],
    });


    const scale = useTransform(stagccProgress, [0.3, 1], [0.5, 1]);
    const top = useTransform(stagccProgress, [0.3, 1], ["90%", "0%"]);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);
    return (
        <div className="Stag_page">
            <section className="Stag_sections">
                <img src="/assets/Super_logo/Super1.png" className="Stag1" alt="Stag Logo 1" />
            </section>

            <section className="Stag_sections">
                <div className="text1_c">
                    <div className="flex">
                        <p className="text_stag1">We are with you</p>
                    </div>
                    <div>
                        <p className="text_stag2">CLIENT</p>
                        <p className="text_stag3">Super</p>
                    </div>
                    <div className="text_stag4c">
                        <p className="text_stag4">
                            A company that offers a cheap tables for the people that lives alone.
                        </p>
                    </div>
                </div>
            </section>

            <div className="images">
                <motion.div className="flex gap-2" style={{ x: smoothX }}>
                    <img src="/assets/Super_logo/Super2.png" alt="Stag 2" />
                    <img src="/assets/Super_logo/Super3.png" alt="Stag 3" />
                    <img src="/assets/Super_logo/Super4.png" alt="Stag 4" />
                    <img src="/assets/Super_logo/Super5.png" alt="Stag 5" />
                </motion.div>

                <motion.div className="flex gap-2" style={{ x: smoothXX }}>
                    <img src="/assets/Super_logo/Super6.png" alt="Stag 6" />
                    <img src="/assets/Super_logo/Super7.png" alt="Stag 7" />
                    <img src="/assets/Super_logo/Super8.png" alt="Stag 8" />
                </motion.div>
            </div>

            <section className="goal_section">
                <p className="goal">Goal</p>
                <div className="goal1">
                    <p className="goal1">Our goal is to offers the best tables for you.</p>
                </div>
            </section>

            <section className="Stagcc" ref={stagccRef}>
                <img src="/assets/Super_logo/Super3.png" alt="Stag 3" />
                <img src="/assets/Super_logo/Super5.png" alt="Stag 5" />
                <img src="/assets/Super_logo/Super7.png" alt="Stag 7" />
                <img src="/assets/Super_logo/Super2.png" alt="Stag 2" />
                <img src="/assets/Super_logo/Super4.png" alt="Stag 4" />

                {/* Motion div that pins to screen */}
                <motion.div
                    className="next-project"
                    style={{

                        scale,
                        top,
                        position: "fixed",
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                    }}
                    onClick={
                        () => {
                 
                          navigate("/Prime")
                          window.location.reload();
                     }}
                >

                    <img
                        src="assets/Prime_logo/Prime11.png"
                        alt="Stag 11"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                   
                </motion.div>
            </section>

            {/* Spacer to continue scrolling after animation */}
            <div style={{ height: "150vh" }}></div>
        </div>
    );
};

export default Super_page;
