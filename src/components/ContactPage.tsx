import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#DF456B] to-[#A90406] text-black">
      <h1 className="text-7xl font-semibold mb-8">Contact Me</h1>
      <p className="text-lg text-center mb-12">
        "Thank you for visiting my portfolio website."
      </p>

      <div className="flex space-x-8 mb-16">
        <a href="https://instagram.com/gaizkarprtm__" target="_blank" rel="noopener noreferrer" className="text-3xl text-white">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/midpopey3" target="_blank" rel="noopener noreferrer" className="text-3xl text-white">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:kakagaizka29@gmail.com" className="text-3xl text-white">
          <FontAwesomeIcon icon={faSolidEnvelope} />
        </a>
      </div>
      <div className="text-center space-y-2">
      </div>
    </div>
  );
};

export default ContactPage;