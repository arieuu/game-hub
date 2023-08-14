import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";


function SortSelector() {

    // Array of objects to map menu items with

    const sortOrder = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Data added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];

    const setSortOrder = useGameQueryStore(selector => selector.setSortOrder);
    const selectedSortOrder = useGameQueryStore(selector => selector.gameQuery.sortOrder);

    const currentSortOrder = sortOrder.find(order => order.value === selectedSortOrder)

    return(
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order by: {currentSortOrder?.label || "Relevance"} </MenuButton>
                <MenuList>
                    { sortOrder.map((order) => <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}> {order.label} </MenuItem>) }
                </MenuList>
            </Menu> 
        </>
    )

}

export default SortSelector;