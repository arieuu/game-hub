import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

function GenreList() {
    const {data, error, isLoading } = useGenres();

    if (isLoading) return <Spinner />; // Show a spinner while loading
    if (error) return null; // If there's an error no genre will be rendered

    return(
        <>
            <List>
                {data.map((genre) => <ListItem key={genre.id} paddingY="5px">
                                        <HStack>
                                            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}  />
                                            <Text fontSize="lg"> {genre.name} </Text>
                                        </HStack>
                                      </ListItem>)}
            </List>
        </>
    )

}

export default GenreList;