import  Box  from '@components/generic/Box';
import Inner from '@components/generic/layouts/Inner';
import AnimalCardTemplate,{AnimalCardTemplateProps} from '@components/generic/templates/cards/AnimalCardTemplate';
import { Animal } from '@interfaces';
import { FC } from 'react';
interface AnimalCardProps {
    animal: AnimalCardTemplateProps[]
    key:string | number
}
const AnimalCard:FC<AnimalCardProps> = ({ animal,key }) => {
    return(
        <Box size={'medium'} key={key}>
            <Inner marginX='small' marginY='small'>
            <AnimalCardTemplate animal={animal}/>
            </Inner>
        </Box>
    )
}
export default AnimalCard