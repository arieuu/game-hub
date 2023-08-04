import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClients from "../services/api-clients";
import { FetchResponse } from "../services/api-clients";


interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {

    const queryObject = useQuery({
        queryKey: ["platforms"],

        queryFn: () => {
            return apiClients.get<FetchResponse<Platform>>("/platforms/lists/parents")
            .then(res => res.data)
        },

        staleTime: 24 * 60 * 60 * 1000, // 24 hours to go stale, this data doesn't change much 

        // Provide initial data
        initialData: { count: platforms.length, results: platforms }

    })

    return {data: queryObject.data, isLoading: queryObject.isLoading, error: queryObject.error}

    // return {data: platforms, isLoading: false, error: null}
};

export default usePlatforms;