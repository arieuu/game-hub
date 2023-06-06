// Creating a custom hook to get list of games
// We do everything then return a games object with the results and an error object with any error

import useData from "./useData";
import { Genre } from "./useGenres";

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

                                                                                                                 // Here we're passing query parameters so that the api will filter the request to what we want
    const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>  
        useData<Game>("/games", { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, 
        // This is our dependency array, when this changes the component re-renders
        [selectedGenre?.id, selectedPlatform?.id]);


export default useGames;