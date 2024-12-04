function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome to CodeMo
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Hi, I'm Mahmoud, a passionate Web Developer specializing in modern web technologies.
        I create responsive and user-friendly web applications using React, Node.js, and Next.js.
      </p>
      <div className="flex gap-4">
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="/projects"
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          View Projects
        </a>
      </div>
    </div>
  );
}

export default Home;