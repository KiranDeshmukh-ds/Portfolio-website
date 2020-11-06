import React, { useState } from "react";
import project_data from "./Data/project_data";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState(project_data);
  const handleFilterCategory = (name) => {
    const Change = project_data.filter((project) =>
      project.category.includes(name)
    );
    setProjects(Change);
  };
  return (
    <div className="container projects">
      <div className="projects__navbar">
        <div onClick={() => setProjects(project_data)}>All</div>
        <div onClick={() => handleFilterCategory("react.js")}>React</div>
        <div onClick={() => handleFilterCategory("python")}>Python</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
