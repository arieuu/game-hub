import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
    const {data, error, isLoading } = useGenres();

    if (isLoading) return <Spinner />; // Show a spinner while loading
    if (error) return null; // If there's an error no genre will be rendered

    return(
        <>
            <Heading fontSize="2xl" marginBottom={3}> Genres </Heading>
            <List>
                {data.map((genre) => <ListItem key={genre.id} paddingY="5px">
                                        <HStack>
                                            <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}  />
                                            <Button whiteSpace="normal" textAlign="left"  fontWeight={ genre.id === selectedGenre?.id ? "bold" : ""}  variant="link" fontSize="lg" onClick={() => onSelectGenre(genre)}> {genre.name} </Button>
                                        </HStack>
                                      </ListItem>)}
            </List>
        </>
    )

}

export default GenreList;