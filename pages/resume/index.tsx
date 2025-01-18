import Layout from '@components/layouts/PageLayout';
import React from 'react';

const Hero = () => (
  <section className="relative text-center py-24 bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-800 dark:to-blue-800 text-white rounded-lg">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
        Journey of a Curious Technophile 💻✨
      </h1>
      <p className="text-lg sm:text-xl font-light text-gray-200 dark:text-gray-300 mb-6">
        From crafting SEO strategies to developing mobile apps, my passion for technology drives me
        to constantly innovate and grow. Join me on my professional journey!
      </p>
      <p className="text-lg sm:text-xl font-light text-gray-200 dark:text-gray-300 mb-6">
        My mission? To create impactful digital experiences and solve complex problems, all while
        learning and evolving in the ever-changing tech landscape.
      </p>
      <a
        href="#work-experience"
        className="inline-block bg-indigo-700 dark:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-800 dark:hover:bg-indigo-500 transition-transform transform hover:scale-105"
      >
        Explore My Story
      </a>
    </div>
  </section>
);

// Work Experience Section with Storytelling Approach
const ExperienceTimeline = () => (
  <section id="work-experience">
    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
      Key Experiences & Adventures
    </h2>
    <div className="relative border-l-4 border-indigo-500 dark:border-indigo-400 ml-6">
      {jobs.map((job, index) => (
        <div key={index} className="mb-8 ml-8">
          <div className="absolute w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full -left-2"></div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{job.title}</h3>
            <p className="text-md text-gray-600 dark:text-gray-400">
              {job.company} • {job.location} • {job.date}
            </p>
            {job.story && <p className="mt-3 text-gray-700 dark:text-gray-300">{job.story}</p>}
            {job.accomplishments && (
              <ul className="list-disc ml-6 mt-3 text-gray-700 dark:text-gray-300 space-y-2">
                {job.accomplishments.map((accomplishment, idx) => (
                  <li key={idx}>{accomplishment}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Experience Data with Narrative Style
const jobs = [
  {
    title: 'SEO Specialist',
    company: 'PT. Indo Koala Remittance (Jack & Transfez)',
    location: 'Bekasi, Indonesia',
    date: 'Sep 2024 – Present',
    story:
      'Stepping into the world of SEO, my journey began by recovering from a significant website issue. I quickly optimized content, rebuilt strategies, and helped drive growth even in the face of challenges. It’s been a real learning experience, and I’m still growing every day!',
    accomplishments: [],
  },
  {
    title: 'HTML Writer Intern',
    company: 'PT. Dialogika Persona Indonesia',
    location: 'Jakarta, Indonesia',
    date: 'Mar 2024 – Jun 2024',
    story:
      'I embarked on this internship to dive deep into SEO and web development. My work ranged from creating responsive webpages to crafting SEO-optimized blog posts. One of the highlights was seeing some of my optimized posts rank on the first page of Google!',
    accomplishments: [
      'Wrote and optimized 14 blog articles, achieving high rankings on Google.',
      'Collaborated with designers and developers on a team project to migrate the site to WordPress.',
    ],
  },
  {
    title: 'Android Developer',
    company: 'CV. Gama Putra Santosa (GPS)',
    location: 'Bekasi, Indonesia',
    date: 'Oct 2023 – Jan 2024',
    story:
      'As an Android Developer, I had the exciting challenge of creating a Point-of-Sale (POS) app. It was my first time working in mobile development, and the experience taught me a lot about app architecture and API integration.',
    accomplishments: [
      'Developed frontend features of a Warung Soto POS app using Java and XML.',
      'Integrated APIs for order processing and user authentication.',
    ],
  },
  {
    title: 'Lab Assistant',
    company: 'Informatika Universitas Ahmad Dahlan',
    location: 'Yogyakarta, Indonesia',
    date: 'Mar 2023 – Jul 2023',
    story:
      'This was my first step into teaching and mentoring others. I helped students navigate complex database queries and data visualization tasks. It was a fulfilling role that also strengthened my own knowledge.',
    accomplishments: [
      'Assisted students with lab exercises in database and data visualization courses.',
      'Organized student registration and managed lab sessions.',
    ],
  },
];

// Education Section with Personal Touch
const EducationTimeline = () => (
  <section id="education">
    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
      My Academic Foundation
    </h2>
    <div>
      {education.map((edu, index) => (
        <div key={index} className="mb-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
            <p className="text-md text-gray-600 dark:text-gray-400">
              {edu.degree} • {edu.graduationYear}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Education Data with Personal Touch
const education = [
  {
    institution: 'Universitas Ahmad Dahlan',
    degree: 'Bachelor of Computer Science (Informatics Engineering)',
    graduationYear: 'Class of 2024',
  },
];

// Contact CTA (Make it more inviting)
const ContactCTA = () => (
  <section className="text-center py-16 bg-indigo-600 dark:bg-indigo-800 text-white rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4">Ready to Create Something Amazing? 💡</h2>
    <a
      href="mailto:aryadifah@gmail.com"
      className="mt-4 inline-block bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-300 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      📧 Get in Touch
    </a>
  </section>
);

// Main Experience Page (Creative and Narrative Focus)
export default function Experience() {
  return (
    <Layout description="Professional Experience" title="Experience">
      <div className="space-y-8">
        <Hero />
        <ExperienceTimeline />
        <EducationTimeline />
        <ContactCTA />
      </div>
    </Layout>
  );
}
