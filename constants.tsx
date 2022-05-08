import LoginRegister from '@components/LoginRegister';
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
export {
    navPublic
}