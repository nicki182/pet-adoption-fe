import Modal from "@components/generic/wizards/Modal"
import AnimalForm from "@components/generic/forms/AnimalForm"
import Inner from "@components/generic/layouts/Inner"
import { GenericModalProps } from "../interfaces"
import { useState, useEffect } from "react"
import { Animal } from '@interfaces';
interface Props extends GenericModalProps{
    initialValues?:Animal
}
const AnimalModal:FC<Props> = ({initialValues,onClose,open})=>{
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClose = () =>onClose();
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    <Modal contentLabel='login/register' onClose={handleOnClose} open={isOpen}>
        <Inner paddingY='huge' paddingX='medium'>
        <AnimalForm initialValues={initialValues} onCancel={handleOnClose} handleOnClose={handleOnClose}/>
        </Inner>
    </Modal>
}
export default AnimalModal;