import React from 'react';

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description }) => {
  return (
    <div className="w-64 bg-white p-4 rounded shadow-lg text-black">
      <img src={image} alt={title} className="rounded mb-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
