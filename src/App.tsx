import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';  // Projects.tsx akan menggunakan ProjectCard di dalamnya
import Contact from './components/Contact';
import '../src/App.css'

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-red-300 to-purple-600 min-h-screen text-white">
      {/* Navbar untuk navigasi di bagian atas */}
      <Navbar />

      {/* Bagian tentang diri sendiri */}
      <About />

      {/* Bagian proyek yang memuat beberapa ProjectCard di dalam Projects */}
      <Projects />

      {/* Bagian kontak */}
      <Contact />
    </div>
  );
};

export default App;
