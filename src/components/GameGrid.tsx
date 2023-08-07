import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Platform } from "../hooks/usePlatforms";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres"
import { GameQuery } from "../App";
import React from "react";

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {

    const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames(gameQuery)
    const skeletons = [1,2,3,4,5,6];

    if(error) return <Text> {error.message} </Text>

    return(
            <>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 3}} spacing={6} padding="10px">
                    {/** Passing the card components as children to the container so that they get the general styling */}

                    {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton}> <GameCardSkeleton/> </GameCardContainer> )}

                    {data?.pages.map((page, index) => {
                        return <React.Fragment key={index}>
                            {page.results.map((game) => <GameCardContainer key={game.id}> <GameCard game={game}/> </GameCardContainer>)}
                        </React.Fragment>
                    })}
                </SimpleGrid> 
                {hasNextPage && <Button onClick={() => fetchNextPage()}> {isFetchingNextPage ? "Loading..." : "Load more"} </Button>}
            </>
    )

}

export default GameGrid;