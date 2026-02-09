
import React, { useState } from 'react';

interface AgeStepProps {
  onSubmit: (age: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = ({ onSubmit }) => {
  const [age, setAge] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 12 || ageNum > 100) {
      setError('Please enter a valid age between 12 and 100.');
      return;
    }
    setError('');
    onSubmit(ageNum);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">How old are you?</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">This helps us suggest age-appropriate styles.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          className="w-full max-w-xs px-4 py-3 text-lg text-center bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:border-indigo-400"
          min="12"
          max="100"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="submit"
          className="mt-6 px-10 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default AgeStep;
