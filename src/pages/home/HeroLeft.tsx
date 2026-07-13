import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2 shadow-md">
        <img
          src="https://flagcdn.com/w80/cz.png"
          alt="Czech Republic"
          className="h-6 w-8 rounded object-cover"
        />

        <span className="text-sm font-semibold text-blue-700">
          Czech Republic • Study • Work • Travel
        </span>
      </div>

      {/* Heading */}

      <div className="space-y-4">

        <h1 className="text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

          Start Your
          <br />

          <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
            European Journey
          </span>

        </h1>

        <p className="text-2xl font-semibold text-slate-700">
          Czech Republic Opportunity 🇨🇿
        </p>

      </div>

      {/* Bangla Description */}

      <p className="max-w-xl text-[17px] leading-8 text-slate-600">
        আপনি যদি চেক রিপাবলিকে <b>উচ্চশিক্ষা</b>, <b>চাকরি</b> অথবা
        <b> ভ্রমণ</b> করার পরিকল্পনা করে থাকেন, তাহলে আমরা আপনাকে
        শুরু থেকে শেষ পর্যন্ত সম্পূর্ণ সহায়তা প্রদান করি।
        ডকুমেন্ট প্রস্তুত করা, আবেদন প্রক্রিয়া, ভিসা গাইডলাইন এবং
        প্রয়োজনীয় পরামর্শ—সবকিছু এক জায়গায়।
      </p>

      {/* Features */}

      <div className="grid gap-4 sm:grid-cols-2">

        {[
          "Free Consultation",
          "Visa Documentation",
          "Professional Guidance",
          "Fast Processing",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-md"
          >
            <FaCheckCircle className="text-green-500" />

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}

      </div>

      {/* CTA */}

      <div className="flex flex-wrap gap-4">

        <a
          href="#contact"
          className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
        >
          Free Consultation

          <FaArrowRight className="transition group-hover:translate-x-1" />
        </a>

        <a
          href="https://wa.me/8801700000000"
          className="flex items-center gap-3 rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
        >
          <FaWhatsapp />

          WhatsApp
        </a>

      </div>

      {/* Contact Quick Card */}

      <div className="flex flex-wrap gap-6 rounded-3xl border bg-white p-6 shadow-xl">

        <div>

          <p className="text-sm text-slate-500">
            Call Us
          </p>

          <div className="mt-2 flex items-center gap-2">

            <FaPhoneAlt className="text-blue-700" />

            <span className="font-bold text-slate-800">
              +880 17XX-XXXXXX
            </span>

          </div>

        </div>

        <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>

        <div>

          <p className="text-sm text-slate-500">
            Office Hours
          </p>

          <h3 className="mt-2 font-bold text-slate-800">
            Sat – Thu | 10 AM – 7 PM
          </h3>

        </div>

      </div>

    </motion.div>
  );
};

export default HeroLeft;