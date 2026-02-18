import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Footer from "./Footer";
import { Highlighter } from "@/components/ui/highlighter";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
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
        <Footer />
      </section>
    </>
  );
};

export default Contact;
