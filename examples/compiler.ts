import { Codegyan } from '../src/Codegyan';

// Initialize the Codegyan with your API key and client ID
const client = new Codegyan('YOUR_API_KEY', 'YOUR_CLIENT_ID');

async function main() {
    // Example usage of the CompilerApiClient to compile code

    // Example JavaScript code to compile
    const lang = 'python';
    const code = 'print("Hello, World!")';

    // Call the compile method of the CompilerApiClient with JavaScript as the language
    client.compilerApiClient.compile(lang, code)
        .then(result => {
            // Log the compilation result
            console.log(result.data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
}

main();
