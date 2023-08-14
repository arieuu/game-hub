import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import useGameQueryStore from "../store";


function GenreList() {
    const {data, error, isLoading } = useGenres();
    const genreId = useGameQueryStore(selector => selector.gameQuery.genreId);
    const setGenreId = useGameQueryStore(selector => selector.setGenreId);

    if (isLoading) return <Spinner />; // Show a spinner while loading
    if (error) return null; // If there's an error no genre will be rendered

    return(
        <>
            <Heading fontSize="2xl" marginBottom={3}> Genres </Heading>
            <List>
                {data?.results.map((genre) => <ListItem key={genre.id} paddingY="5px">
                                        <HStack>
                                            <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}  />
                                            <Button whiteSpace="normal" textAlign="left"  fontWeight={ genre.id === genreId? "bold" : ""}  variant="link" fontSize="lg" onClick={() => setGenreId(genre.id)}> {genre.name} </Button>
                                        </HStack>
                                      </ListItem>)}
            </List>
        </>
    )

}

export default GenreList;