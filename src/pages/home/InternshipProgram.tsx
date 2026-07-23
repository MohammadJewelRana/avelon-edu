import {
  FaArrowRight,
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaGlobe,
  FaUserGraduate,
} from "react-icons/fa";

const internshipCountries = [
  {
    id: 1,
    country: "হংকং",
    title: "হোটেল ম্যানেজমেন্ট ইন্টার্নশিপ",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    duration: "৬ মাস",
    salary: "৮,৫০০ HKD / মাস",
    requirement: "চলমান (Running) শিক্ষার্থী",
    gap: "সর্বোচ্চ ৩ বছরের স্টাডি গ্যাপ গ্রহণযোগ্য",
    visa: "ইন্টার্নশিপ ভিসা",
  },
  {
    id: 2,
    country: "থাইল্যান্ড",
    title: "টিচিং ইন্টার্নশিপ",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    duration: "৬ - ১২ মাস",
    salary: "২,৫০০ - ৩,৫০০ Thai Baht / মাস",
    requirement: "গ্র্যাজুয়েশন সম্পন্ন",
    gap: "স্টাডি গ্যাপ গ্রহণযোগ্য",
    visa: "ইন্টার্নশিপ ভিসা",
  },
  {
    id: 3,
    country: "ফিজি",
    title: "হোটেল ম্যানেজমেন্ট ইন্টার্নশিপ",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    duration: "৬ - ১২ মাস",
    salary: "৭৫,০০০ - ৯০,০০০ টাকা / মাস",
    requirement: "গ্র্যাজুয়েশন সম্পন্ন",
    gap: "স্টাডি গ্যাপ গ্রহণযোগ্য",
    visa: "ইন্টার্নশিপ ভিসা",
  },
];

const InternshipProgram = () => {
  return (
    <section>
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}

        <div className="bg-gradient-to-r from-violet-600 to-indigo-700 p-6 text-white">
          <div className="flex items-center justify-center gap-4">
            <FaBriefcase className="text-4xl" />

            <div>
              <h2 className="text-3xl font-black">
                ইন্টার্নশিপ প্রোগ্রাম
              </h2>

              <p className="mt-1 text-white/90">
                আন্তর্জাতিক প্রতিষ্ঠানে Paid Internship-এর সুযোগ
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {internshipCountries.map((item) => {
            const whatsappLink = `https://wa.me/8801977005581?text=${encodeURIComponent(
              `আসসালামু আলাইকুম, আমি ${item.country} এর ${item.title} সম্পর্কে বিস্তারিত জানতে চাই।`
            )}`;

            return (
              <div
                key={item.id}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.country}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-6">
                  {/* Country */}

                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-slate-800">
                      {item.country}
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-indigo-600">
                      {item.title}
                    </p>
                  </div>

                  {/* Information */}

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-3">
                      <FaClock className="mt-1 text-indigo-600" />

                      <span>
                        <b>ইন্টার্নশিপ:</b> {item.duration}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaDollarSign className="mt-1 text-green-600" />

                      <span>
                        <b>সম্মানী:</b> {item.salary}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaUserGraduate className="mt-1 text-blue-600" />

                      <span>
                        <b>যোগ্যতা:</b> {item.requirement}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaUserGraduate className="mt-1 text-orange-500" />

                      <span>
                        <b>স্টাডি গ্যাপ:</b> {item.gap}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaGlobe className="mt-1 text-red-500" />

                      <span>
                        <b>ভিসা:</b> {item.visa}
                      </span>
                    </div>
                  </div>

                  {/* Button */}

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-green-700"
                  >
                  এখনই WhatsApp করুন
         
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternshipProgram;