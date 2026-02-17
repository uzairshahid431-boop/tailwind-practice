import React from "react";

export const Paragraph: React.FC = () => {
  return (
    <section className="w-full bg-sky-50 py-12 px-6 md:px-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Recent posts</h2>
        <button className="text-sky-600 hover:underline text-sm">
          View all
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Making a design system from scratch
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            12 Feb 2026 <span className="mx-2">|</span> Design, Pattern
          </p>
          <p className="text-gray-600 text-sm">
            A Software Engineer uses design patterns to create structured,
            reusable, and maintainable software solutions. These patterns 
            provide proven ways to solve common development problems, 
            improving code quality, scalability, and flexibility. By applying 
            the right design patterns, engineers build systems that are easier
            to understand, extend, and maintain.
          </p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Creating pixel perfect icons in Figma
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            13 Feb 2026 <span className="mx-2">|</span> Figma, Icon Design
          </p>
          <p className="text-gray-600 text-sm">
            Figma is a powerful design tool used to create modern UI/UX 
            layouts, prototypes, and digital products with precision and 
            collaboration. It enables designers to craft clean, scalable 
            interfaces and custom icons that enhance user experience and 
            visual consistency.
          </p>
        </div>
      </div>
    </section>
  );
};
