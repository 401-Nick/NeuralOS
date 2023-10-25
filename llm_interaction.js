const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const fs = require('fs');
const path = require('path');
const dotenv = require("dotenv");

dotenv.config();

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = process.env.API_KEY;

const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

async function interactWithLLM(command, personality = 'Paul') {
    // Load System Message, Role and Responsibilities, and Safety and Ethics from context_parts
    const systemMessage = fs.readFileSync(path.join(__dirname, 'context_parts', 'system_message.txt'), 'utf-8');
    const roleAndResponsibilities = fs.readFileSync(path.join(__dirname, 'context_parts', 'role_and_responsibilities.txt'), 'utf-8');
    const safetyAndEthics = fs.readFileSync(path.join(__dirname, 'context_parts', 'safety_and_ethics.txt'), 'utf-8');

    // Load Personality Profile
    let personalityProfile = '';
    try {
        personalityProfile = fs.readFileSync(path.join(__dirname, 'LLMPersonalities', personality, 'personality.txt'), 'utf-8');
    } catch (error) {
        console.error(`Could not load personality profile for ${personality}. Defaulting to Paul.`);
        personalityProfile = fs.readFileSync(path.join(__dirname, 'LLMPersonalities', 'Paul', 'personality.txt'), 'utf-8');
    }

    // Combine all context parts
    const context = `
    ${systemMessage}
    ${roleAndResponsibilities}
    ${personalityProfile}
    ${safetyAndEthics}
    `;

    const examples = [];
    const messages = [{ "content": command }];

    try {
        const result = await client.generateMessage({
            model: MODEL_NAME,
            temperature: 1,
            candidateCount: 1,
            top_k: 40,
            top_p: 0.95,
            prompt: {
                context: context,
                examples: examples,
                messages: messages,
            },
        });

        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = { interactWithLLM };
