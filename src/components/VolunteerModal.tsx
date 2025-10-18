import { useState } from 'react';
import { X, Users, CheckCircle } from 'lucide-react';
import { saveVolunteerRegistration } from '../utils/localStorage';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    occupation: '',
    skills: '',
    availability: '',
    motivation: '',
    previous_experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      saveVolunteerRegistration({
        ...formData,
        age: formData.age ? parseInt(formData.age) : null,
      });

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          age: '',
          location: '',
          occupation: '',
          skills: '',
          availability: '',
          motivation: '',
          previous_experience: '',
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Volunteer Registration</h2>
              <p className="text-emerald-100 text-sm">Join us in making a difference</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-600">
              Your volunteer registration has been received. We'll contact you soon with more details about how you can contribute to our mission.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="16"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Your age"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                  City/District *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., Kochi, Thrissur"
                />
              </div>

              <div>
                <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., Student, Teacher"
                />
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
                Skills & Expertise
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="e.g., Teaching, Counseling, Technology"
              />
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                Availability *
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                <option value="">Select your availability</option>
                <option value="weekends">Weekends Only</option>
                <option value="weekdays">Weekdays</option>
                <option value="flexible">Flexible Schedule</option>
                <option value="occasional">Occasional/Events</option>
              </select>
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                Why do you want to volunteer with Smilink?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us what motivates you to volunteer..."
              />
            </div>

            <div>
              <label htmlFor="previous_experience" className="block text-sm font-semibold text-gray-700 mb-2">
                Previous Volunteering Experience
              </label>
              <textarea
                id="previous_experience"
                name="previous_experience"
                rows={3}
                value={formData.previous_experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                placeholder="Any relevant experience (optional)"
              />
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Sorry, there was an error submitting your registration. Please try again.
              </div>
            )}

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
