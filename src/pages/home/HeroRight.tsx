import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaGraduationCap,
  FaSuitcase,
  FaPlaneDeparture,
} from "react-icons/fa";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Decorative Background */}

      <div className="absolute -top-8 right-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-red-200/30 blur-3xl"></div>

      {/* Main Image */}

      <div className="relative w-full max-w-[560px]">

        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Prague"
          className="h-[620px] w-full rounded-[35px] object-cover shadow-2xl"
        />

        {/* Czech Badge */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-6 top-6 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://flagcdn.com/w80/cz.png"
              className="h-7 w-10 rounded"
              alt=""
            />

            <div>
              <p className="text-xs text-slate-500">
                Destination
              </p>

              <h4 className="font-bold text-slate-800">
                Czech Republic
              </h4>
            </div>
          </div>
        </motion.div>

        {/* Offer Card */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -left-10 top-36 w-72 rounded-3xl border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur-xl"
        >
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
            LIMITED OFFER
          </span>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Free Consultation
          </h3>

          <div className="mt-5 space-y-3">

            {[
              "Eligibility Assessment",
              "Documentation Support",
              "Application Guidance",
              "Visa Processing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-500" />

                <span className="text-sm text-slate-700">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </motion.div>

        {/* Bottom Stats */}

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute -bottom-10 right-0 rounded-3xl bg-white p-6 shadow-2xl"
        >
          <div className="grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-black text-blue-700">
                98%
              </h3>

              <p className="text-xs text-slate-500">
                Success
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-red-600">
                500+
              </h3>

              <p className="text-xs text-slate-500">
                Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-green-600">
                24/7
              </h3>

              <p className="text-xs text-slate-500">
                Support
              </p>
            </div>

          </div>
        </motion.div>

        {/* Floating Services */}

        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -right-8 top-44 rounded-2xl bg-blue-700 p-4 text-white shadow-xl"
        >
          <FaGraduationCap className="text-2xl" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
          className="absolute right-6 bottom-48 rounded-2xl bg-red-600 p-4 text-white shadow-xl"
        >
          <FaSuitcase className="text-2xl" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute left-20 bottom-36 rounded-2xl bg-green-500 p-4 text-white shadow-xl"
        >
          <FaPlaneDeparture className="text-2xl" />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroRight;