import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

// A generic custom hook to fetch data

interface FetchResponse<T> {
    count: number;
    results: T[];
}

function useData<T>(endpoint: string) {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); // Handling cancellation

        setIsLoading(true);
        apiClients.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
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
    }, []);

    return { data, error, isLoading };

}

export default useData;