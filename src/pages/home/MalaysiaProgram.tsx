import {
  FaCheckCircle,
  FaGraduationCap,
  FaUniversity,
  FaPassport,
  FaBookOpen,
  FaGlobeAsia,
} from "react-icons/fa";

const subjects = [
  "ম্যানেজমেন্ট",
  "বিজনেস অ্যাডমিনিস্ট্রেশন",
  "কম্পিউটার সায়েন্স",
  "ইনফরমেশন টেকনোলজি",
  "ডাটা সায়েন্স",
  "এআই (Artificial Intelligence)",
  "সিভিল ইঞ্জিনিয়ারিং",
  "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",
  "মেকানিক্যাল ইঞ্জিনিয়ারিং",
  "ফাইন্যান্স",
  "মার্কেটিং",
  "পাবলিক হেলথ",
];

const MalaysiaProgram = () => {
  return (
    <section>
      <div className="overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Header */}

        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
          <div className="flex items-center gap-4">
            <span className="text-6xl">🇲🇾</span>

            <div>
              <h2 className="text-3xl font-black">মালয়েশিয়া</h2>

              <p className="mt-1 text-sm opacity-90">Masters & PhD Program</p>
            </div>
          </div>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          <div className="rounded-2xl bg-amber-50 p-5">
            <h3 className="text-2xl font-bold text-orange-600">
              🎓 মাস্টার্স ও পিএইচডি ভর্তি চলছে
            </h3>

            <p className="mt-4 leading-8 text-gray-700">
              মালয়েশিয়ার স্বনামধন্য বিশ্ববিদ্যালয়গুলোতে
              <span className="font-bold text-orange-600">
                {" "}
                সর্বনিম্ন ৫,০০০ - ৮,০০০ RM{" "}
              </span>
              টিউশন ফিতে মাস্টার্স ও পিএইচডি প্রোগ্রামে আবেদন করার সুযোগ।
            </p>
          </div>

          {/* Highlight */}

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
                <p>IELTS প্রয়োজন নেই।</p>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <FaPassport className="mt-1 text-orange-500" />
                <p>ব্যাংক সাপোর্ট প্রয়োজন নেই।</p>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <FaGlobeAsia className="mt-1 text-orange-500" />
                <p>১০০% ভিসা প্রসেসিং সাপোর্ট প্রদান করা হবে।</p>
              </div>
            </div>
          </div>

          {/* Subjects */}

          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
              <FaBookOpen className="text-orange-500" />
              জনপ্রিয় বিষয়সমূহ
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-center font-medium transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>

          {/* Service */}

    
          <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-lg font-bold text-white transition hover:scale-[1.02]">
            এখনই আবেদন করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default MalaysiaProgram;
