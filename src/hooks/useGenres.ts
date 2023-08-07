// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/APIClient";
import ms from "ms";

// Using static data instead of making a request to the server everytime the pages loads.
// This improves performance and the genre list rarely changes anyway.

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// This hides the http request logic from our component

function useGenres() {
    // const genres = useData<Genre>("/genres");

    const queryObject = useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"), // 24 hours to go stale, this data doesn't change much 
        
        // We set an initial data to our cache from the local object so that we don't have to go fetch from the backend

        initialData: { count: genres.length, results: genres, next: null}

    })

    return { data: queryObject.data, isLoading: queryObject.isLoading, error: queryObject.error};
}

export default useGenres;