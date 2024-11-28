import {HealthCheck} from "../../entities/HealthCheck";
import {HealthCheckRepository} from "../../repositories/healthCheck";

export async function getHealth(version: string): Promise<HealthCheck> {
    const healthCheck = await HealthCheckRepository.healthCheck(version);

    return new HealthCheck({
        googleBooksApi: healthCheck.google_books_api,
        latestVersion: healthCheck.latest_version,
        downloadUrl: healthCheck.download_url,
        ...healthCheck
    })
}
