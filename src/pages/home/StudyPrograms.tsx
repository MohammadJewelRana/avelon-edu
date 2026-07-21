import {
 
  FaGraduationCap,
  FaUniversity,
  FaPassport,
 
  FaGlobeAsia,
} from "react-icons/fa";

const countries = [
  {
    id: 1,
    flag: "🇨🇾",
    country: "সাইপ্রাস",
    color: "red",
    ielts: "সর্বনিম্ন IELTS ৫.০ স্কোর প্রয়োজন।",
    bank: "ব্যাংক সাপোর্ট প্রয়োজন নেই।",
  },
  {
    id: 2,
    flag: "🇬🇷",
    country: "গ্রীস",
    color: "blue",
    ielts: "সর্বনিম্ন IELTS ৫.৫ স্কোর প্রয়োজন।",
    bank: "ব্যাংক সাপোর্ট প্রয়োজন।",
  },
];
const StudyPrograms = () => {
  const whatsappLink =
    "https://wa.me/8801977005581?text=আসসালামু আলাইকুম, আমি Masters & PhD প্রোগ্রাম সম্পর্কে বিস্তারিত জানতে চাই।";

  return (
    <section className="space-y-6">
      {countries.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Header */}
          <div className={`bg-${item.color}-600 px-6 py-5 text-white`}>
            <div className="flex items-center gap-3 ">
              <span className="text-5xl">{item.flag}</span>

              <div className=" ">
                <h2 className="text-3xl font-extrabold  ">{item.country}</h2>

                <p className="text-sm  ">Masters & PhD Program</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-6 p-6">
            <div className="rounded-2xl bg-yellow-50 p-5">
              <h3 className="text-xl font-bold text-red-600">
                🎓 মাস্টার্স ও পিএইচডি ভর্তি চলছে
              </h3>

              <p className="mt-3 leading-8 text-gray-700">
                খুবই স্বল্প খরচে <b>মাস্টার্স</b> এবং <b>পিএইচডি</b> প্রোগ্রামে
                আবেদন করার সুযোগ। অভিজ্ঞ পরামর্শকের মাধ্যমে সম্পূর্ণ আবেদন
                প্রক্রিয়ায় সহযোগিতা করা হবে।
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-slate-800">
                আবেদনের যোগ্যতা
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <FaGraduationCap className="mt-1 text-orange-500" />
                  <p>সর্বনিম্ন গ্র্যাজুয়েশন সম্পন্ন হলেই আবেদন করা যাবে।</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <FaUniversity className="mt-1 text-orange-500" />
                  <p>{item.ielts}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <FaPassport className="mt-1 text-orange-500" />
                  <p>{item.bank}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <FaGlobeAsia className="mt-1 text-orange-500" />
                  <p>১০০% ভিসা প্রসেসিং সাপোর্ট প্রদান করা হবে।</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full rounded-xl bg-${item.color}-600 py-4 text-center text-lg font-bold text-white transition hover:bg-${item.color}-700`}
            >
              এখনই আবেদন করুন
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StudyPrograms;
