import LoginRegister from '@components/custom/LoginRegister';
import LogOut from '@components/custom/LogOut/index';
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
        children:<LoginRegister/>,
        isLeft:false
    }
]
const navPrivate = [
    {
        href: '/auth/petList',
        children:'Pet List',
        isLink: true,
        isLeft:true
    },
    {
        href:'/auth/profile/:id',
        children:'Profile',
        isLink: true,
        isLeft:true
    },
    {
        isLink: false,
        children:<LogOut/>,
        isLeft:false
    }
]
const routes:{[key:string]:{isPublic:boolean}} = {
    '/': {
        isPublic: true,
    },
    '/petList': {
        isPublic: true,
    },
    '/profile/:id': {
        isPublic: false,
    }
}
export {
    navPublic,
    routes,
    navPrivate
}