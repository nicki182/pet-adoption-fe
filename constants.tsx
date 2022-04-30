import { ReactElement } from 'react';
const navPublic = [
    {
        href: '/',
        children:'Home',
        isLink: true,
        isLeft: true
    },
    {
        href:'/petList',
        children:'Pet List',
        isLink: true,
        isLeft:true
    },
    {
        isLink: false,
        children:<>Login/Register</>,
        isLeft:false
    }
]
export {
    navPublic
}