import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";


function NavBar() {
    return(
        <>
            <HStack>
                <Image src={logo} boxSize="60px"/>
                <Text> Company name </Text>
            </HStack> 
        </>
    )

}

export default NavBar;