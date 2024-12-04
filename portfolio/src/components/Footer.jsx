function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {currentYear} CodeMo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;