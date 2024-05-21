import axios, { AxiosInstance } from "axios";

/**
 * Client for interacting with the Compiler API
 */
export class CompilerApiClient {
    private axiosInstance: AxiosInstance;

    /**
     * Initializes the CompilerApiClient with the provided API key and client ID.
     * @param apiKey - The API key for authentication.
     * @param clientId - The client ID for authentication.
     */
    constructor(apiKey: string, clientId: string) {
        this.axiosInstance = axios.create({
            baseURL: "https://api.codegyan.in/v2/compiler", 
            headers: {
                "Content-Type": "application/json",
                "APIKey": apiKey,
                "ClientId": clientId
            }
        });
    }

    /**
     * Compiles the provided code in the specified language.
     * @param language - The programming language of the code.
     * @param code - The source code to compile.
     * @returns A promise that resolves with the compilation result.
     */
    compile(language: string, code: string): Promise<any> {
        return this.axiosInstance.post("/compile", { 
            lang: language, 
            code : code 
        });
    }
}
