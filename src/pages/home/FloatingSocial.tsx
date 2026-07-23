import { FaFacebookF, FaWhatsapp, FaViber } from "react-icons/fa";

const whatsappLink =
  "https://wa.me/8801977005581?text=আসসালামু আলাইকুম, আমি আপনার স্টাডি প্রোগ্রাম সম্পর্কে জানতে চাই।";

const facebookLink =
  "https://www.facebook.com/profile.php?id=61580335493258";

const imoLink = "https://imo.im/01977005581";

const viberLink = "viber://chat?number=%2B8801977005581";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
     
        {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl sm:h-16 sm:w-16"
      >
        <FaWhatsapp className="text-xl sm:text-3xl" />

        <span className="absolute inset-0 animate-ping rounded-full border border-green-300 opacity-70"></span>
      </a>
      {/* Facebook */}
      <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
      >
        <FaFacebookF className="text-lg sm:text-2xl" />

        <span className="absolute inset-0 animate-ping rounded-full border border-blue-400 opacity-70"></span>
      </a>

      {/* IMO */}
      <a
        href={imoLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="IMO"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvClENVFUPqwWkCrPLEvzeepaVcFunnVyG6kgHukDgFA&s=10"
          alt="IMO"
          className="h-6 w-6 object-contain sm:h-8 sm:w-8"
        />

        <span className="absolute inset-0 animate-ping rounded-full border border-sky-400 opacity-70"></span>
      </a>

      {/* Viber */}
      <a
        href={viberLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Viber"
        className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#7360F2] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14"
      >
        <FaViber className="text-lg sm:text-2xl" />

        <span className="absolute inset-0 animate-ping rounded-full border border-purple-300 opacity-70"></span>
      </a>

    
    </div>
  );
};

export default FloatingSocial;