import {HealthCheck} from "../../entities/HealthCheck";
import {HealthCheckRepository} from "../../repositories/healthCheck";

export async function getHealth(): Promise<HealthCheck> {
    const healthCheck = await HealthCheckRepository.healthCheck();

    return new HealthCheck({
        googleBooksApi: healthCheck.google_books_api,
        ...healthCheck
    })
}
