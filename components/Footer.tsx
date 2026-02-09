
import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">StyleAI</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Your personal AI fashion stylist.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><TwitterIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><FacebookIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><InstagramIcon /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><LinkedInIcon /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/recommendations" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Get Styled</Link></li>
              <li><Link to="/about" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">Get the latest fashion trends and updates.</p>
            <form className="mt-4 flex flex-col sm:flex-row items-start sm:items-center">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" />
              <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} StyleAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
