import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Company */}

          <div>

            <div className="flex items-center gap-3">

              <img
                src="https://flagcdn.com/w40/cz.png"
                alt="Czech Flag"
                className="h-8 rounded"
              />

              <div>
                <h2 className="text-2xl font-black">
                  Tour Edu & Travel
                </h2>

                <p className="text-sm text-slate-400">
                  Czech Republic Consultancy
                </p>
              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              We help students, professionals and travelers
              start their journey to the Czech Republic with
              trusted consultation, visa guidance and complete
              documentation support.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5 text-slate-300">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                +88017XXXXXXXX
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-400" />
                info@touragency.com
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-400" />
                Mirpur, Dhaka, Bangladesh
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold">
              Stay Connected
            </h3>

            <p className="mt-4 text-slate-400">
              Follow us for travel updates,
              visa information and new offers.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://facebook.com"
                className="rounded-xl bg-slate-800 p-4 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/88017XXXXXXXX"
                className="rounded-xl bg-slate-800 p-4 transition hover:bg-green-600"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div className="my-10 h-px bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © {year} Tour Edu & Travel Agency. All Rights Reserved.
          </p>

          <p>
            Designed with ❤️ for Czech Republic Opportunities
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;