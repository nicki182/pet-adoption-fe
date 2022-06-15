import useSession from '@hooks/custom/useSession';
const LogOut = () => {
    const { logout } = useSession();
    const logOut =async () => {
        await logout();
        window.location.href = '/';
    }
    return <div onClick={logOut}>Logout</div>
}
export default LogOut;
