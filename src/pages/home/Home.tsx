 

const netherlandsSubjects = [
  "ম্যানেজমেন্ট",
  "বিজনেস অ্যাডমিনিস্ট্রেশন",
  "কম্পিউটার সায়েন্স",
  "ইনফরমেশন টেকনোলজি",
];

const cyprusSubjects = [
  "ম্যানেজমেন্ট",
  "বিজনেস",
  "হসপিটালিটি",
  "সফটওয়্যার ইঞ্জিনিয়ারিং",
];

const whatsappNumber = "8801977005581";
const facebookPageUrl = "https://www.facebook.com/profile.php?id=61580335493258";

const ContactButtons = () => {
  const waLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95 sm:text-base"
      >
        <span className="text-lg">💬</span>
        WhatsApp
      </a>

      <a
        href={facebookPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95 sm:text-base"
      >
        <span className="text-lg">📘</span>
        Facebook
      </a>
    </div>
  );
};

const ProgramCard = ({
  flag,
  title,
  color,
  subjects,
}) => {
  const isRed = color === "red";

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border bg-white/90 p-5 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8 ${
        isRed ? "border-red-200" : "border-blue-200"
      }`}
    >
      <div
        className={`absolute -top-10 h-40 w-40 rounded-full blur-3xl sm:h-48 sm:w-48 ${
          isRed ? "-right-10 bg-red-100" : "-left-10 bg-blue-100"
        }`}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-center gap-3 sm:gap-4">
          <div className="text-5xl sm:text-6xl">{flag}</div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
            <p className={`mt-1 text-sm font-semibold sm:text-lg ${isRed ? "text-red-600" : "text-blue-600"}`}>
              Masters & PhD ভর্তি চলছে
            </p>
          </div>
        </div>

        <div className={`rounded-2xl border-l-4 p-4 sm:p-5 ${isRed ? "border-red-600 bg-red-50" : "border-blue-600 bg-blue-50"}`}>
          <h3 className={`text-xl font-extrabold sm:text-2xl ${isRed ? "text-red-700" : "text-blue-700"}`}>
            🎓 সর্বনিম্ন টিউশন ফি মাত্র
          </h3>

          <div className={`mt-3 text-4xl font-black sm:text-5xl ${isRed ? "text-red-600" : "text-blue-600"}`}>
            ৫,০০০ RM
          </div>

          <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
            মাস্টার্স এবং পিএইচডি প্রোগ্রামে{" "}
            <span className={`font-bold ${isRed ? "text-red-600" : "text-blue-600"}`}>
              মাত্র ৫,০০০ RM
            </span>{" "}
            টিউশন ফি থেকে আবেদন করা যাচ্ছে।
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          <h4 className="mb-4 text-xl font-bold text-slate-800 sm:text-2xl">
            আবেদনযোগ্য বিষয়সমূহ
          </h4>

          <div className="grid grid-cols-1 gap-3 xs:grid-cols-2">
            {subjects.map((subject) => (
              <div
                key={subject}
                className={`rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition sm:text-base ${
                  isRed ? "hover:bg-red-600 hover:text-white" : "hover:bg-blue-600 hover:text-white"
                }`}
              >
                {subject}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500 sm:text-sm">
          Masters & PhD Program
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-white to-rose-50 px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-7xl items-center">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <ProgramCard
            flag="🇳🇱"
            title="নেদারল্যান্ডস"
            color="red"
            subjects={netherlandsSubjects}
          />

          <ProgramCard
            flag="🇨🇾"
            title="সাইপ্রাস"
            color="blue"
            subjects={cyprusSubjects}
          />
        </div>
      </div>

      <ContactButtons />
    </main>
  );
}