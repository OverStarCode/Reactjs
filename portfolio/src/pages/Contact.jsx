import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Contact Me
      </h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Feel free to reach out to me using the form below. I'll get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;