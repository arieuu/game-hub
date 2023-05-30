// Creating a custom hook to get list of games
// We do everything then return a games object with the results and an error object with any error

import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

export interface Game {
    id: number,
    name: string,
    background_image: string
}

function useGames() {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController(); // Handling cancellation

        apiClients.get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then(res => setGames(res.data.results))

        .catch(err => {
            if (err instanceof CanceledError) return; // Clean up in case of cancelled
            setError(err.message)
        });

        // Returning a clean up function
        return () => controller.abort();
    }, []);

    return { games, error };

}

export default useGames;