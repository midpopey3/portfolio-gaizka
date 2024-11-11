import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div id='about' className="w-screen min-h-screen bg-gradient-to-b from-[#DEACC6] to-[#830B85] text-white flex flex-col items-center justify-center">

      <div className="w-full max-w-4xl p-8 relative">

        <div className="absolute top-8 right-8 text-8xl font-bold leading-none tracking-tight text-white">
          <h2 className="inline-block relative">
            About <br /> my self

            <span className="absolute top-0 left-0 w-10 h-1 bg-white"></span>
            <span className="absolute top-0 left-0 h-12 w-1 bg-white"></span>
            <span className="absolute bottom-0 right-0 w-10 h-1 bg-white"></span>
            <span className="absolute bottom-0 right-0 h-12 w-1 bg-white"></span>
          </h2>
        </div>

        <p className="mt-80 text-lg leading-relaxed text-left text-white ml-8">
          I am a student who is just beginning my journey as a front-end developer. I enjoy creating engaging websites and learning about HTML, CSS, TypeScript, and JavaScript to design interfaces that are cool and easy to use. I'm always eager to try new things and improve my coding skills. Through small projects and experiments, I keep learning how to build responsive and dynamic websites.
        </p>
      </div>

    </div>
  );
};

export default AboutPage;