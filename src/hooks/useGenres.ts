// import useData from "./useData";
import genres from "../data/genres";

// Using static data instead of making a request to the server everytime the pages loads.
// This improves performance and the genre list rarely changes anyway.

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// This hides the http request logic from our component

function useGenres() {
    // const genres = useData<Genre>("/genres");
    return { data: genres, isLoading: false, error: null };
}

export default useGenres;