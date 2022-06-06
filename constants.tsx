import LoginRegister from '@components/custom/LoginRegister';
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
        children:'Logout',
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