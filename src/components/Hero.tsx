import { MessageCircle, Users } from 'lucide-react';

interface HeroProps {
  onVolunteerClick: () => void;
}

export default function Hero({ onVolunteerClick }: HeroProps) {
  const whatsappNumber = '917356978601';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
   <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen flex items-center">
  <nav className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm h-32 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/IMG_7358.PNG"
          alt="Smilink Logo"
          className="h-60 w-auto object-contain"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        <button
          onClick={onVolunteerClick}
          className="flex items-center space-x-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          <Users className="w-5 h-5" />
          <span>Volunteer</span>
        </button>
      </div>
    </div>
  </nav>


      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Kerala's
              <span className="text-emerald-600"> Future</span> Through Education
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A small link to a big smile. Smilink is dedicated to transforming lives through quality education and compassionate support across Kerala.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Support Our Cause
              </a>
              <button
                onClick={onVolunteerClick}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Join as Volunteer
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Children in Kerala classroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">1000+</p>
              <p className="text-emerald-100">Lives Touched</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
