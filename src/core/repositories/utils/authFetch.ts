interface FetchOptions extends RequestInit {
    headers?: HeadersInit_;
}

const {API_AUTH = 'c4911c5a-2ae5-415f-a9bb-d4a1f7e897a3'} = process.env;

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
