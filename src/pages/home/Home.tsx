import FloatingSocial from "./FloatingSocial";
import InternshipProgram from "./InternshipProgram";
import MalaysiaProgram from "./MalaysiaProgram";
import StudyPrograms from "./StudyPrograms";
import VisaServices from "./VisaServices";
import logo from "../../assets/logo.jpg"

const Home = () => {
  return (
    <div className="    px-4 py-8 md:px-8">
      <div className="mx-auto w-full">
        <div className="mb-10 text-center">
 
   <div className="inline-flex items-center   px-4 py-2">
  <img
    src={logo}
    alt="Avelon Edu & Travels"
    className="h-24 w-auto rounded-md object-contain"
  />
</div>
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
        <div className=" ">
        {/* <div className="grid grid-cols-1 gap-8 xl:grid-cols-3"> */}
          <StudyPrograms />
<div className="py-12">

          <MalaysiaProgram />
</div>

           <InternshipProgram />
          <FloatingSocial /> 

          <VisaServices/>
        </div>
      </div>
    </div>
  );
};

export default Home;
