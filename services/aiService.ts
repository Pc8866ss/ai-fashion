
import { GoogleGenAI, Type } from "@google/genai";
import { UserPreferences, AdminSettings, AiProvider, Outfit, Recommendation } from '../types';

const generateMockRecommendations = (): Recommendation[] => {
    return [
        {
            outfit: {
                name: "Urban Explorer (Mock)",
                description: "A comfortable and stylish outfit perfect for city adventures. This look combines practicality with modern trends.",
                styling_tips: "Pair with white sneakers and a minimalist backpack. Add sunglasses for a cool, effortless vibe.",
                products: ["Black Hoodie", "Cargo Pants", "High-top Sneakers"]
            },
            imageUrl: "https://picsum.photos/seed/urban/600/800"
        },
        {
            outfit: {
                name: "Casual Friday (Mock)",
                description: "A relaxed yet professional outfit for the end of the work week. Smart-casual at its best.",
                styling_tips: "Wear with loafers or clean leather sneakers. A classic watch completes this sophisticated look.",
                products: ["Navy Blue Chinos", "White Oxford Shirt", "Brown Loafers"]
            },
            imageUrl: "https://picsum.photos/seed/casual/600/800"
        },
        {
            outfit: {
                name: "Weekend Getaway (Mock)",
                description: "An easy-going and versatile outfit ideal for a short trip. It's all about comfort without sacrificing style.",
                styling_tips: "Layer with a denim jacket or a light cardigan. A canvas tote bag is a practical and stylish accessory.",
                products: ["Linen Shirt", "Beige Shorts", "Espadrilles"]
            },
            imageUrl: "https://picsum.photos/seed/weekend/600/800"
        }
    ];
};


const getGeminiRecommendations = async (preferences: UserPreferences, settings: AdminSettings): Promise<Recommendation[]> => {
    if (!settings.geminiApiKey) {
        throw new Error("Gemini API key is not configured.");
    }
    const ai = new GoogleGenAI({ apiKey: settings.geminiApiKey });

    const prompt = settings.promptTemplate
        .replace('{gender}', preferences.gender || 'Not specified')
        .replace('{age}', preferences.age?.toString() || 'Not specified')
        .replace('{styles}', preferences.styles.join(', ') || 'Any');

    const responseSchema = {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                styling_tips: { type: Type.STRING },
                products: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                },
            },
            required: ["name", "description", "styling_tips", "products"],
        },
    };

    try {
        const result = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: responseSchema,
            },
        });
        
        const responseText = result.text.trim();
        const outfits: Outfit[] = JSON.parse(responseText);

        return outfits.map((outfit, index) => ({
            outfit,
            imageUrl: `https://picsum.photos/seed/${outfit.name.replace(/\s/g, '')}${index}/600/800`
        }));
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get recommendations from Gemini. Please check your API key and prompt configuration.");
    }
};

export const getFashionRecommendations = async (
    preferences: UserPreferences,
    settings: AdminSettings
): Promise<Recommendation[]> => {
    switch (settings.aiProvider) {
        case AiProvider.Gemini:
            return getGeminiRecommendations(preferences, settings);
        case AiProvider.Grok:
        case AiProvider.IBM:
        case AiProvider.HuggingFace:
            // Return mock data for other providers
            return generateMockRecommendations();
        default:
            throw new Error("Unsupported AI provider.");
    }
};
