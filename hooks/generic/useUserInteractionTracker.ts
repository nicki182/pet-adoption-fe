import ms from 'ms';
import { useState, useEffect } from 'react';
import { useIdleTimer } from "react-idle-timer";
const useUserInteractionTracker = (inactivityTime:number | string,callback:(isActive:boolean)=>Promise<void | unknown>) => {
    const [isActive, setIsActive] = useState(true);
    const handleOnIdle = () => {
        setIsActive(false);
    }

    const handleOnActive = () => {
        setIsActive(true);
    }

    const handleOnAction = () => {
        setIsActive(true);
    }
    useEffect(() => {
        const interval = setInterval(()=>{
            callback(isActive);
        },[ms(inactivityTime)])
        return ()=> clearInterval(interval);
    },[inactivityTime,isActive,callback]);
    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: ms(inactivityTime),
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
    })

return {isActive,getRemainingTime,getLastActiveTime}
}
export default useUserInteractionTracker;