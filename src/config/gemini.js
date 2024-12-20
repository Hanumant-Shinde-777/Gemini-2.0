
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = 'AIzaSyA8_J0OFtHfOt38JJ3VTAIWFdz_h4gSdG4'; // Make sure this API key is secure and not exposed in production
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text()); // Correctly logs the response text
    return result.response.text(); // Return the text properly from the `result` object
  } catch (error) {
    console.error("Error in run function:", error);
    throw error; // Re-throw the error for higher-level handling if needed
  }
}

export default run;
