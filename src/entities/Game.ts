import { Platform } from "./Platform";


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
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
}
