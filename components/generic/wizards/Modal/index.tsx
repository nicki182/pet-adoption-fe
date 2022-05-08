import {FC} from 'react';
import ReactModal from "react-modal";
import clsx from 'clsx';
import  styled  from 'styled-components';
interface Props {
    onClose: () => void;
    /*to open overlay*/
    open: boolean;
    children: React.ReactNode;
    contentLabel: string;
    className?: string;
    overlayClassName?: string;
}
const ModalStyled = styled(ReactModal)`
    &.ReactModal__Content {
        outline: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    &.ReactModal__Content--after-open {
        position: absolute;
        top: 25%;
        left: 25%;
        right: 25%;  
  background-color: #fefdfd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  outline: none;
    }

    `
const Modal:FC<Props> = ({ onClose = () => { }, open, children, contentLabel, overlayClassName, className }) => {
    return (
        <ModalStyled
            isOpen={open}
            contentLabel={contentLabel}
            onRequestClose={onClose}
        >
            {children}
        </ModalStyled>
    )
}
export default Modal;