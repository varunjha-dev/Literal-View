import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

// Initialize GoogleGenerativeAI with the API key
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Get the Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
