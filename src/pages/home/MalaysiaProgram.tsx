import {
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
      <div className="overflow-hidden rounded-[30px] border border-amber-200 bg-white shadow-2xl">
        {/* ================= HEADER ================= */}

        <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-8 text-white">
          {/* Decorative Blur */}
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-yellow-300/20 blur-3xl"></div>

          <div className="relative flex items-center justify-between gap-5">
            {/* Malaysia Flag */}
            {/* <div className="shrink-0">
              <img
                src="https://flagcdn.com/w160/my.png"
                alt="Malaysia Flag"
                className="h-16 w-16 rounded-full border-4 border-white bg-white object-cover shadow-2xl md:h-20 md:w-20"
              />
            </div> */}

            {/* Title */}
            <div className="flex-1 text-center">
              <h2 className="text-3xl font-black tracking-wide md:text-5xl">
                মালয়েশিয়া
              </h2>

              <p className="mt-2 text-base font-semibold text-white/95 md:text-2xl">
                Masters & PhD Program
              </p>
            </div>

            {/* Petronas Twin Towers */}
            <div className="shrink-0">
              <img
                src="https://flagcdn.com/w160/my.png"
                alt="Malaysia Flag"
                className="h-16 w-16 rounded-lg border-4 border-white bg-white object-cover shadow-2xl md:h-20 md:w-20"
              />
            </div>
          </div>
        </div>

        {/* ================= BODY ================= */}

        <div className="space-y-8 p-6">
          {/* Intro */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">
            <h3 className="text-2xl font-black text-orange-600">
              🎓 মাস্টার্স ও পিএইচডি ভর্তি চলছে
            </h3>

            <p className="mt-5 text-[17px] leading-8 text-gray-700">
              মালয়েশিয়ার স্বনামধন্য বিশ্ববিদ্যালয়গুলোতে
              <span className="font-bold text-orange-600">
                {" "}
                সর্বনিম্ন ৫,০০০ – ৮,০০০ RM{" "}
              </span>
              টিউশন ফিতে আন্তর্জাতিক মানের
              <span className="font-semibold">
                {" "}
                Masters ও PhD Program
              </span>
              -এ আবেদন করার সুযোগ।
            </p>
          </div>

          {/* Eligibility + Image */}

          <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
            {/* Left */}
            <div className="flex-1">
              <h3 className="mb-6 text-2xl font-black text-slate-800">
                আবেদনের যোগ্যতা
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-4">
                  <FaGraduationCap className="mt-1 h-6 w-6 shrink-0 text-orange-500" />

                  <p className="leading-7 text-gray-700">
                    সর্বনিম্ন Bachelor's Degree সম্পন্ন হতে হবে।
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-4">
                  <FaUniversity className="mt-1 h-6 w-6 shrink-0 text-orange-500" />

                  <p className="leading-7 text-gray-700">
                    IELTS বাধ্যতামূলক নয়  
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-4">
                  <FaPassport className="mt-1 h-6 w-6 shrink-0 text-orange-500" />

                  <p className="leading-7 text-gray-700">
                    ব্যাংক সাপোর্ট প্রয়োজন নেই।
                  </p>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-4">
                  <FaGlobeAsia className="mt-1 h-6 w-6 shrink-0 text-orange-500" />

                  <p className="leading-7 text-gray-700">
                    ১০০% Admission ও Visa Processing Support প্রদান
                    করা হবে।
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}

            <div className="w-full shrink-0 lg:w-[380px]">
              <img
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=400&q=8"
                alt="Students Studying"
                className="h-[420px] w-full rounded-[30px] object-cover shadow-2xl transition duration-500 hover:scale-[1.03]"
              />
              {/* <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Students Studying"
                className="h-[420px] w-full rounded-[30px] object-cover shadow-2xl transition duration-500 hover:scale-[1.03]"
              /> */}
            </div>
          </div>
                    {/* ================= SUBJECTS ================= */}
 
  <h2 className="mt-3 text-3xl font-black text-slate-800 md:text-4xl">
    বিষয়সমূহ
  </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
  {subjects.map((subject) => (
    <div
      key={subject}
      className="group flex min-h-[72px] items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-4 text-center font-semibold leading-6 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:shadow-xl"
    >
      <span>{subject}</span>
    </div>
  ))}
</div>

          {/* ================= CTA ================= */}

          <a
            href="https://wa.me/8801977005581?text=আসসালামু%20আলাইকুম,%20আমি%20মালয়েশিয়ার%20Masters%20%26%20PhD%20Program%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-5 text-center text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            🚀 এখনই WhatsApp করুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default MalaysiaProgram;