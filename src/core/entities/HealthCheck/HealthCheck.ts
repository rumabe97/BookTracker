export interface HealthCheckProps {
    database: 'ok' | 'error';
    googleBooksApi: 'ok' | 'error';
    status: 'healthy' | 'unhealthy';
}

export class HealthCheck {
    database: 'ok' | 'error';
    googleBooksApi: 'ok' | 'error';
    status: 'healthy' | 'unhealthy';

    constructor(healthCheck: HealthCheckProps) {
        this.database = healthCheck.database;
        this.googleBooksApi = healthCheck.googleBooksApi;
        this.status = healthCheck.status;
    }
}
