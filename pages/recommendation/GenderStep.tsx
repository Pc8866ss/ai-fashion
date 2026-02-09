
import React from 'react';

interface GenderStepProps {
  onSelect: (gender: 'Male' | 'Female' | 'Other') => void;
}

const GenderButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-full text-center px-6 py-10 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
    >
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">{children}</span>
    </button>
);

const GenderStep: React.FC<GenderStepProps> = ({ onSelect }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Let's Get Started</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">First, select your gender identity to help us tailor your recommendations.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GenderButton onClick={() => onSelect('Male')}>Male</GenderButton>
        <GenderButton onClick={() => onSelect('Female')}>Female</GenderButton>
        <GenderButton onClick={() => onSelect('Other')}>Other</GenderButton>
      </div>
    </div>
  );
};

export default GenderStep;
