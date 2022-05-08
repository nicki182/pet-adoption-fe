import {useState} from 'react';
import ModalLoginRegister from '@components/modals/LoginRegisterModal';
const LoginRegister = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
    <div onClick={()=>setIsOpen(true)}>
        Login/Register
    </div>
    <ModalLoginRegister onClose={()=>setIsOpen(false)} open={isOpen}/>
</>
}
export default LoginRegister;