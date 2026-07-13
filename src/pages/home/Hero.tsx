import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 pb-16 "
    >
      {/* Background Blur */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-300/20 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <HeroLeft />

        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
