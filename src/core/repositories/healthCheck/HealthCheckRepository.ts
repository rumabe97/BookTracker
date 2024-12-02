import {authFetch} from "../utils/authFetch.ts";
import {healthCheckDto} from "./@types/HealthCheck.types.ts";

const {API_URL = 'https://book-tracker-api-dev.vercel.app'} = process.env;

const healthCheck = async (version: string): Promise<healthCheckDto> => {
    try {
        const params = new URLSearchParams();
        if (version) params.append('version', version);
        const response = await authFetch(`${API_URL}/healthcheck?${params.toString()}`);
        if (!response.ok) {
            throw new Error('Failed to fetch health');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to fetch health');
    }
};

export const HealthCheckRepository = {
    healthCheck
};
