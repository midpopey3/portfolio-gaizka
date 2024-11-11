import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-red-300 to-purple-600 min-h-screen text-white">
      <h1 className="text-4xl font-semibold">Hello!</h1>
      <p className="text-2xl mt-2">I’m [Nama Anda], a Front-End Developer</p>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        I am a student who has just begun my journey as a front-end developer. 
        I have a strong foundation in web development and continue to learn more each day.
      </p>
    </section>
  );
};

export default About;
