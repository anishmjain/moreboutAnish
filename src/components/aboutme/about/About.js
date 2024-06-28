import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Anish Manish Jain </b> 
                  and I am a <b className="purple">Computer Science and Engineering </b> 
                    student at <b className="purple"> Vellore Institute of technology </b>
                    with a <b className="purple">strong foundation in machine learning and web development.</b>
                <br />
                        I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    Java, Python, HTML, CSS, C, C++ and JavaScript.{" "}
                  </b>
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    NodeJS, ReactJS, OpenCV, Pandas, Matplot-lib, Seaborn, NumPy and LSTM.{" "}
                  </b>
                <br />
                
                Whenever possible, I also apply my passion for developing
                products with 
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">new web technologies and products,  </b>and listening to music.
                  Passionate about technology, I thrive on innovation and have completed a project using artificial intelligence.
                  My effective communication and adaptability ensure success in collaborative environments.
                  I'm excited about leveraging my skills to 
                  <b className="purple">
                    {" "}
                    contribute to impactful projects in the ever-evolving tech landscape.
                  </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
