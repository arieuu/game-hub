import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {

    return (
        <Card>
            <Image src={getCroppedImageUrl( game.background_image)} />

            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform) /** This weird destructuring will return a list of platforms */} />
                    <CriticScore score={game.metacritic} />
                </HStack>

                <Heading fontSize="2xl"> 
                    <Link to={"games/" + game.slug }> {game.name} </Link>
                 <Emoji rating={game.rating_top} /> </Heading>
            </CardBody>
        </Card>
    )

}

export default GameCard;