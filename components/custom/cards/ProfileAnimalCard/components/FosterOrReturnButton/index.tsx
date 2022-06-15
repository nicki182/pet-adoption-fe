import {FC} from 'react';
import  SecondaryButton  from '@components/generic/buttons/Secondary';
import { Animal } from '@interfaces';
interface Props {
    isFoster:boolean
    animal: Animal
}
const FosterOrReturnButton:FC<Props> = ({isFoster}) => {
    const onClick = () => {
        //console.log('isFoster',isFoster);
    }
    return <SecondaryButton onClick={onClick}>{isFoster ? 'Return' : 'Foster'}</SecondaryButton>
}
export default FosterOrReturnButton;