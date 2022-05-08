//TODO: If you want to add lenguages in dictionary, add here logic to change the language
import { useState } from "react";
import { LenguageType } from "@components/generic/interfaces";
const useGetLenguage = () => {
    const [language, setLanguage] = useState<LenguageType>('us');
    return {
        language
    } 
}
export default useGetLenguage;