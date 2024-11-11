import React from 'react';

const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
    return (
        <div id='project' className="w-screen min-h-screen bg-gradient-to-b from-[#830B85] to-[#DF456B] bg-white rounded-lg shadow-lg p-6 max-w-xs mx-4 mb-6">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-white-800 mb-2">{title}</h3>
            <p className="text-white-600">{description}</p>
        </div>
    );
};

const ProjectsPage: React.FC = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-b from-[#830B85] to-[#DF456B] min-h-screen"
        >
            <h2 className="text-5xl font-bold text-white mb-10">Projects</h2>
            <div className="flex flex-wrap justify-center">
                <ProjectCard
                    title="GarageRC01"
                    description="A dynamic web application for managing and organizing car-related data efficiently."
                    imageUrl="/GA.png"
                />
                <ProjectCard
                    title="Kisah Sekolah"
                    description="A game project that i create with my classmate with unity engines"
                    imageUrl="/game.png"
                />
                <ProjectCard
                    title="Portfolio B Indo"
                    description="My comprehensive portfolio showcasing projects and experiences, built in Bahasa Indonesia."
                    imageUrl="/port.png"
                />
                <ProjectCard
                    title="Smart Attendance System"
                    description="An intelligent system for tracking attendance using facial recognition and geolocation."
                    imageUrl="/SA.png"
                />
            </div>
        </section>
    );
};

export default ProjectsPage