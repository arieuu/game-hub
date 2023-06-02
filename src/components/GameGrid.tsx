import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


function GameGrid() {

    const { data, error, isLoading } = useGames()
    const skeletons = [1,2,3,4,5,6];

    return(
        <>
            {error && <Text> {error} </Text>}

            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 3}} spacing={3} padding="10px">
                {/** Passing the card components as children to the container so that they get the general styling */}
                {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton}> <GameCardSkeleton/> </GameCardContainer> )}     
                {data.map((game) => <GameCardContainer key={game.id} > <GameCard game={game}/> </GameCardContainer>)}     
            </SimpleGrid> 
        </>
    )

}

export default GameGrid;