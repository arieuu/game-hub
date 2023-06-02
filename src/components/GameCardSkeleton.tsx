import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


function GameCardSkeleton() {

    return(
        <>
            <Card>
                <Skeleton height={200} />     

                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card> 
        </>
    )

}

export default GameCardSkeleton;