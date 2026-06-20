import React from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { Download } from "lucide-react";

const highlights = [
  { label: "Focus", value: "Full Stack (MERN + Python)" },
  { label: "Education", value: "BS Information Technology" },
  { label: "Based in", value: "Pakistan, open to relocate" },
];

const Resume = () => {
  return (
    <section id="resume" className="py-14 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="text-center mb-10">
        <Highlighter action="underline" color="#FF9800">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">My Resume</h2>
        </Highlighter>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-4">
          The short version of everything on this page, in one PDF.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Resume Preview Image */}
        <a
          href="/Hasaan_Azeem_Full_Stack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition mx-auto w-full max-w-[340px] sm:max-w-md"
        >
          <img
            src="/Hasaan_Azeem_MERN-Stack.png"
            alt="Hasaan Azeem resume preview"
            className="w-full h-auto object-cover"
          />
        </a>

        {/* Content */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Hasaan Azeem
          </h3>
          <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-sm mx-auto sm:mx-0">
            Full Stack Developer, BS Information Technology graduate from the
            University of Gujrat.
          </p>

          <div className="space-y-3 mb-7 inline-block text-left">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-gray-400 w-24 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-gray-800 font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="/Hasaan_Azeem_Full_Stack.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
