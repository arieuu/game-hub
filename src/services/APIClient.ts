import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: String | null;
    results: T[];
}

// Creating an axios instance with custom configuration

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "669698f8868344188dccd2a0d008b224" // My rawg api key
    }
})


class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    // Arrow functions don't have their own "this" entity
    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
                            .then(res => res.data)
    }

}

export default APIClient;