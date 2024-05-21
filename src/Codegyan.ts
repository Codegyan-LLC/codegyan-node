import { ToolsApiClient } from "./response/ToolsApiClient";
import { CompilerApiClient } from "./response/CompilerApiClient";

/**
 * Main client for interacting with Codegyan API.
 * 
 * This class provides access to various API clients such as ToolsApiClient and CompilerApiClient,
 * which can be used to perform various operations supported by the Codegyan API.
 */
export class Codegyan {
    /**
     * An instance of ToolsApiClient used to interact with the tools-related endpoints of the Codegyan API.
     */
    public toolsApiClient: ToolsApiClient;

    /**
     * An instance of CompilerApiClient used to interact with the compiler-related endpoints of the Codegyan API.
     */
    public compilerApiClient: CompilerApiClient;

    /**
     * Initializes the Codegyan client with the provided API key and client ID.
     * 
     * @param apiKey - The API key for authentication. This key is required to authorize requests to the Codegyan API.
     * @param clientId - The client ID for authentication. This ID is used to identify the client making the requests.
     */
    constructor(apiKey: string, clientId: string) {
        /**
         * Initializes the ToolsApiClient with the provided API key and client ID.
         * This client will be used to interact with the tools-related endpoints of the Codegyan API.
         */
        this.toolsApiClient = new ToolsApiClient(apiKey, clientId);
    
        /**
         * Initializes the CompilerApiClient with the provided API key and client ID.
         * This client will be used to interact with the compiler-related endpoints of the Codegyan API.
         */
        this.compilerApiClient = new CompilerApiClient(apiKey, clientId);
    }
}
