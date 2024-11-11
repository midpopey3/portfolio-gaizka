import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="text-center py-12 bg-gradient-to-b from-purple-700 to-red-500 text-white">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <p className="mt-4">Thank you for visiting my portfolio website.</p>
      <div className="mt-8 space-y-2">
        <p>Email: example@example.com</p>
        <p>Phone: +62 123 456 789</p>
      </div>
    </section>
  );
};

export default Contact;
