import useGenres from "../hooks/useGenres";

function GenreList() {
    const {data, error, isLoading } = useGenres();

    return(
        <>
            <ul>
                {data.map((genre) => <li key={genre.id}> {genre.name} </li>)}
            </ul>
        </>
    )

}

export default GenreList;