import {FC,createElement} from 'react'
import styled from 'styled-components';
import { TypographyProps } from '../interfaces';
const TypographyComponent:FC<TypographyProps> = ({element,...props})=>{
    return createElement(element,{...props})
}
const Typography = styled(TypographyComponent)<TypographyProps>`
    color: ${({ color, theme }) => theme.colors.textColors[color || 'default']};
    font-size: ${({ fontSize, theme,element }) =>theme.sizes.fontSizes[fontSize || element]};
    font-family: ${({ theme,isTitle }) => theme.fontFamilies[isTitle ? 'Title' : 'Text']};
    margin-left: ${({ marginX, theme }) => theme.spacing.margin.x[marginX || 'default']};
    margin-right: ${({ marginX, theme }) => theme.spacing.margin.x[marginX || 'default']};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    margin-top: ${({ marginY, theme }) => theme.spacing.margin.y[marginY || 'default']};
    margin-bottom: ${({ marginY, theme }) => theme.spacing.margin.y[marginY || 'default']};
    opacity: ${({show = true }) => show ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    cursor: ${({ onClick }) => onClick?'pointer' : 'text'};
` 
export default Typography;