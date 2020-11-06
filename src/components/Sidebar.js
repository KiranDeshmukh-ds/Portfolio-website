import React from "react";
import {
  FaAddressCard,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Profilepic from "../assets/projects_images/kiranLinkedin.jpg";
import Resume from "../assets/resume.docx";
const Sidebar = () => {
  function handleEmailMe() {
    window.open("mailto:kirandeshmukh1337@gmail.com");
  }
  return (
    <div className="sidebar">
      <img src={Profilepic} alt="Kiran Deshmukh" className="  profile-pic" />
      <div className="sidebar__item sidebar__name">
        <span>Kiran Deshmukh</span>
      </div>
      <div className="sidebar__item desc">
        <span>
          <FaGraduationCap className="sidebar__icon education-icon" />
        </span>
        <h6>MBA (Marketing)</h6>
        <h6>Web Developer </h6>
      </div>
      <div className="sidebar__item sidebar__resume">
        <a href={Resume} download="resume.docx">
          <FaAddressCard className="sidebar__icon" />
          Download Resume
        </a>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        <a href="#">
          <MdEmail className="sidebar__icon " />
          Email Me
        </a>
      </div>
      <div className=" sidebar__item  ">
        <a href="#">
          <FaLinkedin className="sidebar__icon" />
        </a>
        <a href="#">
          <FaGithub className="sidebar__icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
