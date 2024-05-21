import axios, { AxiosInstance } from "axios";

/**
 * Client for interacting with the Tools API
 */
export class ToolsApiClient {
    private axiosInstance: AxiosInstance;

    /**
     * Initializes the ToolsApiClient with the provided API key and client ID.
     * @param apiKey - The API key for authentication.
     * @param clientId - The client ID for authentication.
     */
    constructor(apiKey: string, clientId: string) {
        this.axiosInstance = axios.create({
            baseURL: "https://api.codegyan.in/v1",
            headers: {
                "Content-Type": "application/json",
                "APIKey": apiKey,
                "ClientId": clientId
            }
        });
    }

    /**
        * Checks the availability of a given domain.
        *
        * @param {string} domain - The domain name to check for availability.
        * @returns {Promise<any>} - A promise that resolves to the result of the domain availability check.
        * 
    */
    domainAvailability(domain: string): Promise<any> {
        return this.axiosInstance.post("/domain-check", { 
            domain: domain 
        });
    }

    /**
        * Converts an amount from one currency to another using the Codegyan API.
        * 
        * This method sends a request to the Codegyan API to convert a specified amount from one currency
        * to another. The conversion details such as the source currency, target currency, and amount
        * are provided as parameters.
        * 
        * @param from_currency - The currency code of the source currency (e.g., 'USD' for US Dollar).
        * @param to_currency - The currency code of the target currency (e.g., 'EUR' for Euro).
        * @param amount - The amount of the source currency to be converted.
        * @returns A promise that resolves with the conversion result from the API.
    */
    currency(from_currency: string, to_currency: string, amount: string): Promise<any> {
        return this.axiosInstance.post("/currency", {
            from_currency: from_currency,
            to_currency: to_currency,
            amount: amount
        });
    }
}
