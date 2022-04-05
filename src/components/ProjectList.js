import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  console.log(projects);

  const projectsMap = projects.map(project => {
    return <span key={project}>{project}</span>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <span>{projectsMap}</span>
        </div>
    </div>
  );
}

export default ProjectList;


// In the ProjectList component, a prop of projects is being passed down from the App component with an array of objects. For each object in the array, render one ProjectItem component with the correct props. Use the id of the project for the key prop.