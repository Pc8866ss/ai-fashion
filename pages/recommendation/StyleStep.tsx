
import React, { useState } from 'react';

interface StyleStepProps {
  onSubmit: (styles: string[]) => void;
  error: string | null;
}

const stylesOptions = [
  'Casual', 'Formal', 'Streetwear', 'Vintage',
  'Minimalist', 'Bohemian', 'Sporty', 'Preppy',
  'Grunge', 'Business Casual', 'Artistic', 'Trendy'
];

const StyleChip: React.FC<{ label: string; isSelected: boolean; onToggle: () => void; }> = ({ label, isSelected, onToggle }) => (
  <button
    onClick={onToggle}
    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
      isSelected
        ? 'bg-indigo-600 border-indigo-600 text-white'
        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-500 dark:hover:border-indigo-400'
    }`}
  >
    {label}
  </button>
);


const StyleStep: React.FC<StyleStepProps> = ({ onSubmit, error }) => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style)
        ? prev.filter((s) => s !== style)
        : [...prev, style]
    );
  };

  const handleSubmit = () => {
    onSubmit(selectedStyles);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">What's your vibe?</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Choose a few styles you like. You can also skip this step.</p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {stylesOptions.map((style) => (
          <StyleChip
            key={style}
            label={style}
            isSelected={selectedStyles.includes(style)}
            onToggle={() => toggleStyle(style)}
          />
        ))}
      </div>

      {error && <p className="text-red-500 mt-4 mb-4 text-center">{error}</p>}

      <button
        onClick={handleSubmit}
        className="px-10 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      >
        Generate My Style
      </button>
    </div>
  );
};

export default StyleStep;
