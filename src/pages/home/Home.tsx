import FloatingSocial from "./FloatingSocial";
import InternshipProgram from "./InternshipProgram";
import MalaysiaProgram from "./MalaysiaProgram";
import StudyPrograms from "./StudyPrograms";
import VisaServices from "./VisaServices";
import logo from "../../assets/logo.jpg";

const Home = () => {
  return (
    <main className="overflow-x-hidden ">
      <div className="mx-auto max-w-7xl px-4 pt-8 md:px-6 lg:px-8">

        {/* Hero Header */}
        <section className="mb-16 text-center">

          <img
            src={logo}
            alt="Avelon Edu & Travels"
            className="mx-auto h-24 w-auto rounded-xl object-contain shadow-sm md:h-32"
          />
 

          <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            স্বপ্নের উচ্চশিক্ষা ও
            <span className="block text-red-600">
              আন্তর্জাতিক ইন্টার্নশিপের বিশ্বস্ত ঠিকানা
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
            বিশ্বের বিভিন্ন দেশে{" "}
            <span className="font-semibold text-red-600">
              Bachelor, Masters, PhD, Internship, Student Visa
            </span>{" "}
            এবং{" "}
            <span className="font-semibold text-red-600">
              Tourist Visa
            </span>{" "}
            সংক্রান্ত সম্পূর্ণ সেবা প্রদান করা হয়। বিশ্ববিদ্যালয় নির্বাচন,
            ডকুমেন্টেশন, Admission, Visa Processing এবং পরবর্তী সকল
            গাইডলাইন এক জায়গায়।
          </p>

       
        </section>

        {/* Study Programs */}
        <section className="mb-16">
          <StudyPrograms />
        </section>

        {/* Malaysia */}
        <section className="mb-16">
          <MalaysiaProgram />
        </section>

        {/* Internship */}
        <section className="mb-16">
          <InternshipProgram />
        </section>

        {/* Visa */}
        <section className="mb-16">
          <VisaServices />
        </section>

      </div>

      {/* Floating Buttons */}
      <FloatingSocial />
    </main>
  );
};

export default Home;