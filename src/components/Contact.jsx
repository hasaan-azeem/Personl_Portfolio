import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_89lipqf", // Replace with your actual service ID
        "template_7dwyn0k", // Replace with your actual template ID
        formRef.current,
        "fPbQR9St8B0xmgALo" // Replace with your public key
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        formRef.current.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-10 py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-[apna] sm:text-4xl font-bold text-gray-800 dark:text-white">
          Let's Connect
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Drop a message and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Hidden timestamp field for template */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#08aaaa] hover:bg-[#51a0a0] cursor-pointer text-white rounded-lg font-semibold transition duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {sent && (
          <p className="text-green-600 text-center mt-4">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
