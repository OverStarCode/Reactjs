function About() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        About Me
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Hello, everyone! My name is Mahmoud, and I am a recent graduate from the Faculty of Computer Science. 
            I specialize in web development, particularly with technologies like React, Node.js, and Next.js.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm proficient in creating responsive websites and have experience using Tailwind CSS and SASS for styling. 
            Additionally, I'm familiar with Git and GitHub for version control, and I have a solid understanding of 
            both MongoDB and MySQL for database management.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I also have strong English language skills, which help me communicate effectively in collaborative environments. 
            I'm excited about the opportunity to contribute to your team and further develop my skills in web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;