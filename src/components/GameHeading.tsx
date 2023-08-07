import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gamequery: GameQuery;
}

function GameHeading({ gamequery }: Props) {
    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();

    const genre = genres?.results.find(g => g.id === gamequery.genreId);
    const platform = platforms?.results.find(p => p.id === gamequery.platformId)

    const heading = `${ platform?.name || ""} ${ genre?.name || ""} Games`

    return(
        <>
            <Heading as="h1" marginY={5} fontSize="5xl"> { heading } </Heading> 
        </>
    )

}

export default GameHeading;