import PrimaryButton from '@components/generic/buttons/Primary';
import { FC } from 'react';
import { Animal } from '@interfaces';
interface Props {
    animal: Animal
}
const AdoptButton:FC<Props> = ({animal}) => {
    const onClick = () => {
        console.log('adopt',animal);
    }
    return <PrimaryButton onClick={onClick}>Adopt</PrimaryButton>;
    }
export default AdoptButton;