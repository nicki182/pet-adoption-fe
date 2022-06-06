import Flex from "@components/generic/layouts/Flex";
import { FC, ReactNode } from 'react';
interface Props {
    animals:ReactNode
    searchBar:ReactNode
    addButton:ReactNode
}
const AnimalListTemplate:FC<Props> = ({animals,searchBar,addButton})=>{
    return <Flex direction='column' gap='big'>
        {addButton}
        {searchBar}
        {animals}
        </Flex>
}
export default AnimalListTemplate;