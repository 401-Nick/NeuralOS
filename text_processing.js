function processTextStream(input) {
    console.log("Processing text stream")
    const regex = /<<<([^>]+)>>>/g;
    let match;
    const commands = [];

    while ((match = regex.exec(input)) !== null) {
        console.log(`Found the command ${match[1]}`);
        commands.push(match[1]);
    }

    console.log(`Found ${commands.length} commands`);
    return commands;
}

module.exports = { processTextStream };
