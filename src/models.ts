// Define models/interfaces used by the API clients

/**
 * Represents the result of a code compilation
 */
export interface CompilationResult {
    status: string;
    language: string;
    output: string;
    error: string;
}

/**
 * Represents the result of a domain availability
 */
export interface DomainAvailabilityResult {
    status: string;
    domain: string;
    tld: string;
    availability: string;
}

/**
 * Generic response structure from Codegyan API
 */
export interface CodegyanResponse<T> {
    data: T;
    status: string;
}
