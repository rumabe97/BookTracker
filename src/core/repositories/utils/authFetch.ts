interface FetchOptions extends RequestInit {
    headers?: HeadersInit_;
}

const {API_AUTH = 'dev'} = process.env;

export const authFetch = async (url: string, options: FetchOptions = {}) => {
    const headers = {
        ...options.headers,
        "Content-Type": "application/json",
        Authorization: API_AUTH ? `${API_AUTH}` : '',
    };

    return fetch(url, {
        ...options,
        headers,
    });
};
