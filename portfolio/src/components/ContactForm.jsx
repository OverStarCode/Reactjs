import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      process.env.YOUR_SERVICE_ID,
      process.env.YOUR_TEMPLATE_ID,
      formRef.current,
      process.env.YOUR_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="4"
          className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}

export default ContactForm;