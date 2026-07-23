import {
  FaGraduationCap,
  FaUniversity,
  FaPassport,
  FaGlobeAsia,
} from "react-icons/fa";

const countries = [
  {
    id: 2,
    country: "গ্রীস",
    flag: "https://flagcdn.com/w80/gr.png",
    program: "Honours & Masters Program",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
    accent: "text-blue-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

graduation:
  "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে।",
    ielts: "সর্বনিম্ন IELTS ৫.৫ স্কোর প্রয়োজন।",
    bank: "ব্যাংক সাপোর্ট প্রয়োজন।",
    visa: "১০০% ভিসা প্রসেসিং সাপোর্ট প্রদান করা হবে।",
  },

  {
    id: 1,
    country: "সাইপ্রাস",
    flag: "https://flagcdn.com/w80/cy.png",
    program: "Honours & Masters Program",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    bg: "bg-red-600",
    hover: "hover:bg-red-700",
    accent: "text-red-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

graduation:
  "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে।",
    ielts: "সর্বনিম্ন IELTS ৫.০ স্কোর প্রয়োজন।",
    bank: "ব্যাংক সাপোর্ট প্রয়োজন নেই।",
    visa: "১০০% ভিসা প্রসেসিং সাপোর্ট প্রদান করা হবে।",
  },

  {
    id: 3,
    country: "চেক রিপাবলিক",
    flag: "https://flagcdn.com/w80/cz.png",
    program: "Honours & Masters Program",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
    bg: "bg-emerald-600",
    hover: "hover:bg-emerald-700",
    accent: "text-emerald-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

    ielts: "IELTS প্রয়োজন নেই।",
    bank: "ব্যাংক সাপোর্ট।",
    graduation:
      "Undergraduate অথবা Graduate শিক্ষার্থীরা আবেদন করতে পারবেন।",

    visa:   "ডকুমেন্ট Legalization ও Attestation-এর সম্পূর্ণ সাপোর্ট প্রদান করা হবে।",
  },
];
const StudyPrograms = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {countries.map((item) => {
        const whatsappLink = `https://wa.me/8801977005581?text=${encodeURIComponent(
          `আসসালামু আলাইকুম, আমি ${item.country} এর ${item.program} সম্পর্কে বিস্তারিত জানতে চাই।`
        )}`;

        return (
          <div
            key={item.id}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Header */}

    <div
  className={`${item.bg} px-5 py-6 sm:px-8 sm:py-8 text-white`}
>
  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
    <img
      src={item.flag}
      alt={item.country}
      className="h-14 w-14 rounded-xl border-4 border-white object-cover shadow-xl sm:h-16 sm:w-16 md:h-20 md:w-20"
    />

    <div className="text-center sm:text-left">
      <h2 className="text-3xl font-black tracking-wide sm:text-4xl md:text-5xl">
        {item.country}
      </h2>

      <p className="mt-2 text-base font-semibold opacity-95 sm:text-lg md:text-2xl">
        {item.program}
      </p>
    </div>
  </div>
</div>

            {/* Body */}

            <div className="flex flex-1 flex-col p-6">
              <div className="rounded-2xl bg-yellow-50 p-5">
                <h3 className={`text-2xl font-extrabold   ${item.accent}`}>
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-gray-700">
                  {item.description}
                </p>
              </div>


{/* Country Image */}

<div className="my-6 overflow-hidden rounded-2xl">
  <img
    src={item.image}
    alt={item.country}
    className="h-52 w-full object-cover transition duration-500 hover:scale-110"
  />
</div>

              {/* Requirements */}

              <div className="mt-6 flex-1">
                <h3 className="mb-4 text-xl font-bold text-slate-800">
                  আবেদনের যোগ্যতা
                </h3>

 <div className="space-y-5">
  {item.graduation && (
    <div className="flex items-start gap-3">
      <FaGraduationCap
        className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
      />

      <p className="leading-7 text-gray-700">
        {item.graduation}
      </p>
    </div>
  )}

  {item.ielts && (
    <div className="flex items-start gap-3">
      <FaUniversity
        className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
      />

      <p className="leading-7 text-gray-700">
        {item.ielts}
      </p>
    </div>
  )}

  {item.bank && (
    <div className="flex items-start gap-3">
      <FaPassport
        className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
      />

      <p className="leading-7 text-gray-700">
        {item.bank}
      </p>
    </div>
  )}

 
  {item.visa && (
    <div className="flex items-start gap-3">
      <FaGlobeAsia
        className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
      />

      <p className="leading-7 text-gray-700">
        {item.visa}
      </p>
    </div>
  )}
</div>


              </div>

              {/* Button */}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-xl py-4 text-center text-lg font-bold text-white transition duration-300 hover:scale-[1.03] ${item.bg} ${item.hover}`}
              >
                এখনই WhatsApp করুন
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudyPrograms;