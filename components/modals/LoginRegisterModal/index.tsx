import {FC,useState,useEffect} from 'react'
import Modal from "@components/generic/wizards/Modal";
import LoginRegister from './components/LoginRegister/index';
import Inner from '@components/generic/layouts/Inner';
interface Props {
    open: boolean;
    onClose: () => any;
}
const ModalLoginRegister:FC<Props> = ({open,onClose}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClose = () =>onClose();
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    return <Modal contentLabel='login/register' onClose={handleOnClose} open={isOpen}>
        <Inner paddingY='medium' paddingX='medium'>
        <LoginRegister onCancel={handleOnClose}/>
        </Inner>
    </Modal>
}
export default ModalLoginRegister;