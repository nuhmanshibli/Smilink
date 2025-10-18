import { TrendingUp, Award, School, Smile } from 'lucide-react';

export default function Impact() {
  const stats = [
    {
      icon: Smile,
      number: '1,000+',
      label: 'Students Supported',
      description: 'Children receiving educational assistance',
    },
    {
      icon: School,
      number: '50+',
      label: 'Partner Schools',
      description: 'Institutions across Kerala we work with',
    },
    {
      icon: Award,
      number: '200+',
      label: 'Scholarships',
      description: 'Awarded to deserving students',
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Success Rate',
      description: 'Students showing improved performance',
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable change, meaningful impact across Kerala's educational landscape
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-10 md:p-16 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Success Stories from Kerala
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-emerald-100 italic mb-4 leading-relaxed">
                "Smilink's scholarship helped me complete my engineering degree. Today, I work at a leading tech company and support my family. I'm forever grateful for the opportunity they gave me."
              </p>
              <p className="font-semibold">— Ananya, Software Engineer</p>
              <p className="text-sm text-emerald-200">Kochi, Kerala</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-emerald-100 italic mb-4 leading-relaxed">
                "The mentorship program changed my perspective on education. My mentor guided me through difficult subjects and helped me believe in myself. I scored 98% in my board exams!"
              </p>
              <p className="font-semibold">— Rahul, Class 12 Student</p>
              <p className="text-sm text-emerald-200">Thrissur, Kerala</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-emerald-100 italic mb-4 leading-relaxed">
                "When we couldn't afford a laptop for online classes during the pandemic, Smilink provided one. My daughter never missed a class and maintained her grades. Thank you for believing in her future."
              </p>
              <p className="font-semibold">— Lakshmi, Parent</p>
              <p className="text-sm text-emerald-200">Alappuzha, Kerala</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-emerald-100 italic mb-4 leading-relaxed">
                "As a teacher, I've seen firsthand how Smilink's programs transform students' lives. The resources and support they provide make a real difference in underprivileged communities."
              </p>
              <p className="font-semibold">— Priya Teacher, Educator</p>
              <p className="text-sm text-emerald-200">Wayanad, Kerala</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
