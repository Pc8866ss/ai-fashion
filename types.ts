
export enum AiProvider {
  Gemini = "Gemini",
  Grok = "Grok (Mock)",
  IBM = "IBM AI (Mock)",
  HuggingFace = "Hugging Face (Mock)",
}

export interface UserPreferences {
  gender: 'Male' | 'Female' | 'Other' | null;
  age: number | null;
  styles: string[];
}

export interface Outfit {
  name: string;
  description: string;
  styling_tips: string;
  products: string[];
}

export interface Recommendation {
  outfit: Outfit;
  imageUrl: string;
}

export interface AdminSettings {
  aiProvider: AiProvider;
  geminiApiKey: string;
  promptTemplate: string;
}
