
import { useMemo,FC } from 'react';
import ListTemplate from '@components/generic/templates/sections/ListTemplate';
import AnimalCard from '@components/custom/cards/AnimalCard';
import { AnimalCardTemplateProps } from '@components/generic/templates/cards/AnimalCardTemplate';
interface AnimalListTemplateProps {
    animals: AnimalCardTemplateProps[]
}
const AnimalListTemplate:FC<AnimalListTemplateProps> = ({ animals }) => {
    const items = useMemo(() => animals.map((animal,index) =><AnimalCard animal={animal} key={index}/>), [animals]);
    return <ListTemplate items={items} listType="3-column" gap="small" />;
};
export default AnimalListTemplate;