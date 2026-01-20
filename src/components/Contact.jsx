// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Footer from "./Footer";
import { Highlighter } from "@/components/ui/highlighter";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  //   const formRef = useRef();
  //   const [sent, setSent] = useState(false);
  //   const [loading, setLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .sendForm(
  //       "service_89lipqf", // Replace with your actual service ID
  //       "latest_template", // Replace with your actual template ID
  //       formRef.current,
  //       "7pX1x5CRfgjG8C0sP" // Replace with your public key
  //     )
  //     .then(() => {
  //       setSent(true);
  //       setLoading(false);
  //       formRef.current.reset();
  //       setTimeout(() => setSent(false), 4000);
  //     })
  //     .catch((error) => {
  //       console.error("EmailJS Error:", error);
  //       alert("Failed to send message. Please try again.");
  //       setLoading(false);
  //     });
  // };

  return (
    <>
      <section
        id="contact"
        className="w-full px-2 sm:px-6 lg:px-8 py-12 relative  rounded-3xl"
      >
        {/* Light rays background */}
        <div className="absolute inset-0 w-full -z-10 overflow-hidden">
          <AnimatedGridPattern />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12 px-4">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-md">
            Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-center mt-3 text-gray-900">
            Get in Touch
          </h2>
          <p className="font-semibold text-sm sm:text-lg my-4  leading-relaxed">
            Want to get in touch? Feel free to message me on{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a84ff] hover:underline font-bold"
            >
              <Highlighter action="underline" color="#FF9800">
                LinkedIn{" "}
              </Highlighter>
            </a>
            , send me an{" "}
            <a
              href="mailto:hasaanazeem07@outlook.com"
              className="text-[#0a84ff] hover:underline font-bold"
            >
              <Highlighter action="underline" color="#FF9800">
                email{" "}
              </Highlighter>
            </a>
            , or reach out via any of my social profiles. I’ll get back to you
            as soon as I can.{" "}
          </p>
          <span className="font-bold mt-10">            
              Please note: I don’t respond to unsolicited offers.
          </span>
        </div>

        {/*
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-gray-100  p-8 rounded-2xl shadow-md"
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 ">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white  border border-gray-300  text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 ">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white  border border-gray-300  text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@gmail.com"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700 ">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-white  border border-gray-300  text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

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
      */}
        <Footer />
      </section>
    </>
  );
};

export default Contact;
