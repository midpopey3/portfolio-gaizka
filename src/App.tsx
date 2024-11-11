import React from 'react';
import AboutPage from './components/AboutPage';
import ProjectsPages from './components/ProjectsPages';  // Projects.tsx akan menggunakan ProjectCard di dalamnya
import ContactPage from './components/ContactPage'
import '../src/App.css'
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 to-purple-600 min-h-screen text-white">

      <HomePage />

      {/* Bagian tentang diri sendiri */}
      <AboutPage />

      {/* Bagian proyek yang memuat beberapa ProjectCard di dalam Projects */}
      <ProjectsPages />

      {/* Bagian kontak */}
      <ContactPage />
    </div>
  );
};

export default App;
