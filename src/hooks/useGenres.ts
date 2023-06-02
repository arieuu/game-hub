import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

function useGenres() {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); // Handling cancellation

        setIsLoading(true);
        apiClients.get<FetchGenresResponse>("/genres", {signal: controller.signal})
        .then(res => {
            setGenres(res.data.results);
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

    return { genres, error, isLoading };

}

export default useGenres;