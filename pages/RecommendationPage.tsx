
import React, { useState } from 'react';
import { UserPreferences, Recommendation } from '../types';
import { useAdmin } from '../context/AdminContext';
import { getFashionRecommendations } from '../services/aiService';

import GenderStep from './recommendation/GenderStep';
import AgeStep from './recommendation/AgeStep';
import StyleStep from './recommendation/StyleStep';
import ResultsDisplay from './recommendation/ResultsDisplay';

type Step = 'gender' | 'age' | 'style' | 'loading' | 'results';

const RecommendationPage: React.FC = () => {
  const [step, setStep] = useState<Step>('gender');
  const [preferences, setPreferences] = useState<UserPreferences>({
    gender: null,
    age: null,
    styles: [],
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { settings } = useAdmin();

  const handleGenderSelect = (gender: 'Male' | 'Female' | 'Other') => {
    setPreferences((prev) => ({ ...prev, gender }));
    setStep('age');
  };

  const handleAgeSubmit = (age: number) => {
    setPreferences((prev) => ({ ...prev, age }));
    setStep('style');
  };

  const handleStyleSubmit = async (styles: string[]) => {
    const finalPreferences = { ...preferences, styles };
    setPreferences(finalPreferences);
    setStep('loading');
    setError(null);
    try {
      const results = await getFashionRecommendations(finalPreferences, settings);
      setRecommendations(results);
      setStep('results');
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
      setStep('style'); // Go back to the style step on error
    }
  };
  
  const handleReset = () => {
    setPreferences({ gender: null, age: null, styles: [] });
    setRecommendations([]);
    setError(null);
    setStep('gender');
  };

  const renderStep = () => {
    switch (step) {
      case 'gender':
        return <GenderStep onSelect={handleGenderSelect} />;
      case 'age':
        return <AgeStep onSubmit={handleAgeSubmit} />;
      case 'style':
        return <StyleStep onSubmit={handleStyleSubmit} error={error} />;
      case 'loading':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Generating your style...</h2>
            <p className="text-gray-600 dark:text-gray-400">Our AI stylist is curating the perfect looks for you. This might take a moment.</p>
            <div className="mt-8 flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          </div>
        );
      case 'results':
        return <ResultsDisplay recommendations={recommendations} onReset={handleReset} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
};

export default RecommendationPage;
