import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import './App.css'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

// Implementing query object pattern where we pack related variables inside an object.

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery);

  return <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`, // bigger than 1024px
    }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }} 
    >

      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/> 
      </GridItem>

      <Show above='lg'>
        <GridItem area="aside" paddingX="5">
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>

      <GridItem area="main">

        <Box paddingLeft={2.5}>
          <GameHeading gamequery={gameQuery} />

          <HStack spacing={3} marginBottom={1.5}>
            <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform} />
            <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} sortOrderValue={gameQuery.sortOrder} />
          </HStack>
        </Box>

      <GameGrid gameQuery={gameQuery}/>

      </GridItem>
    </Grid> 
  </>
}

export default App
