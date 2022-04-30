import {HTMLAttributes} from 'react';
import {SizeTypes} from '../interfaces'
export type HTMLTextType = 'h1'|'label'|'h2'|'p'|'h3'| 'h4'|'h5' | 'h6'| 'label'
export type TextColorType = 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark' | 'grey' | 'default'
export interface TypographyProps extends HTMLAttributes<HTMLElement>{ 
    element: HTMLTextType,
    children: string,
    color?:TextColorType,
    fontSize?: SizeTypes,
    isTitle?:boolean,
}
