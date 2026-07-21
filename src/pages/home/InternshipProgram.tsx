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
    flag: "🇭🇰",
    country: "হংকং",
    title: "হোটেল ম্যানেজমেন্ট ইন্টার্নশিপ",
    duration: "৬ মাস",
    salary: "৮,৫০০ HKD / মাস",
    requirement: "চলমান (Running) শিক্ষার্থী",
    gap: "সর্বোচ্চ ৩ বছরের স্টাডি গ্যাপ গ্রহণযোগ্য",
    visa: "ইন্টার্নশিপ ভিসা",
    benefits: [
      "আন্তর্জাতিক হোটেলে কাজের সুযোগ",
      "৬ মাসের পেইড ইন্টার্নশিপ",
      "বাসস্থান সহায়তা (প্রতিষ্ঠানভেদে)",
      "ক্যারিয়ার গঠনের সুযোগ",
    ],
  },
  {
    id: 2,
    flag: "🇹🇭",
    country: "থাইল্যান্ড",
    title: "টিচিং ইন্টার্নশিপ",
    duration: "৬ - ১২ মাস",
    salary: "২,৫০০ - ৩,৫০০ Thai Baht / মাস",
    requirement: "গ্র্যাজুয়েশন সম্পন্ন",
    gap: "স্টাডি গ্যাপ গ্রহণযোগ্য",
    visa: "ইন্টার্নশিপ ভিসা",
    benefits: [
      "আন্তর্জাতিক স্কুলে কাজের সুযোগ",
      "ইংরেজি শিক্ষাদানের অভিজ্ঞতা",
      "ক্যারিয়ার উন্নয়নের সুযোগ",
      "ভিসা প্রসেসিং সহায়তা",
    ],
  },
  {
    id: 3,
    flag: "🇫🇯",
    country: "ফিজি",
    title: "হোটেল ম্যানেজমেন্ট ইন্টার্নশিপ",
    duration: "৬ - ১২ মাস",
    salary: "৭৫,০০০ - ৯০,০০০ টাকা / মাস",
    requirement: "গ্র্যাজুয়েশন সম্পন্ন",
    gap: "স্টাডি গ্যাপ গ্রহণযোগ্য",
    visa: "ইন্টার্নশিপ ভিসা",
    benefits: [
      "আন্তর্জাতিক রিসোর্টে কাজের সুযোগ",
      "হ্যান্ডস-অন ট্রেনিং",
      "থাকা ও খাবারের সুবিধা (প্রতিষ্ঠানভেদে)",
      "আন্তর্জাতিক অভিজ্ঞতা অর্জনের সুযোগ",
    ],
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
            আন্তর্জাতিক প্রতিষ্ঠানে পেইড ইন্টার্নশিপের সুযোগ
          </p>
        </div>
      </div>
    </div>

    {/* Cards */}

    <div className="space-y-5 p-6">

      {internshipCountries.map((item) => (

        <div
          key={item.id}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          {/* Country */}

          <div className="mb-5 flex items-center gap-3">

            <span className="text-5xl">{item.flag}</span>

            <div>
              <h3 className="text-2xl font-bold">
                {item.country}
              </h3>

              <p className="font-medium text-indigo-600">
                {item.title}
              </p>
            </div>

          </div>

          {/* Information */}

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <FaClock className="text-indigo-600" />

              <span>
                <b>ইন্টার্নশিপ:</b> {item.duration}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaDollarSign className="text-green-600" />

              <span>
                <b>সম্মানী:</b> {item.salary}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaUserGraduate className="text-blue-600" />

              <span>
                <b>যোগ্যতা:</b> {item.requirement}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaUserGraduate className="text-orange-500" />

              <span>
                <b>স্টাডি গ্যাপ:</b> {item.gap}
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

          {/* <div className="mt-5 rounded-xl bg-white p-4">

            <h4 className="mb-3 font-bold text-slate-800">
              সুবিধাসমূহ
            </h4>

            <div className="space-y-2">

              {item.benefits.map((benefit) => (

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

          </div> */}

          {/* WhatsApp Button */}

          <a
            href={`https://wa.me/8801977005581?text=${encodeURIComponent(
              `আসসালামু আলাইকুম, আমি ${item.country} এর ${item.title} সম্পর্কে বিস্তারিত জানতে চাই।`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-bold text-white transition duration-300 hover:scale-[1.02]"
          >
            বিস্তারিত জানুন
            <FaArrowRight />
          </a>

        </div>

      ))}

    </div>
  </div>
</section>
  );
};

export default InternshipProgram;