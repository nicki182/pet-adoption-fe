import AddButton from "@components/generic/buttons/AddButton";
import { FC,useState } from "react";
import AnimalModal from "@components/custom/modals/AnimalModal";

const AddPet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClose = () => setIsOpen(false);
    const handleOnOpen = () => setIsOpen(true);
    return <AddButton height={'1.5rem'} width='1.5rem' onClick={handleOnOpen}/>;
    <AnimalModal onClose={handleOnClose} open={isOpen}/>;
    }
    export default AddPet;