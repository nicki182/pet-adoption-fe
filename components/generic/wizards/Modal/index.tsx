import {FC} from 'react';
import ReactModal from "react-modal";
import clsx from 'clsx';
import './styles.css'
interface Props {
    onClose: () => void;
    /*to open overlay*/
    open: boolean;
    children: React.ReactNode;
    contentLabel: string;
    className?: string;
    overlayClassName?: string;
}
const Modal:FC<Props> = ({ onClose = () => { }, open, children, contentLabel, overlayClassName, className }) => {
    return (
        <ReactModal
            isOpen={open}
            contentLabel={contentLabel}
            className={clsx("modal", className)}
            overlayClassName={clsx(overlayClassName,'modal-overlay')}
            onRequestClose={onClose}
        >
            {children}
        </ReactModal>
    )
}
export default Modal;