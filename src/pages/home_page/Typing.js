import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter 
            options={{
                strings: [
                    "Machine Learning Enthusiast",
                    "Web Developer",
                    "Certified Cloud Practitioner",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
