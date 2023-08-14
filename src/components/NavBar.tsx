import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";

function NavBar() {
    const { setSearchText } = useGameQueryStore();

    return(
        <>
            <HStack padding="12px">
                <Image src={logo} boxSize="60px"/>
                <SearchInput />
                <ColorModeSwitch />
            </HStack> 
        </>
    )

}

export default NavBar;