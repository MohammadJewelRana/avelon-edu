import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const whatsappLink =
  "https://wa.me/8801712345678?text=আসসালামু আলাইকুম, আমি আপনার স্টাডি প্রোগ্রাম সম্পর্কে জানতে চাই।";

const facebookLink = "https://www.facebook.com/profile.php?id=61580335493258";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
      {/* Facebook */}
      <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:animate-none"
      >
        <FaFacebookF size={24} />

        <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping"></span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:animate-none"
      >
        <FaWhatsapp size={32} />

        <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping"></span>
      </a>
    </div>
  );
};

export default FloatingSocial;