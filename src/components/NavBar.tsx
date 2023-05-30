import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";


function NavBar() {
    return(
        <>
            <HStack justifyContent="space-between" padding="12px">
                <Image src={logo} boxSize="60px"/>
                <ColorModeSwitch />
            </HStack> 
        </>
    )

}

export default NavBar;