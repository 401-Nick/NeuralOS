const readline = require('readline');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { processTextStream } = require('./text_processing');
const { interactWithLLM } = require('./llm_interaction');
const { executeLLMCommands } = require('./process_llm');

const argv = yargs(hideBin(process.argv)).argv;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Capture bot personality from CLI args
const botPersonality = argv.personality;

if (botPersonality == null || botPersonality == true) {
    console.error('No personality specified. Please specify a personality with the --personality flag. Exiting!');
    process.exit(1);
}
console.log(`Using personality: ${botPersonality}`)

async function handleInput(input) {
    const commands = processTextStream(input);
    for (const command of commands) {
        try {
            const llmResponse = await interactWithLLM(command, botPersonality);
            executeLLMCommands(llmResponse);
        } catch (error) {
            console.error(`Error interacting with LLM: ${error}`);
        }
    }
}

console.log("thought-to-text interface. Enter your thoughts below. Press Ctrl+C to exit.")
rl.on('line', handleInput);
