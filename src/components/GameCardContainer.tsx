import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function GameCardContainer({ children }: Props) {

    /**
     * Container that will get the 2 different types of cards right now as children and apply
     * general styling to them. That stops us from having to style the different cards individually.
     */

    return(
        <Box borderRadius={10} overflow="hidden" _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in"
        }}>
            {children}
        </Box>
    );

}

export default GameCardContainer;