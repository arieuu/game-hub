import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/APIClient";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {

    const queryObject = useQuery({
        queryKey: ["platforms"],

        queryFn: apiClient.getAll,

        staleTime: ms("24h"), // 24 hours to go stale, this data doesn't change much 

        // Provide initial data
        initialData: { count: platforms.length, results: platforms, next: null }

    })

    return {data: queryObject.data, isLoading: queryObject.isLoading, error: queryObject.error}

    // return {data: platforms, isLoading: false, error: null}
};

export default usePlatforms;