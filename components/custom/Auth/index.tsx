import useAuthentication from "@hooks/generic/useAuthentication"
import NavBar from "@components/generic/wizards/NavBar"
import { navPrivate,navPublic } from "@constants"
const Auth = ({children})=>{
    const auth = useAuthentication()
    return <NavBar items={auth.isAuthenticated?navPrivate:navPublic}/>
    {children}
}
export default Auth