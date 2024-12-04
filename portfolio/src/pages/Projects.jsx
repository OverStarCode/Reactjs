import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Projects() {
  const links = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/OverStarCode',
      description: 'Check out my projects and contributions'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mahmoud-kamal-a98123284/',
      description: 'Connect with me professionally'
    },
    {
      icon: FaEnvelope,
      name: 'Email',
      url: 'mailto:mahmoud20518@fci.bu.edu.eg',
      description: 'Get in touch via email'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        My Projects & Links
      </h2>
      <div className="grid gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl text-blue-600 dark:text-blue-400">
              <link.icon />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{link.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;