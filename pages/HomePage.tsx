
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-20 lg:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Discover Your <span className="text-indigo-600 dark:text-indigo-400">Perfect Style</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Let our AI-powered stylist create personalized fashion recommendations just for you. Effortless style is just a click away.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/recommendations"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1m-4.636-3.364l.707-.707" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Leverage cutting-edge AI to understand your unique style and preferences.</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Personalized</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Receive outfit recommendations tailored specifically to your age, gender, and taste.</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Instant</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">No more guesswork. Get instant style inspiration for any occasion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
