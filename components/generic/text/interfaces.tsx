import { HTMLAttributes, ReactNode } from 'react';
import {SizeTypes} from '../interfaces'
export type HTMLTextType = 'h1'|'label'|'h2'|'p'|'h3'| 'h4'|'h5' | 'h6'| 'label' | 'span'
export type TextColorType = 'grey'|'default'| 'danger' | 'warning'|'highlight'
export interface TypographyProps extends HTMLAttributes<HTMLElement>{ 
    element: HTMLTextType,
    children: string | ReactNode,
    color?:TextColorType,
    fontSize?: SizeTypes,
    isTitle?:boolean,
    marginX?: SizeTypes,
    marginY?: SizeTypes,
    textAlign?: 'left' | 'right' | 'center' | 'justify'
    show?:boolean
}
