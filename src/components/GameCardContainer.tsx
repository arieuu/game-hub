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
        <Box width="300px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );

}

export default GameCardContainer;