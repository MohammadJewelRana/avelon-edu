import FloatingSocial from "./FloatingSocial";
import InternshipProgram from "./InternshipProgram";
import MalaysiaProgram from "./MalaysiaProgram";
import StudyPrograms from "./StudyPrograms";

const Home = () => {
  return (
    <div className="  bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto w-full">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            ✈️ Avelon Edu & Travels
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Avelon Edu & Travels
          </h1>

          <h2 className="mt-3 text-2xl font-bold text-red-600 md:text-3xl">
            স্বপ্নের উচ্চশিক্ষা ও আন্তর্জাতিক ইন্টার্নশিপের বিশ্বস্ত ঠিকানা
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            সাইপ্রাস, গ্রীস, মালয়েশিয়াসহ বিশ্বের বিভিন্ন দেশে{" "}
            <span className="font-semibold text-red-600">
              মাস্টার্স, পিএইচডি ও ইন্টার্নশিপ
            </span>{" "}
            প্রোগ্রামে কম খরচে আবেদন করুন। অভিজ্ঞ টিমের মাধ্যমে বিশ্ববিদ্যালয়
            নির্বাচন, ডকুমেন্ট প্রসেসিং, অ্যাডমিশন, ভিসা এবং সম্পূর্ণ গাইডলাইন
            একসাথে পান।
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <StudyPrograms />

          <MalaysiaProgram />

           <InternshipProgram />
          <FloatingSocial /> 
        </div>
      </div>
    </div>
  );
};

export default Home;
