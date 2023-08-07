import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/APIClient";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {

    const queryObject = useQuery({
        queryKey: ["platforms"],

        queryFn: apiClient.getAll,

        staleTime: 24 * 60 * 60 * 1000, // 24 hours to go stale, this data doesn't change much 

        // Provide initial data
        initialData: { count: platforms.length, results: platforms, next: null }

    })

    return {data: queryObject.data, isLoading: queryObject.isLoading, error: queryObject.error}

    // return {data: platforms, isLoading: false, error: null}
};

export default usePlatforms;