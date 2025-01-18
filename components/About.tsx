import React from 'react';
import Image from 'next/image';

type AboutProps = {
  name: string;
  aboutText: string;
};

export const About = ({ name, aboutText }: AboutProps) => {
  return (
    <section className="w-full mt-12">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center px-4 sm:px-0 max-w-6xl mx-auto">
        <div className="w-full sm:w-2/3 lg:w-2/3 text-center sm:text-left mb-6 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white sm:whitespace-nowrap">
            {name}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mt-2">
            Bekasi, Indonesia
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start mb-6 sm:mb-0">
          <Image
            src="/images/pfp.png"
            height={280}
            width={280}
            alt="Me and the doggo"
            className="rounded-full border-4 border-blue-600 shadow-xl"
            priority={true}
          />
        </div>
      </div>

      {/* About Text Section */}
      <div className="bg-blue-600 shadow-lg mt-8 p-6 sm:p-8 rounded-xl text-white max-w-5xl mx-auto">
        <p className="text-lg sm:text-xl">{aboutText}</p>
      </div>
    </section>
  );
};
