# NeuralOS: An Abstract Thought-to-Text Operating System

## Overview

NeuralOS is a conceptual project that aims to bridge the gap between the human mind and digital interfaces, leveraging the capabilities of Large Language Models (LLM) like Google's PaLM. 

The system allows for a seamless thought-to-text interface that interprets and executes commands encapsulated within special characters (`<<<` and `>>>`). 

This repository provides a basic command-line interface (CLI) as an abstract example of what the future could hold in terms of thought-driven computing.

## Important 

This project is not intended to serve as a standalone operating system. It is purely a conceptual demonstration to explore the capabilities and future possibilities of thought-to-text technology. The current implementation is built using JavaScript for demonstration purposes and to serve as a low-level abstract example.

## Features

- **Thought-to-Text Input**: The core idea is to eventually replace the CLI with a neural interface that can convert thoughts into text commands. 

- **Modular Personalities**: Choose from different LLM personalities for a customized user experience.

- **Real-Time LLM Interactions**: Instantly execute commands and get responses via an LLM.

## Conceptual Layers

The system is conceptually divided into two layers:

- **Level 1 Commands**: Pure function-like interactions. Example: `<<<what time is it?>>>` These can be easily output to a paired device (e.g. a smartwatch) or read aloud by a text-to-speech.

- **Level 2 Commands**: These are more complex, state-changing commands (Not implemented yet).

## Examples
To encode a command, encapsulate it within <<< and >>>. Commands can be part of a continuous thought stream, and the system is designed to pick them out for processing. Below is a comprehensive example:

```bash
ImtiredImalsohungryIwonderwhattimeitis<<<whattimeisit>>>itsalmostlunchtime<<<whataregoodplacestoeatnearme?>>>
```

In this example, the user has two commands embedded within their thought stream:
```bash
<<<whattimeisit>>>: The user is wondering what time it is.

<<<whataregoodplacestoeatnearme?>>>: The user is thinking about lunch and wants suggestions for places to eat nearby.
```
The system would identify these commands and process them as follows:
```bash
For <<<whattimeisit>>>, the system could send a notification to the user's phone, stating the current time.

For <<<whataregoodplacestoeatnearme?>>>, the system could provide a list of nearby restaurants either through a notification or by some other means.
```
This showcases the system's capability to understand and act upon embedded commands within a continuous stream of thoughts.



## Prerequisites

- Node.js
- An API key for Google's PaLM API

## Installation

1. Clone the repository
2. Install dependencies
3. Run the application with a specified personality

```bash
git clone https://github.com/yourusername/NeuralOS.git

cd NeuralOS

npm install

node index.js --personality Paul
```

## Safety Measures

- The LLM is prompted not to execute or assist in executing commands that are illegal, harmful, or violate ethical guidelines.
- Don't plug this into your brain. It's not ready yet :p


## Future Scope

### Thought-to-Text Interfaces

- As Neuralink and similar technologies advance, the transition from CLI to a direct thought-to-text interface could become a reality. This would allow users to interact with digital interfaces using thoughts alone, revolutionizing human-computer interaction.

### Advanced Command Handling

- The system could be extended to handle a broader range of commands, perform more complex tasks, and even integrate with other APIs or systems.

## Contributing

Contributions are welcome. Please submit a PR or create an issue to discuss proposed changes.