interface VolunteerRegistration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  age: number | null;
  location: string;
  occupation: string;
  skills: string;
  availability: string;
  motivation: string;
  previous_experience: string;
  created_at: string;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const VOLUNTEER_KEY = 'smilink_volunteer_registrations';
const CONTACT_KEY = 'smilink_contact_submissions';

export const saveVolunteerRegistration = (data: Omit<VolunteerRegistration, 'id' | 'created_at'>): void => {
  try {
    const registrations = getVolunteerRegistrations();
    const newRegistration: VolunteerRegistration = {
      ...data,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
    };
    registrations.push(newRegistration);
    localStorage.setItem(VOLUNTEER_KEY, JSON.stringify(registrations));
  } catch (error) {
    console.error('Error saving volunteer registration:', error);
    throw error;
  }
};

export const getVolunteerRegistrations = (): VolunteerRegistration[] => {
  try {
    const data = localStorage.getItem(VOLUNTEER_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading volunteer registrations:', error);
    return [];
  }
};

export const saveContactSubmission = (data: Omit<ContactSubmission, 'id' | 'created_at'>): void => {
  try {
    const submissions = getContactSubmissions();
    const newSubmission: ContactSubmission = {
      ...data,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(submissions));
  } catch (error) {
    console.error('Error saving contact submission:', error);
    throw error;
  }
};

export const getContactSubmissions = (): ContactSubmission[] => {
  try {
    const data = localStorage.getItem(CONTACT_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading contact submissions:', error);
    return [];
  }
};
