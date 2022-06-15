import { FC,useState,useEffect } from 'react';
import Modal from "@components/generic/wizards/Modal"
import { GenericModalProps } from "../interfaces"
import Header from './components/Header';
import WarningMessage from './components/WarningMessage';
import WarningModalTemplate from '@components/generic/templates/modals/WarningModalTemplate';
import useTranslate from '@hooks/generic/useTranslate';
import  SecondaryButton  from '@components/generic/buttons/Secondary';
import PrimaryButton from '@components/generic/buttons/Primary';
import Inner from '@components/generic/layouts/Inner';
import useCountdown from '@hooks/generic/useCountdown';
import { sendDataApi } from '@utils/server';
import { useSelector } from 'react-redux';
import useSession from '@hooks/custom/useSession';
const UserIdleModal:FC<GenericModalProps> = ({open,onClose}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {count,pause,restart} = useCountdown(10)
    const { userId } = useSelector(state=>state.session || {userId:null})
    const {translate} = useTranslate({time:count})
    const {refreshToken, logout } = useSession()
    const handleOnClose = () =>onClose();
    useEffect(()=>{
        if(isOpen) restart()
    },[isOpen])
    useEffect(() => {
        if(!count){ 
            logout()
            onClose()
            pause()
        }
    },[count]);
    const handleRefreshToken = () => {
        refreshToken(userId)
        onClose()
        pause()
    }
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    return <Modal contentLabel='userIdleModal' onClose={handleOnClose} open={isOpen}>
        <Inner paddingY='medium' paddingX='small'>
        <WarningModalTemplate
            header={<Header header={translate('WARNING_IDLE_TITLE') as string}/>}
            explanation={<WarningMessage message={translate('WARNING_IDLE_PLEASE_CONFIRM_IN') as string}/>}
            buttons={{
                cancel:<SecondaryButton  onClick={handleOnClose}>{translate('CANCEL')}</SecondaryButton>,
                submit:<PrimaryButton  onClick={handleRefreshToken}>{translate('CONFIRM')}</PrimaryButton>
            }}
        />
        </Inner>
    </Modal>
}
export default UserIdleModal;