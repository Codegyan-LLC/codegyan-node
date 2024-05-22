# Codegyan Node API Library

[![NPM version](https://img.shields.io/npm/v/codegyan)](https://npmjs.org/package/codegyan)
![npm downloads](https://img.shields.io/npm/dt/codegyan)
![npm collaborators](https://img.shields.io/npm/collaborators/codegyan)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)


This library provides convenient access to the Codegyan REST API from TypeScript or JavaScript.

To learn how to use the Codegyan API, check out our and [Documentation](https://developer.codegyan.in/docs).

## Installation

You can install PHP Compiler Node via npm or yarn:

```bash
# via npm
npm install codegyan

# via yarn
yarn add codegyan
```

## Usage
Before using the Pakage, you need to obtain an API key and client ID from Codegyan. Follow these steps to get your API credentials:

1. **Sign Up/Login**: If you don't have an account, sign up for a [Codegyan account](https://codegyan.in/account/signup.php). If you already have an account, log in to your dashboard.

2. **Get Credentials**: Once logged in, navigate to the [Developer Console](https://developer.codegyan.in/) or API settings in your account dashboard. Here, you will find your API key and client ID. Copy these credentials and use them when initializing the Pakage in your code.

Here's an example of how to initialize the npm pakage with your API key and Client ID:

```js
import { Codegyan } from 'codegyan';

const API_KEY = "<YOUR_API_KEY>";
const CLIENT_ID = "<YOUR_CLIENT_ID>";

// Initialize the Codegyan with your API key and client ID
const client = new Codegyan(API_KEY, CLIENT_ID);

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
```

Replace <YOUR_API_KEY> and <YOUR_CLIENT_ID> with your actual API key and Client ID provided by Codegyan. Pass the code you want to compile to the compile function.

## Semantic versioning

This package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:

1. Changes that only affect static types, without breaking runtime behavior.
2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals)_.
3. Changes that we do not expect to impact the vast majority of users in practice.

We take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.

We are keen for your feedback; please open an [issue](https://www.github.com/codegyan/codegyan-node/issues) with questions, bugs, or suggestions.


## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the **[MIT license](https://opensource.org/licenses/MIT)**. See the LICENSE file for details.
