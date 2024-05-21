import { Codegyan } from '../src/Codegyan';

// Initialize the Codegyan with your API key and client ID
const client = new Codegyan('YOUR_API_KEY', 'YOUR_CLIENT_ID');

async function main() {
    // Example usage of the toolsApiClient to currency conversion

    // Example JavaScript code to compile
    const from_currency = 'USD';
    const to_currency = 'INR';
    const amount = '100';

    // Call the compile method of the CompilerApiClient with JavaScript as the language
    client.toolsApiClient.currency(from_currency, to_currency, amount)
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
