import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>About This Project</h1>

      <p>
        This project is a web-based aptitude testing platform designed to help users improve their knowledge and
        skills across various topics such as Mathematics, Networking, Aptitude, Database, Security, and more.
      </p>

      <p>
        Built using the <strong>MERN Stack</strong> (MongoDB, Express.js, React, and Node.js), this platform allows users
        to take topic-wise tests and track their performance over time.
      </p>

      <h2>Key Features:</h2>
      <ul>
        <li>User authentication and session management</li>
        <li>Admin panel to add, edit, and delete questions</li>
        <li>Topic-based question filtering for focused practice</li>
        <li>AI-driven performance analysis and smart topic suggestions (coming soon!)</li>
        <li>Responsive and user-friendly design</li>
      </ul>

      <h2>Purpose:</h2>
      <p>
        This platform was developed as part of an internship project at <strong>Dream Technology</strong> to explore full-stack web development and practical implementation of AI-enhanced learning tools.
      </p>

      <h2>Technologies Used:</h2>
      <ul>
        <li>Frontend: React.js</li>
        <li>Backend: Node.js & Express.js</li>
        <li>Database: MongoDB</li>
        <li>Styling: CSS, Flexbox</li>
        <li>AI: Python (for performance analysis and future recommendation features)</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        This project aims to provide an interactive, adaptive, and effective environment for users to enhance their skills
        and prepare for competitive exams or interviews.
      </p>
    </div>
  );
};

export default About;

