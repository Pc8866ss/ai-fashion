
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { AdminSettings, AiProvider } from '../types';

interface AdminContextType {
  settings: AdminSettings;
  setSettings: React.Dispatch<React.SetStateAction<AdminSettings>>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const defaultPrompt = `You are an expert fashion stylist. Based on the following user profile, generate three distinct outfit recommendations.
User profile:
- Gender: {gender}
- Age: {age}
- Style preferences: {styles}

For each recommendation, provide a creative name for the outfit, a detailed description, specific styling tips, and a list of individual clothing items as an array of strings.
Ensure your response is a valid JSON array of objects, where each object has keys: "name", "description", "styling_tips", and "products".`;

const initialSettings: AdminSettings = {
  aiProvider: AiProvider.Gemini,
  geminiApiKey: process.env.API_KEY || '',
  promptTemplate: defaultPrompt,
};

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AdminSettings>(initialSettings);

  return (
    <AdminContext.Provider value={{ settings, setSettings }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
