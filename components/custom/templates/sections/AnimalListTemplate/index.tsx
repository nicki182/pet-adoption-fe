
import { AnimalCardTemplateProps } from '@components/generic/templates/cards/AnimalCardTemplate';
import ListTemplate from '@components/generic/templates/sections/ListTemplate';
import { FC,ReactNode } from 'react';
interface AnimalListTemplateProps {
    animals: ReactNode[]
}
const AnimalListTemplate:FC<AnimalListTemplateProps> = ({ animals }) => {
    return <ListTemplate items={animals} listType="3-column" gap="small" />;
};
export default AnimalListTemplate;