import styled from 'styled-components'
import { GenericButtonProps } from '../interfaces'
const Button = styled.button<GenericButtonProps>`
    background: ${({variant,theme}) => theme.colors[variant]};
    color: ${({theme}) => theme.colors.text};
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    opacity: ${({disabled}) => disabled ? 0.5 : 1};
    box-shadow: ${({theme})=>theme.extras.boxShadow.allRound.xlSmall};
    font-size:${({size,theme}) => theme.sizes.fontSizes[size || 'default']};
    width:${({size,theme}) =>theme.sizes.button[size || 'default'].width};
    height:${({size,theme}) => theme.sizes.button[size || 'default'].height};
    transition: ${({disabled})=> disabled?'':'all .2s ease-in-out'}; 
    &:hover{
        cursor: ${({disabled})=> disabled?'auto':'pointer'};
        box-shadow: ${({theme})=>theme.extras.boxShadow.allRound.medium};
    }
    &:active{
        transform:${({disabled})=> disabled?'':'scale(0.95)'};
    }
`
export default Button;