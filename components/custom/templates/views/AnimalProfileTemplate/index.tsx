import ProfileAnimalCard from "@components/custom/cards/ProfileAnimalCard"
import Flex from "@components/generic/layouts/Flex"

import { FC,ReactNode } from 'react';
interface Props{
    profile: ReactNode
}
const AnimalProfileTemplate:FC<Props> = ({profile}) => {
    return <Flex>
        {profile}
    </Flex>
}
export default AnimalProfileTemplate