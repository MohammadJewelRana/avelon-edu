import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaGlobe,
  FaUserGraduate,
} from "react-icons/fa";

const internshipCountries = [
  {
    id: 1,
    flag: "🇯🇵",
    country: "জাপান",
    duration: "৬ - ১২ মাস",
    salary: "৮০,০০০ - ১,২০,০০০ টাকা (আনুমানিক)",
    requirement: "ডিপ্লোমা / গ্র্যাজুয়েশন",
    visa: "ইন্টার্নশিপ ভিসা",
    color: "from-red-500 to-red-600",
  },
  {
    id: 2,
    flag: "🇩🇪",
    country: "জার্মানি",
    duration: "৬ - ১২ মাস",
    salary: "১,২০,০০০ - ২,০০,০০০ টাকা (আনুমানিক)",
    requirement: "গ্র্যাজুয়েশন",
    visa: "ইন্টার্নশিপ ভিসা",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    flag: "🇰🇷",
    country: "দক্ষিণ কোরিয়া",
    duration: "৬ - ১২ মাস",
    salary: "৯০,০০০ - ১,৫০,০০০ টাকা (আনুমানিক)",
    requirement: "গ্র্যাজুয়েশন",
    visa: "ইন্টার্নশিপ ভিসা",
    color: "from-blue-500 to-indigo-600",
  },
];

const InternshipProgram = () => {
  return (
    <section>
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-violet-600 to-indigo-700 p-6 text-white">
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-4xl" />

            <div>
              <h2 className="text-3xl font-black">
                ইন্টার্নশিপ প্রোগ্রাম
              </h2>

              <p className="mt-1 opacity-90">
                আন্তর্জাতিক প্রতিষ্ঠানে ইন্টার্নশিপের সুযোগ
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="space-y-5 p-6">

          {internshipCountries.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Country */}

              <div className="mb-4 flex items-center gap-3">
                <span className="text-5xl">{item.flag}</span>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.country}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Internship Program
                  </p>
                </div>
              </div>

              {/* Info */}

              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <FaClock className="text-indigo-600" />
                  <span>
                    <b>মেয়াদ:</b> {item.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaDollarSign className="text-green-600" />
                  <span>
                    <b>সম্ভাব্য ভাতা:</b> {item.salary}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-blue-600" />
                  <span>
                    <b>যোগ্যতা:</b> {item.requirement}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaGlobe className="text-red-500" />
                  <span>
                    <b>ভিসা:</b> {item.visa}
                  </span>
                </div>

              </div>

              {/* Benefits */}

              <div className="mt-5 rounded-xl bg-white p-4">

                <h4 className="mb-3 font-bold text-slate-800">
                  সুবিধাসমূহ
                </h4>

                <div className="space-y-2">

                  {[
                    "আন্তর্জাতিক প্রতিষ্ঠানে কাজের অভিজ্ঞতা",
                    "ক্যারিয়ার উন্নয়নের সুযোগ",
                    "ভিসা প্রসেসিং সহায়তা",
                    "ডকুমেন্ট প্রসেসিং",
                  ].map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle className="text-green-600" />

                      <span className="text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* Button */}

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-bold text-white transition hover:scale-[1.02]">
                বিস্তারিত দেখুন
                <FaArrowRight />
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default InternshipProgram;