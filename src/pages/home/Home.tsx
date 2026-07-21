 const netherlandsSubjects = [
  "ম্যানেজমেন্ট",
  "বিজনেস অ্যাডমিনিস্ট্রেশন",
  "কম্পিউটার সায়েন্স",
  "ইনফরমেশন টেকনোলজি",
  "সিভিল ইঞ্জিনিয়ারিং",
  "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",
  "মেকানিক্যাল ইঞ্জিনিয়ারিং",
  "পাবলিক হেলথ",
  "ডাটা সায়েন্স",
  "এআই (Artificial Intelligence)",
  "ফাইন্যান্স",
  "মার্কেটিং",
];

const cyprusSubjects = [
  "ম্যানেজমেন্ট",
  "বিজনেস",
  "হসপিটালিটি",
  "ট্যুরিজম",
  "কম্পিউটার সায়েন্স",
  "সফটওয়্যার ইঞ্জিনিয়ারিং",
  "সাইবার সিকিউরিটি",
  "ডাটা অ্যানালিটিক্স",
  "এডুকেশন",
  "সাইকোলজি",
  "ফাইন্যান্স",
  "অ্যাকাউন্টিং",
];

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-white to-red-50 flex items-center justify-center p-5 md:p-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Netherlands */}

        <div className="relative overflow-hidden rounded-3xl border border-red-200 bg-white p-8 shadow-2xl">

          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-red-100 blur-3xl"></div>

          <div className="relative z-10">

            <div className="mb-6 flex items-center gap-4">

              <div className="text-6xl">🇳🇱</div>

              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  নেদারল্যান্ডস
                </h2>

                <p className="mt-1 text-lg font-medium text-red-600">
                  Masters & PhD ভর্তি চলছে
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-5">

              <h3 className="text-2xl font-extrabold text-red-700">
                🎓 সর্বনিম্ন টিউশন ফি মাত্র
              </h3>

              <div className="mt-3 text-5xl font-black text-red-600">
                ৫,০০০ RM
              </div>

              <p className="mt-3 text-lg leading-8 text-gray-700">
                মাস্টার্স এবং পিএইচডি প্রোগ্রামে
                <span className="font-bold text-red-600">
                  {" "}
                  মাত্র ৫,০০০ RM
                </span>{" "}
                টিউশন ফি থেকে আবেদন করা যাচ্ছে।
              </p>
            </div>

            <div className="mt-8">

              <h4 className="mb-4 text-2xl font-bold text-slate-800">
                আবেদনযোগ্য বিষয়সমূহ
              </h4>

              <div className="grid grid-cols-2 gap-3">

                {netherlandsSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="rounded-xl bg-slate-100 px-4 py-3 font-semibold text-slate-700 transition hover:bg-red-600 hover:text-white"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Cyprus */}

        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-white p-8 shadow-2xl">

          <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-blue-100 blur-3xl"></div>

          <div className="relative z-10">

            <div className="mb-6 flex items-center gap-4">

              <div className="text-6xl">🇨🇾</div>

              <div>
                <h2 className="text-4xl font-black text-slate-900">
                  সাইপ্রাস
                </h2>

                <p className="mt-1 text-lg font-medium text-blue-600">
                  Masters & PhD ভর্তি চলছে
                </p>
              </div>
            </div>

            <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5">

              <h3 className="text-2xl font-extrabold text-blue-700">
                🎓 সর্বনিম্ন টিউশন ফি মাত্র
              </h3>

              <div className="mt-3 text-5xl font-black text-blue-600">
                ৫,০০০ RM
              </div>

              <p className="mt-3 text-lg leading-8 text-gray-700">
                মাস্টার্স এবং পিএইচডি প্রোগ্রামে
                <span className="font-bold text-blue-600">
                  {" "}
                  মাত্র ৫,০০০ RM
                </span>{" "}
                টিউশন ফি থেকে আবেদন করা যাচ্ছে।
              </p>
            </div>

            <div className="mt-8">

              <h4 className="mb-4 text-2xl font-bold text-slate-800">
                আবেদনযোগ্য বিষয়সমূহ
              </h4>

              <div className="grid grid-cols-2 gap-3">

                {cyprusSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="rounded-xl bg-slate-100 px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-white"
                  >
                    {subject}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;