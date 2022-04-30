import PrimaryButton from "@components/generic/buttons/Primary"
import { FC } from 'react';
import {isEmpty} from 'lodash'
import useTranslate from '../../../../hooks/useTranslate';
import {useFormContext} from 'react-hook-form'
import { GenericButtonProps } from '@components/generic/buttons/interfaces';
type Props = Omit<GenericButtonProps, 'variant' | 'type'| 'disabled' | 'children'>;
const SubmitButton:FC<Props> = ({...props}) => {
    const {translate} = useTranslate();
    const { formState:{errors,isSubmitting,isDirty}} = useFormContext();
    const handleDisabled = () => !isEmpty(errors) || isSubmitting || !isDirty
    return (<>
        <PrimaryButton disabled={handleDisabled()} type="submit" {...props}>
        {/*TODO: CHANGE WITH ICON ANIMATION*/}
        {isSubmitting ? 'Loading...' :translate('SUBMIT')} 
        </PrimaryButton>
    </>)
}
export default SubmitButton