import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
    gamequery: GameQuery;
}

function GameHeading({ gamequery }: Props) {
    const genre = useGenre(gamequery.genreId);
    const platform = usePlatform(gamequery.platformId);
    

    const heading = `${ platform?.name || ""} ${ genre?.name || ""} Games`

    return(
        <>
            <Heading as="h1" marginY={5} fontSize="5xl"> { heading } </Heading> 
        </>
    )

}

export default GameHeading;