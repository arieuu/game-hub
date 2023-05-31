// Creating a custom hook to get list of games
// We do everything then return a games object with the results and an error object with any error

import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";


interface FetchGamesResponse {
    count: number,
    results: Game[]
}

export interface Platform {
    id: string;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    /*
        This is implemented like this because of a design smell of the api, each platform has an array of objs and inside a 
        platform argument with an object of type platform 
    */
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

function useGames() {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController(); // Handling cancellation

        setIsLoading(true);
        apiClients.get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then(res => {
            setGames(res.data.results);
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

    return { games, error, isLoading };

}

export default useGames;