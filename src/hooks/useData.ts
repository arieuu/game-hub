import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

// A generic custom hook to fetch data

interface FetchResponse<T> {
    count: number;
    results: T[];
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); // Handling cancellation

        setIsLoading(true);
        apiClients.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then(res => {
            setData(res.data.results);
            setIsLoading(false); // Updating state to hide loading cards, the content is ready to be displayed.
        })
        
        .catch(err => {
            if (err instanceof CanceledError) return; // Clean up in case of cancelled
            setError(err.message);
            setIsLoading(false); // Stop loading cards from showing
        });

        // Returning a clean up function
        return () => controller.abort();
    }, deps ? [...deps] : []); // we need to check if it's truthy because we can't spread and array that might be null

    return { data, error, isLoading };

}

export default useData;