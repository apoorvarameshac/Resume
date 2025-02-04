import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
            <h2 className="text-xl md:text-2xl mb-6">Senior Software Engineer</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com" className="hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Passionate software engineer with 8+ years of experience in developing scalable web applications.
            Specialized in React, Node.js, and cloud technologies. Strong advocate for clean code and best practices.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Senior Software Engineer</h3>
              <div className="text-blue-600 mb-2">Tech Corp • 2020 - Present</div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Led development of microservices architecture serving 1M+ users</li>
                <li>Improved application performance by 40% through optimization</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <div className="text-blue-600 mb-2">StartUp Inc • 2018 - 2020</div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed and maintained multiple React applications</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
                <li>Collaborated with design team to improve UI/UX</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Git'].map((skill) => (
              <div key={skill} className="bg-white px-4 py-2 rounded-full text-center shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
            <div className="text-blue-600">University of Technology • 2014 - 2018</div>
            <p className="mt-2 text-gray-600">
              Graduated with honors. Specialized in Software Engineering and Data Structures.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;