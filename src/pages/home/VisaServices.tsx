import { FaGraduationCap, FaPlaneDeparture, FaWhatsapp } from "react-icons/fa";

const educationCountries = [
  "যুক্তরাজ্য",
  "যুক্তরাষ্ট্র",
  "কানাডা",
  "অস্ট্রেলিয়া",
  "নিউজিল্যান্ড",
  "জার্মানি",
  "ফ্রান্স",
  "আয়ারল্যান্ড",
  "ইতালি",
  "নেদারল্যান্ডস",
  "সুইডেন",
  "ফিনল্যান্ড",
  "ডেনমার্ক",
  "হাঙ্গেরি",
  "চেক রিপাবলিক",
  "পোল্যান্ড",
  "মালয়েশিয়া",
  "সাইপ্রাস",
  "গ্রীস",
  "জাপান",
  "দক্ষিণ কোরিয়া",
];

const touristCountries = [
  "থাইল্যান্ড",
  "সিঙ্গাপুর",
  "মালয়েশিয়া",
  "দুবাই",
  "তুরস্ক",
  "ইন্দোনেশিয়া (বালি)",
  "মালদ্বীপ",
  "ভিয়েতনাম",
  "আজারবাইজান",
  "শ্রীলঙ্কা",
  "জাপান",
  "দক্ষিণ কোরিয়া",
  "চীন",
  "ভারত",
  "মিশর",
  "কাতার",
  "যুক্তরাজ্য",
  "যুক্তরাষ্ট্র",
  "কানাডা",
  "অস্ট্রেলিয়া",
];

// const whatsappLink =
//   "https://wa.me/8801977005581?text=আসসালামু আলাইকুম, আমি আপনার ভিসা সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই।";

const VisaServices = () => {
  return (
    <section className="bg-gradient-to-b from-white via-red-50/30 to-yellow-50/40 py-12 rounded-2xl  mt-12">
      <div className="mx-auto w-full px-4">

        {/* Heading */}

        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            🌍 আন্তর্জাতিক ভিসা সেবা
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-5xl">
            শিক্ষা ও ভ্রমণের জন্য
            <span className="block text-red-600">
              বিশ্বস্ত ভিসা প্রসেসিং সেবা
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            বিদেশে উচ্চশিক্ষা, ট্যুরিস্ট ভিসা, ইউনিভার্সিটি
            অ্যাডমিশন, ইনভাইটেশন, অ্যাকোমোডেশন এবং
            সম্পূর্ণ ভিসা প্রসেসিং সেবা প্রদান করা হয়।
          </p>
        </div>

        {/* Education */}

        <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm">

          <div className="mb-6 flex items-center gap-3 border-b border-red-100 pb-4">

            <div className="rounded-full bg-red-100 p-3 text-red-600">
              <FaGraduationCap size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Education Visa
              </h3>

              <p className="text-gray-500">
                যেসব দেশের জন্য Education Visa করা হয়
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            {educationCountries.map((country) => (
              <span
                key={country}
                className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                {country}
              </span>
            ))}

          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-red-600 bg-red-50 p-5">

            <h4 className="font-bold text-red-700">
              📢 বিশেষ বিজ্ঞপ্তি
            </h4>

            <p className="mt-3 leading-8 text-gray-700">
              উপরোক্ত দেশসমূহসহ বিশ্বের বিভিন্ন দেশের{" "}
              <span className="font-semibold text-red-600">
                Education Visa, University Admission,
                Offer Letter, Scholarship, SOP,
                Documentation, Embassy File Preparation
              </span>{" "}
              এবং সম্পূর্ণ{" "}
              <span className="font-semibold">
                Student Visa Processing
              </span>{" "}
              করা হয়।
            </p>

          </div>

        </div>

        {/* Tourist */}

        <div className="mt-10 rounded-3xl border border-yellow-200 bg-white p-8 shadow-sm">

          <div className="mb-6 flex items-center gap-3 border-b border-yellow-200 pb-4">

            <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
              <FaPlaneDeparture size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Tourist Visa
              </h3>

              <p className="text-gray-500">
                জনপ্রিয় Tourist Destination
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            {touristCountries.map((country) => (
              <span
                key={country}
                className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-white"
              >
                {country}
              </span>
            ))}

          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-5">

            <h4 className="font-bold text-yellow-700">
              📢 বিশেষ বিজ্ঞপ্তি
            </h4>

            <p className="mt-3 leading-8 text-gray-700">
              এছাড়াও বিশ্বের{" "}
              <span className="font-semibold text-yellow-700">
                সকল দেশের Tourist Visa,
                Invitation Letter,
                Hotel Booking,
                Accommodation,
                Flight Reservation,
                Travel Insurance
              </span>{" "}
              এবং সম্পূর্ণ{" "}
              <span className="font-semibold">
                Tourist Visa Processing
              </span>{" "}
              করা হয়।
            </p>

          </div>

        </div>

        {/* Contact */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-8 text-center text-white">

          <h3 className="text-2xl font-bold">
            বিস্তারিত জানতে যোগাযোগ করুন
          </h3>

          <p className="mt-3 text-red-100">
            আমাদের অভিজ্ঞ টিম আপনার সকল প্রশ্নের উত্তর দিতে প্রস্তুত।
          </p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
  <a
    href="https://wa.me/8801977005581"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-red-600 transition hover:scale-105"
  >
    <FaWhatsapp className="text-2xl text-green-500" />
    +880 1977-005581
  </a>

  <a
    href="https://wa.me/8801977005582"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-red-600 transition hover:scale-105"
  >
    <FaWhatsapp className="text-2xl text-green-500" />
    +880 1977-005582
  </a>

  <a
    href="https://wa.me/8801977005583"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-red-600 transition hover:scale-105"
  >
    <FaWhatsapp className="text-2xl text-green-500" />
    +880 1977-005583
  </a>
</div>

        </div>

      </div>
    </section>
  );
};

export default VisaServices;