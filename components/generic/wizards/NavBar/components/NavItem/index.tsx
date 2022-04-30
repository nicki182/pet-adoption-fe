import { FC,ReactNode } from "react"
import styled from "styled-components"
export type NavItemProps = React.HTMLAttributes<HTMLAnchorElement>

const NavItem = styled.a`
    text-decoration:none;
    color:${({theme})=>theme.colors.black};
    font-size:${({theme})=>theme.sizes.fontSizes.medium};
    font-family:${({theme})=>theme.fontFamilies.Text};
    padding:${({theme})=>theme.spacing.padding.allRound.medium};
    width:10rem;
    text-align:center;
    &:hover{
        background-color:${({theme})=>theme.colors.primary};
        color:${({theme})=>theme.colors.text};
        border-radius:${({theme})=>theme.extras.borderRadius.small};
        cursor:pointer;
    }
    `
export default NavItem