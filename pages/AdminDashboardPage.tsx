
import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { AiProvider } from '../types';

const AdminDashboardPage: React.FC = () => {
  const { settings, setSettings } = useAdmin();

  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prev => ({ ...prev, aiProvider: e.target.value as AiProvider }));
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, geminiApiKey: e.target.value }));
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSettings(prev => ({ ...prev, promptTemplate: e.target.value }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Admin Dashboard</h1>

      <div className="space-y-12">
        {/* AI Configuration Section */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">AI Configuration</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="ai-provider" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                AI Provider
              </label>
              <select
                id="ai-provider"
                value={settings.aiProvider}
                onChange={handleProviderChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                {Object.values(AiProvider).map(provider => (
                  <option key={provider} value={provider}>{provider}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Gemini API Key
              </label>
              <input
                type="password"
                id="api-key"
                value={settings.geminiApiKey}
                onChange={handleApiKeyChange}
                placeholder="Enter your Gemini API Key"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
               <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                The API key is managed locally and not stored on any server.
              </p>
            </div>

            <div>
              <label htmlFor="prompt-template" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                AI Prompt Template
              </label>
              <textarea
                id="prompt-template"
                rows={10}
                value={settings.promptTemplate}
                onChange={handlePromptChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 font-mono text-xs"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Use {'{gender}'}, {'{age}'}, and {'{styles}'} as placeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Theme Customization Section (Placeholder) */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Theme & Customization</h2>
            <p className="text-gray-600 dark:text-gray-400">
                Full theme and content management controls are planned for a future update. For now, you can toggle between light and dark mode using the icon in the header.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
