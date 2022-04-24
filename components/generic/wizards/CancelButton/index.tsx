import SecondaryButton from "@components/generic/buttons/Secondary"
import { FC } from 'react';
import useTranslate from '../../../../hooks/useTranslate';
interface Props{
    onClick: () =>Promise<unknown | void>;
} 
const CancelButton:FC<Props> = ({onClick}) => {
    const {translate} = useTranslate();
    return (<>
        <SecondaryButton type="button" onClick={onClick}>
        {translate('CANCEL')} 
        </SecondaryButton>
    </>)
}
export default CancelButton