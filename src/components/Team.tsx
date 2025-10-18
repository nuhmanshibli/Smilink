import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'KC Musthafa',
      role: 'Founder & Chairman',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEbRwn-YjKWi-pqCGd1xNlGrSw5osYoy-SBkmjJD5lpNNH9MQRmoziv8_mx3IXCAbKsw&usqp=CAU?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former educator with 25 years of experience in Kerala\'s education sector',
    },
    {
      name: 'Meera Nair',
      role: 'Executive Director',
      image: 'https://images.pexels.com/photos/3765140/pexels-photo-3765140.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Social work professional dedicated to educational equity',
    },
    {
      name: 'Arjun Menon',
      role: 'Program Coordinator',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Youth development specialist with grassroots experience',
    },
    {
      name: 'Shalini Joseph',
      role: 'Community Outreach Lead',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Community organizer building partnerships across Kerala',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate individuals committed to transforming education in Kerala
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <button className="p-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4 text-emerald-600" />
                  </button>
                  <button className="p-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 text-emerald-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate educators, volunteers, and partners who share our vision of educational equity in Kerala.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
