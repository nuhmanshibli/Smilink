import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/IMG_7396.PNG" alt="Smilink Logo" className="h-60 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A small link to a big smile. Empowering Kerala's future through quality education and compassionate support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-emerald-600 p-3 rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Donate Now
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Smilink. All rights reserved. Registered Charity in Kerala, India.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Kerala's children</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
