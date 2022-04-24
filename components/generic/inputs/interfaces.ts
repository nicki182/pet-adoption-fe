
import { InputHTMLAttributes } from 'react';
import { SizeTypes } from '../interfaces';
export interface GenericInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /*Size types of input can exist*/
    sizes?: SizeTypes;
    /*Error message*/
    isError?: boolean;
}
export interface InputProps extends GenericInputProps {
    /*Variant types of input can exist*/
    type:'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}