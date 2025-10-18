import { BookText, Laptop, Users, Gift } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: BookText,
      title: 'Scholarship Program',
      description: 'Financial assistance for meritorious students from economically disadvantaged backgrounds to pursue their education without financial barriers.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Laptop,
      title: 'Digital Learning Initiative',
      description: 'Providing laptops, tablets, and internet connectivity to students, bridging the digital divide and enabling access to online educational resources.',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-teal-50',
    },
    {
      icon: Users,
      title: 'Mentorship & Tutoring',
      description: 'One-on-one and group mentoring sessions with qualified educators and professionals to provide academic support and career guidance.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-amber-50',
    },
    {
      icon: Gift,
      title: 'Learning Resources',
      description: 'Distribution of textbooks, notebooks, uniforms, and essential school supplies to ensure students have everything they need to succeed.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to support students at every stage of their educational journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${program.bgColor} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
              >
                <div className={`bg-gradient-to-br ${program.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How Our Programs Work
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Identify & Assess</h4>
              <p className="text-gray-600">
                We work with schools and communities to identify students who need support and assess their specific educational needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Provide Support</h4>
              <p className="text-gray-600">
                Students receive tailored assistance including financial aid, learning materials, technology, and mentorship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h4>
              <p className="text-gray-600">
                Continuous monitoring and evaluation ensure students are progressing academically and receiving the support they need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
