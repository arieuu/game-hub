import { create } from "zustand";

// Store to avoid propdrilling with the data and function present in gamequery

// We only need this in here

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    // Setting initial state and implementation

    gameQuery: {},
    setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId }})),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder }})),
    setSearchText: (searchText) => set(store => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId }}))
}));

export default useGameQueryStore;

