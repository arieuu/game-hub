import { Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";


const ErrorPage = () => {
    const error = useRouteError();
    
    return(
        <>
            <NavBar />
            <Flex flexDirection="column" justifyContent="center" alignItems="center" paddingTop={20}>
                <Heading> Oops </Heading> 
                <Text> { isRouteErrorResponse(error) ? "This page does not exist" : "Something went wrong :(" } </Text>
            </Flex>
        </>
    )
    
}

export default ErrorPage;