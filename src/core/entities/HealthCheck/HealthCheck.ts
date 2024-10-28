export interface HealthCheckProps {
    database: string;
    googleBooksApi: string;
    status: string;
}

export class HealthCheck {
    database: string;
    googleBooksApi: string;
    status: string;

    constructor(healthCheck: HealthCheckProps) {
        this.database = healthCheck.database;
        this.googleBooksApi = healthCheck.googleBooksApi;
        this.status = healthCheck.status;
    }
}
