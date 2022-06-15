import { ReactNode, useState,FC } from "react"
import useAuthentication from "@hooks/generic/useAuthentication"
import NavBar from "@components/generic/wizards/NavBar"
import { navPrivate,navPublic } from "@constants"
import useUserInteractionTracker from "@hooks/generic/useUserInteractionTracker"
import UserIdleModal from "../modals/UserIdleModal"
const Auth:FC<ReactNode> = ({children})=>{
    const auth = useAuthentication()
    const [open, setOpen] = useState<boolean>(false)  
    const checkIfIsActive =async (isActive:boolean)=>{
        setOpen(!isActive && auth.isAuthenticated)
      }
    
    const {isActive} = useUserInteractionTracker('5m',checkIfIsActive)

  return <NavBar items={auth.isAuthenticated?navPrivate:navPublic}/>
    {children}
    <UserIdleModal open={open} onClose={()=>setOpen(false)} />
}
export default Auth