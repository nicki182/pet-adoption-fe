import {FC} from 'react';
import  styled  from 'styled-components';
import Button from '../Button';
import { GenericButtonProps } from '../interfaces';
type Props = Omit<GenericButtonProps, 'variant'>;
const SecondaryButton:FC<Props> = ({children, ...props}) => {
    return (
        <Button {...props} variant="secondary">
            {children}
        </Button>
    )
}
export default SecondaryButton;