interface FetchOptions extends RequestInit {
    headers?: HeadersInit_;
}

const {API_AUTH = 'dev'} = process.env;

export const authFetch = async (url: string, options: FetchOptions = {}) => {
    const headers = {
        ...options.headers,
        Authorization: API_AUTH ? `${API_AUTH}` : '',
    };

    return fetch(url, {
        ...options,
        headers,
    });
};
