import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-purple-500 to-purple-700 text-white">
      <h2 className="text-3xl font-semibold text-center">Projects</h2>
      <div className="flex justify-center mt-8 space-x-8">
        {/* Setiap ProjectCard mewakili satu proyek */}
        <ProjectCard
          title="Project 1"
          image="path/to/project1.png"
          description="Description of Project 1."
        />
        <ProjectCard
          title="Project 2"
          image="path/to/project2.png"
          description="Description of Project 2."
        />
      </div>
    </section>
  );
};

export default Projects;
