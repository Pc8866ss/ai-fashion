
import React from 'react';
import { Recommendation } from '../../types';

interface ResultsDisplayProps {
  recommendations: Recommendation[];
  onReset: () => void;
}

const ShopLink: React.FC<{ store: string; product: string }> = ({ store, product }) => {
    const encodedProduct = encodeURIComponent(product);
    let url = '';
    switch (store.toLowerCase()) {
        case 'amazon':
            url = `https://www.amazon.in/s?k=${encodedProduct}`;
            break;
        case 'flipkart':
            url = `https://www.flipkart.com/search?q=${encodedProduct}`;
            break;
        case 'myntra':
            url = `https://www.myntra.com/search?q=${encodedProduct}`;
            break;
        default:
            return null;
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
            {store}
        </a>
    );
};


const OutfitCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={recommendation.imageUrl} alt={recommendation.outfit.name} className="w-full h-80 object-cover"/>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{recommendation.outfit.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{recommendation.outfit.description}</p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Styling Tips:</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{recommendation.outfit.styling_tips}</p>

            {recommendation.outfit.products && recommendation.outfit.products.length > 0 && (
                <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Shop The Look:</h4>
                    <ul className="space-y-3">
                        {recommendation.outfit.products.map((product, index) => (
                            <li key={index} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                                <p className="font-medium text-gray-700 dark:text-gray-300">{product}</p>
                                <div className="flex items-center space-x-3 mt-1.5">
                                    <ShopLink store="Amazon" product={product} />
                                    <span className="text-gray-300 dark:text-gray-500">|</span>
                                    <ShopLink store="Flipkart" product={product} />
                                    <span className="text-gray-300 dark:text-gray-500">|</span>
                                    <ShopLink store="Myntra" product={product} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
);


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ recommendations, onReset }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Your Personalized Style Board</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">Here are a few looks our AI stylist curated just for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
        {recommendations.map((rec, index) => (
          <OutfitCard key={index} recommendation={rec} />
        ))}
      </div>
      
      <button
        onClick={onReset}
        className="mt-12 px-10 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
      >
        Start Over
      </button>
    </div>
  );
};

export default ResultsDisplay;
