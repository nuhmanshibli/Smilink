import { Heart, BookOpen, Users2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Smilink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges between compassion and education in God's Own Country
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a vision to make quality education accessible to every child in Kerala, Smilink operates at the intersection of hope and opportunity. We believe that education is not just a right but the foundation for breaking cycles of poverty and building prosperous communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our organization works closely with underprivileged communities across Kerala, providing educational resources, mentorship, and holistic support to children who dare to dream. From the backwaters of Alappuzha to the hills of Wayanad, we're committed to ensuring no child is left behind.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Rooted in Kerala's rich tradition of social reform and educational excellence, Smilink carries forward the legacy of leaders who believed in the transformative power of knowledge.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Education support in Kerala"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600">
              Every child deserves care, dignity, and the chance to flourish
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-600">
              Quality learning experiences that unlock potential
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Users2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              Building stronger Kerala through collective action
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              Striving for the highest standards in everything we do
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
