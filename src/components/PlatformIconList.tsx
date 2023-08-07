import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import {BsGlobe } from "react-icons/bs";

import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

function PlatformIconList({ platforms } :Props) {
    // Defining an index signature saying this object will have n number of keys of type string

    const iconMap: { [key: string]: IconType } = {

        // We'll rely on the slug for each platform because they won't change and are like a textual id
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        mac: FaApple,
        ios: MdPhoneIphone,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe
    }

   return(
    <HStack marginY={1}>
        {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id}> </Icon> )}
    </HStack>
   ) 

}

export default PlatformIconList;