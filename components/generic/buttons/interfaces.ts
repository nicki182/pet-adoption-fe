
import { ButtonHTMLAttributes, ReactNode } from 'react';
import {SizeTypes} from '../interfaces';
type GenericVariants = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link'
export interface GenericButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /*Background colors for button*/
    variant:GenericVariants;
    /*Size types of buttons can exist*/
    size?: SizeTypes;
    //Content inside of button
    children: ReactNode;
}