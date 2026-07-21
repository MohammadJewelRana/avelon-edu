import InternshipProgram from "./InternshipProgram";
import MalaysiaProgram from "./MalaysiaProgram";
import StudyPrograms from "./StudyPrograms";

const Home = () => {
  return (
    <div className="  bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto w-full">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900">
            উচ্চশিক্ষা ও ইন্টার্নশিপ প্রোগ্রাম
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            বিশ্বের বিভিন্ন দেশে কম খরচে মাস্টার্স, পিএইচডি এবং ইন্টার্নশিপের
            সুযোগ।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <StudyPrograms />

          <MalaysiaProgram />

          <InternshipProgram />
        </div>
      </div>
    </div>
  );
};

export default Home;
