import { useState,useEffect } from "react";
const useDebaunce = (value:unknown, delay:number) => {
    const [debauncedValue, setDebauncedValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => {
        setDebauncedValue(value);
        }, delay);
    
        return () => {
        clearTimeout(handler);
        };
    }, [value, delay]);
    
    return debauncedValue;
    }
    export default useDebaunce;