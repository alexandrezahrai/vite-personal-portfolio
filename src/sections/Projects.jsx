/* eslint-disable react/no-unescaped-entities */
import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <Heading heading="Some projects I've worked on..." />

      <hr className="mt-4 mb-12 border-t border-transparent" />

      <ProjectCard />
    </div>
  );
};

export default Projects;
