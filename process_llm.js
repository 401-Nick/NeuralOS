function executeLLMCommands(llmResponse) {
    console.log("Executing LLM commands");
    const content = llmResponse[0]["candidates"][0]["content"];
    console.log(`LLM: ${content}`);
}

module.exports = { executeLLMCommands };
