import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-[32px] bg-white shadow-2xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-red-600 p-10 text-white lg:p-14">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur">
                CONTACT US
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight">
                Let's Make Your
                <br />
                Czech Republic Dream
                <br />
                Come True 🇨🇿
              </h2>

              <p className="mt-6 text-blue-100 leading-8">
                Have questions about studying, working or traveling to the
                Czech Republic? Contact our experienced consultants today for a
                free consultation.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-sm text-blue-200">Phone</p>
                    <h4 className="font-semibold">
                      +880 17XX-XXXXXX
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm text-blue-200">Email</p>
                    <h4 className="font-semibold">
                      info@touragency.com
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-3">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-sm text-blue-200">Office</p>
                    <h4 className="font-semibold">
                      Mirpur, Dhaka, Bangladesh
                    </h4>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-center p-10 lg:p-14">

              <h3 className="text-3xl font-bold text-slate-900">
                Get in Touch
              </h3>

              <p className="mt-3 text-slate-600">
                Contact us instantly through your preferred platform.
              </p>

              <div className="mt-10 grid gap-5">

                <a
                  href="https://wa.me/88017XXXXXXXX"
                  className="flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <FaWhatsapp className="text-3xl text-green-500" />

                    <div>
                      <h4 className="font-semibold">
                        WhatsApp
                      </h4>

                      <p className="text-sm text-slate-500">
                        Chat with us instantly
                      </p>
                    </div>
                  </div>

                  →
                </a>

                <a
                  href="tel:+88017XXXXXXXX"
                  className="flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-2xl text-blue-600" />

                    <div>
                      <h4 className="font-semibold">
                        Call Now
                      </h4>

                      <p className="text-sm text-slate-500">
                        Speak with our consultant
                      </p>
                    </div>
                  </div>

                  →
                </a>

                <a
                  href="https://facebook.com"
                  className="flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-1 hover:border-blue-700 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <FaFacebookF className="text-2xl text-blue-700" />

                    <div>
                      <h4 className="font-semibold">
                        Facebook
                      </h4>

                      <p className="text-sm text-slate-500">
                        Follow & Message Us
                      </p>
                    </div>
                  </div>

                  →
                </a>

              </div>

              <button className="mt-10 rounded-xl bg-gradient-to-r from-blue-700 to-red-600 py-4 font-semibold text-white transition hover:scale-105">
                Book Free Consultation
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;