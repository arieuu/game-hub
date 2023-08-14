import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


function GameGrid() {

    const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames()
    const skeletons = [1,2,3,4,5,6];

    if(error) return <Text> {error.message} </Text>

    // Complicated math to determine the total number of items (games) we've fetched so far

    const fetchedGamesCount = data?.pages.reduce(
        (total, page) => total + page.results.length, 0
    ) /* This is undefined in the start so we initialize it */ || 0

    return(
            <>
                <InfiniteScroll
                    dataLength={fetchedGamesCount} 
                    hasMore={!!hasNextPage} /* Convert value to boolean (undefined will become false) */
                    next={() => fetchNextPage()}
                    loader={<Spinner  marginLeft="50%" />}
                >

                    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 3}} spacing={6} padding="10px">
                        {/** Passing the card components as children to the container so that they get the general styling */}

                        {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton}> <GameCardSkeleton/> </GameCardContainer> )}

                        {data?.pages.map((page, index) => {
                            return <React.Fragment key={index}>
                                {page.results.map((game) => <GameCardContainer key={game.id}> <GameCard game={game}/> </GameCardContainer>)}
                            </React.Fragment>
                        })}

                    </SimpleGrid> 
                </InfiniteScroll>
            </>
    )

}

export default GameGrid;