import useData from "./useData";


interface Platform {
    id: string; // I changed this from number to string because of error in platform selector.
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;