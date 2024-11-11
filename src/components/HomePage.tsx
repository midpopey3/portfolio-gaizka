import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#E7929A] to-[#DEACC6] text-black flex flex-col items-center">
      
      {/* Header */}
      <header className="w-full max-w-6xl py-4 px-8 flex flex-col items-center text-lg font-medium">
        
        {/* Navigation */}
        <nav className="flex gap-12 mb-8">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact Me</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-12 px-4 text-center">
        
        {/* Intro Section with Circle and Portfolio Text */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
          
          {/* PORTFOLIO Text */}
          <div className="text-left text-6xl font-extrabold leading-none tracking-tighter hidden md:block">
            <p>PORT</p>
            <p>FO</p>
            <p>LIO</p>
          </div>

          {/* Intro Text and Circle */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Intro Text */}
            <h1 className="text-4xl font-semibold text-center md:text-left">
              Hello! <br />
              I’m Gaizka Rizky Pratama, <br />
              As a Front End
            </h1>

            {/* Enlarged Profile Circle */}
            <div className="w-80 h-80 bg-gray-300 rounded-full">
                <img src="./kkk.jpeg" alt="" className='w-80 h-80 bg-gray-300 rounded-full' />
            </div>
          </div>
        </div>
        
      </main>

      {/* Description Text - Moved to Bottom */}
      <div className="mt-10 max-w-2xl px-4 text-lg font-light leading-relaxed text-center">
        "My skills include front-end development using technologies such as React, Tailwind CSS, and TypeScript. I also have a deep understanding of responsive design principles and web accessibility, and I continuously stay updated with the latest advancements in front-end technology."
      </div>
      
    </div>
  );
};

export default HomePage;
