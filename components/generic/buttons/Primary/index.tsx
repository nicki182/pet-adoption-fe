import { FC } from 'react';
import Button from '../Button';
import { GenericButtonProps } from '../interfaces';
type Props = Omit<GenericButtonProps, 'variant'>;
const PrimaryButton:FC<Props> = ({children, ...props}) => {
    return (
        <Button {...props} variant="primary">
            {children}
        </Button>
    )
}
export default PrimaryButton;