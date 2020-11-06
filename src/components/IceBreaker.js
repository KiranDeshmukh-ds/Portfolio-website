import React from "react";
import dot from "../assets/icons/react.svg";
import Bar from "./Bar";
import python from "../assets/icons/python.svg";

function IceBreaker() {
  const languages = [
    {
      icon: dot,
      name: "SQL",
      level: "80",
    },
    {
      icon: python,
      name: "Python",
      level: "57",
    },
    {
      icon: dot,
      name: "React JS",
      level: "82",
    },
  ];

  const tools = [
    {
      icon: dot,
      name: "Tableau",
      level: "65",
    },
    {
      icon: dot,
      name: " MS Excel",
      level: "70",
    },
  ];
  return (
    <div className="container ice">
      <div className="row">
        <div className="col-lg-6 infocard">
          <h4 className="infocard__heading">Education</h4>
          <div className="infocard__body">
            <h6 className="infocard__title">Masters Of Management Studies</h6>
            <p className="infocard__name">
              MET Institute of Management, Bandra (2019-2021)
            </p>
          </div>
          <div className="infocard__body">
            <h6 className="infocard__title">
              Electronics and Telecommunication Engineering
            </h6>
            <p className="infocard__name">
              Ramrao Adik Institute of Technology, Nerul (2013-2017)
            </p>
          </div>
        </div>
        <div className="col-lg-6 infocard">
          <h4 className="infocard__heading">Internship and Live Projects</h4>
          <div className="infocard__body">
            <h6 className="infocard__title">Jio Creative Labs</h6>
            <p className="infocard__name">
              Content Strategist (April 2020 - June 2020)
            </p>
          </div>
          <div className="infocard__body">
            <h6 className="infocard__title">Raw Pressery</h6>
            <p className="infocard__name">Sales and Promotion (January 2020)</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 ice__languages mt-3">
          <h6 className="ice__languages_heading">Languages and FrameWork</h6>
          <div className="ice__languages_body">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 ice__languages mt-3">
          <h6 className="ice__languages_heading">Tools and Softwares</h6>
          <div className="ice__languages_body">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IceBreaker;
