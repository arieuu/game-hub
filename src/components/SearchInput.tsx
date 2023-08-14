import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";


function SearchInput() {

    const ref = useRef<HTMLInputElement>(null); // Access the input by reference

    // Using a selector to only get one function from the store, this way
    // it will only re-render if this one value changes, it won't care for the other things

    const setSearchText = useGameQueryStore(selector => selector.setSearchText);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) setSearchText(ref.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled"/> 
            </InputGroup>
        </form>
    )

}

export default SearchInput;