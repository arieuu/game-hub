import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

function NavBar() {
    const { setSearchText } = useGameQueryStore();

    return(
        <>
            <HStack padding="12px">

                <Link to="/">
                    <Image src={logo} boxSize="60px" objectFit="cover"/>
                </Link>

                <SearchInput />
                <ColorModeSwitch />
            </HStack> 
        </>
    )

}

export default NavBar;