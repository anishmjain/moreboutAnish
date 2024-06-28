import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Aug - Dec 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          ETHNUS: MERN FULL STACK INTERNSHIP PROGRAM 
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Full Stack Web Developer
          </h6>
          <p>• Implemented a news recommendation system using NewAPI and MERN stack, offering personalized news filtering by category. </p>
          <p>• Led a group project to develop a news aggregation platform with authentication enabled, enhancing user access to tailored news content sourced through NewAPI. </p>
          <p>• Configured a news recommendation system with authentication using NewAPI, enabling real-time news updates and personalized filtering based on user preferences.</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
