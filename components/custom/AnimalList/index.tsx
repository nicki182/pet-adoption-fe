import { useMemo,FC } from 'react';
import AnimalCard from '@components/custom/cards/AnimalCard';
import AnimalListTemplate from '../templates/sections/AnimalListTemplate';
import { AnimalCardTemplateProps } from '@components/generic/templates/cards/AnimalCardTemplate';
interface AnimalListProps {
    animals: AnimalCardTemplateProps[]
}
const AnimalList:FC<AnimalListProps> = ({ animals }) => {
    const items = useMemo(() => animals.map((animal,index) =><AnimalCard animal={animal} key={index}/>), [animals]);
    return <AnimalListTemplate animals={items} />
};
export default AnimalList