import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

// This hides the http request logic from our component

function useGenres() {
    const genres = useData<Genre>("/genres");
    return genres;
}

export default useGenres;