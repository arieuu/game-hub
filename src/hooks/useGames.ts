// Creating a custom hook to get list of games
// We do everything then return a games object with the results and an error object with any error

import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/APIClient";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
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

    const useGames = () => { 
        const gameQuery = useGameQueryStore(selector => selector.gameQuery);
        
        const queryObject = useInfiniteQuery<FetchResponse<Game>, Error>({
            queryKey:["games", gameQuery],  // Anytime the gamequery changes we refetch (just like useeffect dependencies)
            queryFn: ({ pageParam = 1} /* react query will pass page number here */) => {
                return apiClient.getAll({
                    params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam,
                    }
                })
           },

           getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined;
           },
           
           staleTime: ms("24h")
        });

        return queryObject;

    }

export default useGames;