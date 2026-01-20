import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  const icons = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/autophilo_03" },
    { icon: <FaFacebook />, href: "https://facebook.com/hasaanazeem0" },
    { icon: <FaSquareXTwitter />, href: "https://twitter.com/hasaan_butt07" },
  ];

  return (
    <div className="flex gap-0 justify-center items-center">
      {icons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-12 rounded-full text-white hover:text-[#08aaaa] transition-colors"
        >
          <span className="text-xl">{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
