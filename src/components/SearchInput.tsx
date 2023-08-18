import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";


function SearchInput() {

    const ref = useRef<HTMLInputElement>(null); // Access the input by reference

    // Using a selector to only get one function from the store, this way
    // it will only re-render if this one value changes, it won't care for the other things

    const setSearchText = useGameQueryStore(selector => selector.setSearchText);

    const navigate = useNavigate();

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current) {

                // update state to hold this new value then redirect user to the home page if they're not
                // so they can see the results
                
                setSearchText(ref.current.value);
                navigate("/");
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled"/> 
            </InputGroup>
        </form>
    )

}

export default SearchInput;