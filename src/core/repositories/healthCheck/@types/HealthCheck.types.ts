export interface healthCheckDto {
    database: 'ok' | 'error';
    google_books_api: 'ok' | 'error';
    status: 'healthy' | 'unhealthy';
}
