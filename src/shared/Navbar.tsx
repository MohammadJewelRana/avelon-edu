import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}

        <div className="flex items-center gap-4">
          <img
            src="https://flagcdn.com/w80/cz.png"
            alt="Czech Flag"
            className="h-10 w-14 rounded-md object-cover shadow-md"
          />

          <div>
            <h2
              className={`text-xl lg:text-2xl font-black transition ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Tour Edu & Travel
            </h2>

            <p
              className={`text-xs tracking-widest uppercase ${
                scrolled ? "text-slate-500" : "text-white/80"
              }`}
            >
              Czech Republic Consultancy
            </p>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          {/* Phone */}

          <a
            href="tel:+8801700000000"
            className={`hidden lg:flex items-center gap-3 rounded-full px-5 py-3 transition-all duration-300 ${
              scrolled
                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                : "bg-white/15 backdrop-blur-md text-white hover:bg-white/25"
            }`}
          >
            <FaPhoneAlt className="text-sm" />

            <div className="leading-4">
              <p className="text-xs opacity-70">Call Us</p>
              <p className="font-semibold">+880 17XX-XXXXXX</p>
            </div>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
          >
            <FaWhatsapp className="text-xl" />

            <span className="hidden sm:block">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;