import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


function PlatformSelector() {
    const { data, error }= usePlatforms();
    const selectedPlatformId = useGameQueryStore(selector => selector.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    const setSelectedPlatformId = useGameQueryStore(selector => selector.setPlatformId);

    if (error) return null;

    return(
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}> { selectedPlatform ? selectedPlatform.name : "Platform" } </MenuButton>
                <MenuList>
                    { data?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}> {platform.name} </MenuItem>) }
                </MenuList>
            
            </Menu> 
        </>
    )

}

export default PlatformSelector;