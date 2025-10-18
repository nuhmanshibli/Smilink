import { Target, Lightbulb, GraduationCap } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Creating pathways to prosperity through education and empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-emerald-100 leading-relaxed">
              To provide underprivileged children across Kerala with access to quality education, learning resources, and mentorship opportunities that empower them to achieve their full potential and break the cycle of poverty.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-emerald-100 leading-relaxed">
              A Kerala where every child, regardless of their economic background, has equal access to transformative education and the opportunity to contribute meaningfully to society's progress and prosperity.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-emerald-100 leading-relaxed">
              We pledge to maintain the highest standards of transparency, accountability, and compassion in all our initiatives, ensuring that every rupee donated creates maximum impact in a child's educational journey.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Education Matters</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-emerald-100 leading-relaxed">
                Kerala has a proud legacy as a leader in education and social development in India. However, many children from economically disadvantaged families still struggle to access quality educational resources and opportunities.
              </p>
              <p className="text-emerald-100 leading-relaxed">
                Education is the most powerful tool for social transformation. It opens doors to better employment, improves health outcomes, reduces poverty, and creates a ripple effect that benefits entire communities for generations.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-emerald-100 leading-relaxed">
                At Smilink, we believe in holistic education that nurtures not just academic excellence but also creativity, critical thinking, emotional intelligence, and social responsibility.
              </p>
              <p className="text-emerald-100 leading-relaxed">
                Through our programs, we aim to create confident, capable individuals who will become tomorrow's leaders, innovators, and changemakers, carrying forward Kerala's rich tradition of social progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
