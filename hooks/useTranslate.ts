import { useState } from "react";
import { LenguageType } from "../components/generic/interfaces";
import Langs from "@langs/index"
const useTranslate = () => {
    //TODO: Add useGetLenguage
    const [language, setLanguage] =useState<LenguageType>('us');
    const translate = (key: string) => {
        return Langs[language][key];
    }
    return {
        translate
    }
}
    export default useTranslate;