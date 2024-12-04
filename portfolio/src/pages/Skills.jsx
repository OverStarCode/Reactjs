import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNode, FaDatabase,
  FaLinux, FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiPrisma, SiMongodb, SiMysql
} from 'react-icons/si';
import SkillCard from '../components/SkillCard';

function Skills() {
  const skills = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'PHP', icon: FaPhp },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Node.js', icon: FaNode },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Linux CLI', icon: FaLinux },
    { name: 'Git & GitHub', icon: FaGithub }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;