import SecondaryButton from "@components/generic/buttons/Secondary"
import { FC } from 'react';
import useTranslate from '../../../../hooks/useTranslate';
import { GenericButtonProps } from '@components/generic/buttons/interfaces';
interface Props extends Omit<GenericButtonProps,'type' |'variant'| 'children' | 'onClick'>{
    onClick: () =>Promise<unknown | void>;
} 
const CancelButton:FC<Props> = ({onClick,...props}) => {
    const {translate} = useTranslate();
    return (<>
        <SecondaryButton type="button" onClick={onClick}{...props}>
        {translate('CANCEL')} 
        </SecondaryButton>
    </>)
}
export default CancelButton