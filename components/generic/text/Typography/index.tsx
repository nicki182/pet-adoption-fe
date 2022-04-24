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
` 
export default Typography;