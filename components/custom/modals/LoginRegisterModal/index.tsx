import {FC,useState,useEffect} from 'react'
import Modal from "@components/generic/wizards/Modal";
import LoginRegister from './components/LoginRegister/index';
import Inner from '@components/generic/layouts/Inner';
import { GenericModalProps } from '../interfaces';
const ModalLoginRegister:FC<GenericModalProps> = ({open,onClose}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClose = () =>onClose();
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    return <Modal contentLabel='login/register' onClose={handleOnClose} open={isOpen}>
        <Inner paddingY='huge' paddingX='medium'>
        <LoginRegister onCancel={handleOnClose} handleOnClose={handleOnClose}/>
        </Inner>
    </Modal>
}
export default ModalLoginRegister;