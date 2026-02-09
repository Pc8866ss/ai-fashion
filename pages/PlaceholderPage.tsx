
import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        This page is under construction. Check back soon for exciting updates!
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PlaceholderPage;
