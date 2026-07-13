import { motion } from "framer-motion";
import { FaCheckCircle, FaGift } from "react-icons/fa";

const offers = [
  "FREE Initial Consultation",
  "FREE Eligibility Assessment",
  "Visa Documentation Guidance",
  "University & Work Opportunity Support",
  "Affordable Processing Fee",
  "Professional One-to-One Support",
];

const Offer = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[30px] bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 shadow-2xl"
        >
          <div className="grid items-center gap-10 p-10 lg:grid-cols-2 lg:p-16">

            {/* Left */}

            <div className="text-white">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
                <FaGift />
                <span className="font-medium">Limited Time Offer</span>
              </div>

              <h2 className="text-4xl font-black leading-tight">

                Your Journey to
                <br />
                Czech Republic Starts Here 🇨🇿

              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">

                Whether you are planning to study, work, or travel,
                our experienced consultants will guide you through every
                step with transparent and reliable support.

              </p>

              <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
                Get Free Consultation
              </button>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <h3 className="mb-6 text-2xl font-bold text-slate-900">

                What You'll Get

              </h3>

              <div className="space-y-5">

                {offers.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 rounded-full bg-green-100 p-2">
                      <FaCheckCircle className="text-green-600" />
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-800">
                        {item}
                      </h4>

                    </div>
                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-2xl bg-red-50 p-5">

                <p className="font-semibold text-red-600">

                  🎉 Book your consultation today and start your Czech Republic journey with confidence.

                </p>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Offer;