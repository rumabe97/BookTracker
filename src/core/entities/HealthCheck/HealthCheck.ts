export interface HealthCheckProps {
    database: 'ok' | 'error';
    googleBooksApi: 'ok' | 'error';
    status: 'healthy' | 'unhealthy';
    outdated?: boolean,
    latestVersion?: string,
    downloadUrl?: string
}

export class HealthCheck {
    database: 'ok' | 'error';
    googleBooksApi: 'ok' | 'error';
    status: 'healthy' | 'unhealthy';
    outdated?: boolean;
    latestVersion?: string;
    downloadUrl?: string;

    constructor(healthCheck: HealthCheckProps) {
        this.database = healthCheck.database;
        this.googleBooksApi = healthCheck.googleBooksApi;
        this.status = healthCheck.status;
        this.outdated = healthCheck.outdated;
        this.latestVersion = healthCheck.latestVersion;
        this.downloadUrl = healthCheck.downloadUrl;
    }
}
