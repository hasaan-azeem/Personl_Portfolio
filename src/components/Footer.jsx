import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef();
  return (
    <footer
      ref={footerRef}
      className="text-gray-600  py-6 px-4 border-t border-gray-200 "
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Hasaan Azeem. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl sm:text-2xl">
          <a
            href="https://github.com/hasaan-azeem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#08aaaa] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hasaan-azeem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#08aaaa] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hasaanazeem07@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#08aaaa] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
