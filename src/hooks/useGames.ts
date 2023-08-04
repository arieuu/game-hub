// Creating a custom hook to get list of games
// We do everything then return a games object with the results and an error object with any error

import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/APIClient";
import { Platform } from "./usePlatforms";
import APIClient from "../services/APIClient";

const apiClient = new APIClient<Game>("/games");

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
    rating_top: number;
}

    // Here we're passing query parameters so that the api will filter the request to what we want

    const useGames = (gameQuery: GameQuery) => { 
        
        const queryObject = useQuery<FetchResponse<Game>, Error>({
           queryKey:["games", gameQuery],  // Anytime the gamequery changes we refetch (just like useeffect dependencies)
           queryFn: () => {
                return apiClient.getAll({
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText
                    }
                })
           }
        }); 

        return queryObject;

    }

export default useGames;